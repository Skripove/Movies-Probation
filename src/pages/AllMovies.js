import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import Genres from '../components/Genres/Genres';
import Movies from '../components/Movies/Movies';
import ModalContainer from '../containers/ModalContainer';

class AllMovies extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        ajaxInProgress: false,
        genres: [],
        currentGenreId: null,
        movieList: [],
        page: 1
      }
    }
    
    handleWindowScroll = () => {//обработка события прокрутки окна
      const movieBox = document.getElementById("movie-box");
      if ((window.pageYOffset + document.documentElement.clientHeight) >= movieBox.clientHeight && !this.state.ajaxInProgress) {
        const page = this.state.page + 1;
        if(!this.state.ajaxInProgress){
          this.setState({ajaxInProgress: true}, () => {
            axios(`/3/discover/movie`,{
              params: {
                with_genres: this.state.currentGenreId,
                page: page,
                include_adult: false,
                sort_by: 'popularity.desc',
              }
            })
            .then(result => result.data.results)
            .then(arrOfMovies => arrOfMovies.map(movie =>
              ({
              id: movie.id,
              pathImg: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
              overview: movie.overview,
              title: movie.title})
            ))
            .then(result => {
              this.setState({
              movieList: [...this.state.movieList, ...result],
              page: page,
              ajaxInProgress: false
            })})
          });
        }
      }
    }
    
    componentDidMount (){//запрос списка жанров 
      window.addEventListener("scroll", this.handleWindowScroll)
      if(!this.state.ajaxInProgress){
        this.setState({ajaxInProgress: true}, () => {
          axios(`/3/genre/movie/list`)
          .then(result => result.data.genres)
          .then(genres => {
            this.setState({
              genres: genres,
              ajaxInProgress: false
            })
          })
        });
      }
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleWindowScroll);
      }

    handleGenreClick = (genreId) => {//обработка клика по жанру
        window.scrollTo(0,0);
        const pageOne = 1;
        if(!this.state.ajaxInProgress){
          this.setState({ajaxInProgress: true}, () => {
            axios(`/3/discover/movie`, {
              params: {
                with_genres: genreId,
                page: pageOne,
                include_adult: false,
                sort_by: 'popularity.desc',
              }
            })
              .then(result => result.data.results)
              .then(arrOfGenres => arrOfGenres.map(genre => 
                ({
                id: genre.id,
                pathImg: `http://image.tmdb.org/t/p/w500${genre.poster_path}`, 
                overview: genre.overview,
                title: genre.title})
              ))
              .then(result => {
                this.setState({
                  currentGenreId: genreId,
                  movieList: result,
                  page: 1,
                  ajaxInProgress: false
                });
              })
          });
        }
    }
    
    render(){
        const {genres, movieList, currentGenreId} = this.state;
        return(
          <BrowserRouter>
            <div className="wrapper">
              <Genres 
                genres={genres}
                onClick={this.handleGenreClick}
                currentGenreId={currentGenreId}
              />
              <Movies
                boxId="movie-box"
                movies={movieList}
              />
              <Route path="/films/:id" component={ModalContainer}/>
            </div>
          </BrowserRouter>
        )
      }
}

export default AllMovies
