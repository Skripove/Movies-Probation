import React from "react";
import PropTypes from "prop-types";
import MovieItem from "../MovieItem";
import styled from "styled-components";

const StyledMovies = styled.ul`
  display: flex;
  justify-content: ${({ slider }) => (slider ? "left" : "space-around")};
  flex-wrap: ${({ slider }) => (slider ? "nowrap" : "wrap")};
  margin: ${({ slider }) => (slider ? "10px auto 10px auto" : "80px 2% 0 0")};
`;

const Movies = ({ movies, boxId, slider = false }) => {
  return (
    <StyledMovies slider={slider} id={boxId}>
      {movies.map(e => (
        <MovieItem
          slider={slider}
          pathImg={e.pathImg}
          title={e.title}
          overview={e.overview}
          key={e.id}
          id={e.id}
        />
      ))}
    </StyledMovies>
  );
};

export default Movies;

Movies.propTypes = {
  movies: PropTypes.array,
  boxId: PropTypes.string,
  slider: PropTypes.bool
};
