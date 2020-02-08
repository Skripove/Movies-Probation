import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({onChange, className="input", value, placeholder, type="text"}) => {
return (
    <input 
        className={className}
        value={value} 
        type={type} 
        placeholder={placeholder} 
        onChange={onChange}
    />
  )
}

  export default Input

  Input.propTypes = {
    onChange: PropTypes.func,
    className: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string
  };