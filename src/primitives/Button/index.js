import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, ...rest }) => {
  return (
    <button className={`px-4 py-8 text-white bg-purple-500 rounded-t-md ${className}`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
