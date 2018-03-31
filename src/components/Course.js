import _ from 'lodash';
import React, { Component } from 'react';
import { resetCourse, moveBotLeft, moveBotRight } from '../actions';
import { connect } from 'react-redux';
import Tile from './Tile';
import '../stylesheets/course.css';

class Course extends Component {

  componentDidMount() {
    this.props.resetCourse()
  }

  renderTiles = () => {
    return _.map(this.props.course.tiles, tile => {
      return <Tile key={tile.id} tile={tile} />
    })
  }

  render() {
    const { course } = this.props;
    if ( !course ) {
      return <div>Loading...</div>
    }
    return(
      <div>
        <div className="course">
          {this.renderTiles()}
        </div>
        <div className="controls">
          <button onClick={this.props.moveBotLeft}>Move Left</button>
          <button onClick={this.props.moveBotRight}>Move Right</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { course, bot } = state;
  return { course, bot }
}

export default connect(mapStateToProps, { resetCourse, moveBotLeft, moveBotRight })(Course)
