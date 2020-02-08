import React from 'react';
import PropTypes from 'prop-types';
import './GenreItem.css'

const GenresItem = ({genre, id, onClick, currentGenreId}) => 
  <li 
    className={currentGenreId === id ? "genre-active" : ""} 
    onClick={() => onClick(id)}>
      {genre}
  </li>

export default GenresItem;

GenresItem.propTypes = {
  genre: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  currentGenreId: PropTypes.number
};

