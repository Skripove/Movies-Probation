import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({className="form", children}) => {
return (
    <form className={className}>
        {children}
    </form>
  )
}

  export default Form

  Form.propTypes = {
    className: PropTypes.string
  };