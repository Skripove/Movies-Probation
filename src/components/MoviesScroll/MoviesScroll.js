import React from "react";
import "./MoviesScroll.css";
import Movies from "../Movies/Movies";
import PropTypes from "prop-types";

const MoviesScroll = ({ title, movies, onClick }) => {
  return (
    <div className="scroll-section">
      <h1>{title}</h1>
      <div className="scroll-wrapper">
        {movies.length === 0 ? (
          <div className="scroll-wrapper__empty">The list is empty...</div>
        ) : (
          <Movies slider movies={movies} onClick={onClick} />
        )}
      </div>
    </div>
  );
};

export default MoviesScroll;

MoviesScroll.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
  onClick: PropTypes.func
};
