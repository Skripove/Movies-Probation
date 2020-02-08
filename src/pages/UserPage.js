import React from 'react';
import './UserPage.css';
import {BrowserRouter, Route} from 'react-router-dom';
import UserInfo from '../components/UserInfo/UserInfo';
import MoviesScroll from '../components/MoviesScroll/MoviesScroll'
import ModalContainer from '../containers/ModalContainer';
import PropTypes from 'prop-types';

const UserPage = ({watchedCards, favouritesCards}) => {

  return (
    <BrowserRouter>
      <div className="user-page">
        <UserInfo/>
        <MoviesScroll title="Watched" movies={watchedCards}/>
        <MoviesScroll title="Favourites" movies={favouritesCards}/>
        <Route path="/films/:id" component={ModalContainer}/>
      </div>
    </BrowserRouter> 
  )
}

export default UserPage;

UserPage.propTypes = {
  watchedCards: PropTypes.array,
  favouritesCards: PropTypes.array
};