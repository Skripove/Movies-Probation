import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import App from "../pages/App";
import { fillWatchedMovies } from "../store/watchedMovies/actions";
import { fillFavouritesMovies } from "../store/favouritesMovies/actions";
import { fillMoviesOnStore } from "../store/addedMoviesOnStore/actions";
import { fillRatings } from "../store/ratings/actions";
import { toggleAjaxInProgress } from "../store/ajaxInProgress/actions";

const AppContainer = props => {
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const {
    ajaxInProgress,
    fillWatchedMovies,
    fillFavouritesMovies,
    fillMoviesOnStore,
    fillRatings,
    toggleAjaxInProgress
  } = props;

  useEffect(() => {
    const makeAxiosArray = idArr => {
      return idArr.map(id => {
        return axios(`/3/movie/${id}`, {
          params: {
            append_to_response: "videos"
          }
        });
      });
    };

    const axiosAll = arr => {
      if (!ajaxInProgress) {
        toggleAjaxInProgress();
        axios
          .all(arr)
          .then(
            axios.spread((...args) => {
              return [...args].map(result => {
                result = result.data;
                const pathImg = `http://image.tmdb.org/t/p/w500${result.poster_path}`;
                const companies = result.production_companies
                  .map(elem => elem.name)
                  .join(", ");
                const countries = result.production_countries
                  .map(elem => elem.name)
                  .join(", ");
                const genres = result.genres.map(elem => elem.name).join(", ");
                const trailers = result.videos.results.map(elem => ({
                  id: elem.id,
                  path: `https://www.youtube.com/embed/${elem.key}`
                }));
                const {
                  id,
                  runtime,
                  vote_average: voteAverage,
                  title,
                  overview
                } = result;
                return {
                  id,
                  pathImg,
                  companies,
                  countries,
                  genres,
                  runtime,
                  voteAverage,
                  title,
                  overview,
                  trailers,
                  rating: userCont.find(obj => obj.id === id).rating
                };
              });
            })
          )
          .then(result => {
            fillMoviesOnStore(result);
            toggleAjaxInProgress();
          })
          .then(() => setDataIsLoaded(true));
      }
    };

    const userCont = JSON.parse(localStorage.getItem("userContent")) || [];
    const watched = userCont
      .filter(obj => obj.watched === true)
      .map(obj => obj.id);
    const favourites = userCont
      .filter(obj => obj.favourites === true)
      .map(obj => obj.id);
    const idMoviesInStoreArr = [...watched, ...favourites];
    const ratings = userCont
      .filter(obj => obj.rating !== "0")
      .map(obj => ({
        id: obj.id,
        rating: obj.rating
      }));

    fillWatchedMovies(watched);
    fillFavouritesMovies(favourites);
    fillRatings(ratings);
    if (idMoviesInStoreArr !== []) axiosAll(makeAxiosArray(idMoviesInStoreArr));
  }, []);

  return dataIsLoaded && <App />;
};

const mapStateToProps = state => ({
  ajaxInProgress: state.ajaxInProgress
});

const mapDispatchToProps = dispatch => ({
  fillWatchedMovies: arr => dispatch(fillWatchedMovies(arr)),
  fillFavouritesMovies: arr => dispatch(fillFavouritesMovies(arr)),
  fillMoviesOnStore: arr => dispatch(fillMoviesOnStore(arr)),
  fillRatings: arr => dispatch(fillRatings(arr)),
  toggleAjaxInProgress: () => dispatch(toggleAjaxInProgress())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);

AppContainer.propTypes = {
  ajaxInProgress: PropTypes.bool,
  fillWatchedMovies: PropTypes.func,
  fillFavouritesMovies: PropTypes.func,
  fillMoviesOnStore: PropTypes.func,
  fillRatings: PropTypes.func,
  toggleAjaxInProgress: PropTypes.func
};
