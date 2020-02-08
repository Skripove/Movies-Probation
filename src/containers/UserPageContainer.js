import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import UserPage from '../pages/UserPage';
import {getCards} from '../selectors/getCards';

const UserPageContainer = (props) => 
{
  const {getCards, watched, favourites} = props;

  const watchedCards = getCards(watched);
  const favouritesCards = getCards(favourites);

  return(
    <UserPage 
      watchedCards={watchedCards}
      favouritesCards={favouritesCards}
    />
  )
}

const mapStateToProps = state => ({
  getCards: getCards(state),
  watched: state.watched,
  favourites: state.favourites
})

export default connect(mapStateToProps)(UserPageContainer);

UserPageContainer.propTypes = {
  getCards: PropTypes.func,
  watched: PropTypes.array,
  favourites: PropTypes.array
};