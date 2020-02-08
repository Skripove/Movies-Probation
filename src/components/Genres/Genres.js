import React from 'react';
import PropTypes from 'prop-types';
import './Genres.css'
import GenresItem from '../GenresItem'

const Genres = ({genres, onClick, currentGenreId}) => 
  <ul className="genres">
    {genres.map((e) => 
    <GenresItem 
      genre={e.name} 
      key={e.id} 
      id={e.id} 
      onClick={onClick} 
      currentGenreId={currentGenreId}
    />)}
  </ul>

  export default Genres

  Genres.propTypes = {
    genres: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    currentGenreId: PropTypes.number
  };