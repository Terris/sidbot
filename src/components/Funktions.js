import _ from 'lodash';
import React, { Component } from 'react';
import { fetchFunktions, addProgramFunktion } from '../actions';
import { connect } from 'react-redux';
import '../stylesheets/funktions.css';

class Funktions extends Component {

  renderFunktions = () => {
    return _.map(this.props.funktions, funktion => {
      return (
        <div key={funktion.id} className="funktion" onClick={e => { this.props.addProgramFunktion(funktion.id) } }>
          {funktion.name}
        </div>
      )
    });
  }

  render() {
    return(
      <div className="funktions_wrapper">
        <h2>Functions</h2>
        <div className="mod funktions">
          {this.renderFunktions()}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { funktions, program } = state;
  return { funktions, program };
}
export default connect(mapStateToProps, { fetchFunktions, addProgramFunktion })(Funktions);
