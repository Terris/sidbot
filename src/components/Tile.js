import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bot from './Bot';
import '../stylesheets/tile.css';

class Tile extends Component {
  renderTile() {
    if (this.props.bot.tile_id === this.props.tile.id) {
      return(
        <Bot bot={this.props.bot} />
      )
    }
  }
  render() {
    return(
      <div className="course__tile">
        {this.renderTile()}
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { bot } = state;
  return { bot }
}

export default connect(mapStateToProps)(Tile);
