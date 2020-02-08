import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from '../components/TopBar/TopBar';
import AllMovies from './AllMovies';
import UserPageContainer from '../containers/UserPageContainer';

const App = () => {

  return (
    <BrowserRouter>
      <TopBar/>
      <Switch>
        <Route path='/user-page' component={UserPageContainer}/>
        <Route path='/' component={AllMovies}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
