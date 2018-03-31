import _ from 'lodash';
import React, { Component } from 'react';
import { clearProgram, programRunning, programFinished, moveBotLeft, moveBotRight } from '../actions';
import { botConstants } from '../constants';
import { connect } from 'react-redux';
import '../stylesheets/program.css';

class Program extends Component {

  runProgram = (program, callback) => {
    Array.prototype.delayedForEach = function(callback, timeout, thisArg){
      var i = 0, l = this.length, self = this,
        caller = function(){
          callback.call(thisArg || self, self[i], i, self);
          (++i < l) && setTimeout(caller, timeout);
        };
      caller();
    };
    program.delayedForEach(funktion => {
      switch (funktion.bot_action) {
        case botConstants.MOVE_BOT_RIGHT:
          return this.props.moveBotRight();
        case botConstants.MOVE_BOT_LEFT:
          return this.props.moveBotLeft();
        default:
          return null
      }
    }, 1800);
    callback();
  }

  handleRunProgram = () => {
    this.props.programRunning();
    const funkyProgram = _.map(this.props.program.programFunktions, programFunktion => {
      return this.props.funktions[programFunktion.funktion_id]
    })
    this.runProgram(funkyProgram, () => {
      this.props.programFinished();
    });
  }

  renderProgramFunktions = () => {
    return _.map(this.props.program.programFunktions, programFunktion => {
      return (
        <div key={programFunktion.id} className="program_funktion has_funktion">
          {this.props.funktions[programFunktion.funktion_id].name}
        </div>
      )
    })
  }

  render() {
    const { program } = this.props;
    return(
      <div className="program_wrapper">
        <h2>Program</h2>
        <div className="mod">
          {this.renderProgramFunktions()}
          <div className="program_funktion">function</div>
        </div>
        <div className="mod btn-group">
          <button onClick={this.handleRunProgram} disabled={program.isRunning}>Run Program</button>
          <button className="btn-red" onClick={e => {this.props.clearProgram()}} disabled={program.isRunning}>Clear Program</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { program, funktions } = state;
  return { program, funktions };
}

export default connect(mapStateToProps, { clearProgram, programRunning, programFinished, moveBotLeft, moveBotRight })(Program);
