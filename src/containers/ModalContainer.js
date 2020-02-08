import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Modal from "../components/Modal/Modal";
import { getWatchedIncludes } from "../selectors/getWatchedIncludes";
import { getFavouritesIncludes } from "../selectors/getFavouritesIncludes";
import { getMovieOnStore } from "../selectors/getMovieOnStore";
import { addMovieOnStore } from "../store/addedMoviesOnStore/actions";
import {
  addWatchedMovie,
  deleteWatchedMovie
} from "../store/watchedMovies/actions";
import {
  addFavouritesMovie,
  deleteFavouritesMovie
} from "../store/favouritesMovies/actions";
import { toggleAjaxInProgress } from "../store/ajaxInProgress/actions";

const ModalContainer = props => {
  const [movieInfo, setMovieInfo] = useState({
    id: 0,
    pathImg: "",
    companies: "",
    countries: "",
    genres: "",
    runtime: "",
    voteAverage: "",
    title: "Ошибка...",
    overview: "",
    trailers: ""
  });

  const [spiner, setSpiner] = useState(true);

  const {
    ajaxInProgress,
    toggleAjaxInProgress,
    getWatchedIncludes,
    getFavouritesIncludes,
    getMovieOnStore,
    addMovieOnStore,
    addWatchedMovie,
    deleteWatchedMovie,
    addFavouritesMovie,
    deleteFavouritesMovie
  } = props;

  const id = parseInt(props.match.params.id);

  useEffect(() => {
    const setMovieInfoFromAPI = movieId => {
      //API-запрос подробной информации по фильму и установка в state компонента
      if (!ajaxInProgress) {
        toggleAjaxInProgress();
        axios(`/3/movie/${movieId}`, {
          params: {
            append_to_response: "videos"
          }
        })
          .then(result => result.data)
          .then(result => {
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
              runtime,
              vote_average: voteAverage,
              title,
              overview
            } = result;
            return {
              id: movieId,
              pathImg,
              companies,
              countries,
              genres,
              runtime,
              voteAverage,
              title,
              overview,
              trailers
            };
          })
          .then(result => {
            setMovieInfo(result);
            addMovieOnStore(result);
            toggleAjaxInProgress();
          });
      }
    };

    if (getMovieOnStore(id)) {
      const movieInfo = getMovieOnStore(id);
      setMovieInfo(movieInfo);
    } else {
      setMovieInfoFromAPI(id);
    }
  }, []);

  useEffect(() => {
    if (
      movieInfo !==
      {
        id: 0,
        pathImg: "",
        companies: "",
        countries: "",
        genres: "",
        runtime: "",
        voteAverage: "",
        title: "Ошибка...",
        overview: "",
        trailers: ""
      }
    )
      setTimeout(() => setSpiner(false), 250);
  }, [movieInfo]);

  const addToWatchedClick = id => {
    //добавление в WATCHED
    let arr = JSON.parse(localStorage.getItem("userContent") || "[]");
    const watched = true;
    if (arr.find(obj => obj.id === id)) {
      arr = arr.map(obj => {
        if (obj.id === id)
          return Object.assign(obj, {
            watched
          });
        return obj;
      });
    } else {
      arr = [
        ...arr,
        {
          id: id,
          rating: 0,
          watched,
          favourites: false
        }
      ];
    }
    localStorage.setItem("userContent", JSON.stringify(arr));
    addWatchedMovie(id);
  };

  const deleteFromWatchedClick = id => {
    //удаление из WATCHED
    let arr = JSON.parse(localStorage.getItem("userContent") || "[]");
    const inLocalStorage = arr.find(obj => obj.id === id);
    const watched = false;
    if (inLocalStorage.rating === 0 && inLocalStorage.favourites === false)
      arr = arr.filter(obj => obj.id !== id);
    arr = arr.map(obj => {
      if (obj.id === id)
        return Object.assign(obj, {
          watched
        });
      return obj;
    });
    localStorage.setItem("userContent", JSON.stringify(arr));
    deleteWatchedMovie(id);
  };

  const addToFavouritesClick = id => {
    //добавление в FAVOURITES
    let arr = JSON.parse(localStorage.getItem("userContent") || "[]");
    const favourites = true;
    if (arr.find(obj => obj.id === id)) {
      arr = arr.map(obj => {
        if (obj.id === id)
          return Object.assign(obj, {
            favourites
          });
        return obj;
      });
    } else {
      arr = [
        ...arr,
        {
          id: id,
          rating: 0,
          watched: false,
          favourites
        }
      ];
    }
    localStorage.setItem("userContent", JSON.stringify(arr));
    addFavouritesMovie(id);
  };

  const deleteFromFavouritesClick = id => {
    //удаление из FAVOURITES
    let arr = JSON.parse(localStorage.getItem("userContent") || "[]");
    const inLocalStorage = arr.find(obj => obj.id === id);
    const favourites = false;
    if (inLocalStorage.rating === 0 && inLocalStorage.watched === false)
      arr = arr.filter(obj => obj.id !== id);
    arr = arr.map(obj => {
      if (obj.id === id)
        return Object.assign(obj, {
          favourites
        });
      return obj;
    });
    localStorage.setItem("userContent", JSON.stringify(arr));
    deleteFavouritesMovie(id);
  };

  const close = event => {
    //закрытие модального окна
    if (
      event.target.className === "modal" ||
      event.target.className === "modal-close"
    ) {
      props.history.goBack();
    }
  };

  return (
    <Modal
      close={close}
      spiner={spiner}
      movieInfo={movieInfo}
      getWatchedIncludes={getWatchedIncludes}
      getFavouritesIncludes={getFavouritesIncludes}
      addToWatchedClick={addToWatchedClick}
      deleteFromWatchedClick={deleteFromWatchedClick}
      addToFavouritesClick={addToFavouritesClick}
      deleteFromFavouritesClick={deleteFromFavouritesClick}
    />
  );
};

const mapStateToProps = state => ({
  ajaxInProgress: state.ajaxInProgress,
  getWatchedIncludes: getWatchedIncludes(state),
  getFavouritesIncludes: getFavouritesIncludes(state),
  getMovieOnStore: getMovieOnStore(state)
});

const mapDispatchToProps = dispatch => ({
  toggleAjaxInProgress: () => dispatch(toggleAjaxInProgress()),
  addMovieOnStore: obj => dispatch(addMovieOnStore(obj)),
  addWatchedMovie: id => dispatch(addWatchedMovie(id)),
  deleteWatchedMovie: id => dispatch(deleteWatchedMovie(id)),
  addFavouritesMovie: id => dispatch(addFavouritesMovie(id)),
  deleteFavouritesMovie: id => dispatch(deleteFavouritesMovie(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);

ModalContainer.propTypes = {
  ajaxInProgress: PropTypes.bool,
  getWatchedIncludes: PropTypes.func,
  getFavouritesIncludes: PropTypes.func,
  getMovieOnStore: PropTypes.func,
  toggleAjaxInProgress: PropTypes.func,
  addMovieOnStore: PropTypes.func,
  addWatchedMovie: PropTypes.func,
  deleteWatchedMovie: PropTypes.func,
  addFavouritesMovie: PropTypes.func,
  deleteFavouritesMovie: PropTypes.func
};
