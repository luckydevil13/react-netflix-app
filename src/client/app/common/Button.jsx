import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  let classes = 'button ';
  classes += props.isActiveRedBackground ? 'selected-by-background-red ' : '';
  classes += props.isActiveWhiteBackground ? 'selected-by-background-white ' : '';
  classes += props.isActiveRedColor ? 'selected-by-color-red ' : '';

  return (
    <span type="button" role="button" tabIndex="0" className={classes} onClick={props.onClickHandler}>{props.title}</span>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  isActiveRedBackground: PropTypes.bool,
  isActiveWhiteBackground: PropTypes.bool,
  isActiveRedColor: PropTypes.bool,
  onClickHandler: PropTypes.func
};

Button.defaultProps = {
  title: 'button',
  isActiveRedBackground: false,
  isActiveRedColor: false,
  isActiveWhiteBackground: false,
  onClickHandler: () => {}
};

export default Button;
