import React from 'react';
import './TopBar.css';
// import PropTypes from 'prop-types';
import user from '../../img/user.png';
import { Link } from "react-router-dom";

const TopBar = () => 
    <div className="top-bar">
        <div className="top-bar__item user-box">
            <Link to='/user-page'><img src={user} alt={"user"} className="user-img"/></Link>
        </div>
        <div className="top-bar__item">
            <Link to='/'>All Movies</Link>
        </div>
    </div>
    
export default TopBar;

// TopBar.propTypes = {};