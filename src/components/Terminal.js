import React, { Component } from 'react';
import Funktions from './Funktions';
import Program from './Program';
import '../stylesheets/terminal.css';

class Terminal extends Component {
  render() {
    return(
      <div className="terminal">
        <Funktions />
        <Program />
      </div>
    )
  }
}

export default Terminal;
