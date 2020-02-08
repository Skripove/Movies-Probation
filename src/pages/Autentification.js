import React from 'react';
import PropTypes from 'prop-types';
import './Autentification.css';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import RegisterForm from '../components/Form/RegisterForm';
import LoginForm from '../components/Form/LoginForm';

const Autentification = ({setAllowIn}) => {
  return(
    <BrowserRouter>
      <NavLink 
        to="/register" 
        activeClassName="active"
        className="nav-link"
      >
        Register
      </NavLink> 
      <span> or </span> 
      <NavLink 
        exact to="/" 
        activeClassName="active"
        className="nav-link"
      >
        Login
      </NavLink>
      <div className="autentif">
        <Switch>
          <Route path="/register" component={RegisterForm}/>
          <Route path="/" render={(props) => <LoginForm {...props} setAllowIn={setAllowIn}/>}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

  export default Autentification
  
Autentification.propTypes = {
  setAllowIn: PropTypes.func
};