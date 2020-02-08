import React from 'react';
import PropTypes from 'prop-types';
import './TrailerItem.css'

const TrailerItem = ({id, path}) => {
    return (
        <li >
            <iframe className="trailers__item" title={id} src={path} frameBorder="0" allowFullScreen="allowfullscreen"/>
        </li>
    );
}

export default TrailerItem

TrailerItem.propTypes = {
    id: PropTypes.string,
    path: PropTypes.string
};