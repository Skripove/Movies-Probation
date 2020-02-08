import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";
import Trailers from "../Trailers/Trailers";
import Button from "../Button";
import RatingStarsContainer from "../../containers/RatingStarsContainer";
import Spiner from "../Spiner/Spiner";

const Modal = ({
  movieInfo,
  close,
  spiner,
  getWatchedIncludes,
  getFavouritesIncludes,
  addToWatchedClick,
  deleteFromWatchedClick,
  addToFavouritesClick,
  deleteFromFavouritesClick
}) => {
  const {
    id,
    pathImg,
    title,
    overview,
    companies,
    countries,
    genres,
    runtime,
    voteAverage,
    trailers
  } = movieInfo;

  return (
    <div className="modal" id="myModal" onClick={close}>
      <div className="modal-content">
        <div className="modal-close">&times;</div>
        {spiner && <Spiner />}
        {!spiner && (
          <div className="modal-info">
            <img
              src={pathImg}
              alt="Постер фильма"
              className="modal-info__poster"
            />
            <div className="modal-info__text">
              <div className="modal-info__etc">
                <br />
                <b>Производство:</b> <i>{companies}</i>
                <br />
                <b>Страна:</b> <i>{countries}</i>
                <br />
                <b>Жанр:</b> <i>{genres}</i>
                <br />
                <b>Продолжительность:</b> <i>{runtime} мин.</i>
                <br />
                <b>Оценка:</b> <i>{voteAverage}</i>
                <br />
                <b>Ваша оценка: </b>
                <RatingStarsContainer id={id} />
              </div>
              <div className="watched-btns">
                {getWatchedIncludes(id) ? (
                  <Button onClick={() => deleteFromWatchedClick(id)}>
                    Delete from Watched
                  </Button>
                ) : (
                  <Button onClick={() => addToWatchedClick(id)}>
                    Add to Watched
                  </Button>
                )}
              </div>
              <div className="favourites-btns">
                {getFavouritesIncludes(id) ? (
                  <Button onClick={() => deleteFromFavouritesClick(id)}>
                    Delete from Favourites
                  </Button>
                ) : (
                  <Button onClick={() => addToFavouritesClick(id)}>
                    Add to Favorites
                  </Button>
                )}
              </div>
              <h1>{title}</h1>
              <p>{overview === "" ? "Описание отсутствует..." : overview}</p>
            </div>
            {trailers.length !== 0 && <Trailers trailers={trailers} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  movieInfo: PropTypes.object,
  close: PropTypes.func,
  spiner: PropTypes.bool,
  getWatchedIncludes: PropTypes.func,
  getFavouritesIncludes: PropTypes.func,
  addToWatchedClick: PropTypes.func,
  deleteFromWatchedClick: PropTypes.func,
  addToFavouritesClick: PropTypes.func,
  deleteFromFavouritesClick: PropTypes.func,
  selectValue: PropTypes.string,
  selectChange: PropTypes.func
};
