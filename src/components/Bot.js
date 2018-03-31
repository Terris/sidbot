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
    const transitionClass= this.props.bot.transition;
    return(
      <CSSTransition in={this.state.enter} classNames={transitionClass} timeout={2000}>
        <div className="bot"></div>
      </CSSTransition>
    )
  }
}

export default Bot;
