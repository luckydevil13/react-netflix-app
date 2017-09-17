import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  let classes = 'button ';
  classes += props.isActiveRedBackground ? 'selected-by-background-red ' : '';
  classes += props.isActiveWhiteBackground ? 'selected-by-background-white ' : '';
  classes += props.isActiveRedColor ? 'selected-by-color-red ' : '';

  return (
    <span className={classes}>{props.title}</span>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  isActiveRedBackground: PropTypes.Boolean,
  isActiveWhiteBackground: PropTypes.Boolean,
  isActiveRedColor: PropTypes.Boolean
};

Button.defaultProps = {
  title: 'button',
  isActiveRedBackground: false,
  isActiveRedColor: false,
  isActiveWhiteBackground: false
};

export default Button;
