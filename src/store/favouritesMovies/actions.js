export const ADD_FAVOURITES_MOVIE = "ADD_FAVOURITES_MOVIE"
export const DELETE_FAVOURITES_MOVIE = "DELETE_FAVOURITES_MOVIE"
export const FILL_FAVOURITES_MOVIES = "FILL_FAVOURITES_MOVIES"

export const addFavouritesMovie = (id) => {
    return {
        type: ADD_FAVOURITES_MOVIE,
        id
    }
}

export const deleteFavouritesMovie = (id) => {
    return {
        type: DELETE_FAVOURITES_MOVIE,
        id
    }
}

export const fillFavouritesMovies = (arr) => {
  return {
      type: FILL_FAVOURITES_MOVIES,
      arr
  }
}