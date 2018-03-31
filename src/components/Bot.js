import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../stylesheets/bot.css';

class Bot extends Component {

  constructor(props){
    super(props);
    this.state = {
      enter: false
    }
  }

  componentDidMount() {
    this.setState({ enter: true });
  }

  render() {
    const { bot } = this.props;
    return(
      <CSSTransition in={this.state.enter} classNames={bot.transition} timeout={2000}>
        <div className="bot"></div>
      </CSSTransition>
    )
  }
}

export default Bot;
