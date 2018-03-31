import _ from 'lodash';
import React, { Component } from 'react';
import { clearProgram, programRunning } from '../actions';
import { botAPI } from '../api/BotAPI';
import { connect } from 'react-redux';
import '../stylesheets/program.css';

class Program extends Component {

  componentDidMount() {
    //this.props.clearProgram();
  }

  handleRunProgram = () => {
    this.props.programRunning();
    const funkyProgram = _.map(this.props.program.programFunktions, programFunktion => {
      return this.props.funktions[programFunktion.funktion_id]
    })
    botAPI.runProgram( funkyProgram );
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
        <div className="mod">
          <button onClick={this.handleRunProgram} disabled={program.isRunning}>Run Program</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { program, funktions } = state;
  return { program, funktions };
}

export default connect(mapStateToProps, { clearProgram, programRunning })(Program);
