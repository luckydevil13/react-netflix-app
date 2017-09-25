import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import './FilmsHeader.css';

const FilmsHeader = props => (
  <div className="films-header flex-container space-beetween standart-padding-left standart-padding-right align-center" >
    <div>results of {props.filmSearchName}</div>
    <div>Sort by <Button title="release date" /><Button title="rating" isActiveRedColor /></div>
  </div>
);

FilmsHeader.propTypes = {
  filmSearchName: PropTypes.string
};

FilmsHeader.defaultProps = {
  filmSearchName: ''
};

export default FilmsHeader;
