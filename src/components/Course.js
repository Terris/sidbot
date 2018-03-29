import React from 'react';
import Tile from './Tile.js';
import '../stylesheets/course.css';

export default (props) => {
  return(
    <div className="course">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  )
}
