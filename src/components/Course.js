import _ from 'lodash';
import React, { Component } from 'react';
import { resetCourse } from '../actions';
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
      <div className="course">
        {this.renderTiles()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { course } = state;
  return { course }
}

export default connect(mapStateToProps, { resetCourse })(Course)
