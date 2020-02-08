import React from 'react';
import './Trailers.css'
import PropTypes from 'prop-types';
import TrailerItem from '../TrailerItem'

const Trailers = ({trailers}) => {
  return (
  <ul className="trailers">
  {trailers.map((e) => 
      <TrailerItem 
        key={e.id}
        id={e.id}
        path={e.path}
      />)}
  </ul>
  )
}

export default Trailers

Trailers.propTypes = {
  trailers: PropTypes.array
};