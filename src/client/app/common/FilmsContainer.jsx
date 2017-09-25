import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from './FilmCard/FilmCard';
import './FilmsContainer.css';

const FilmsContainer = props => (
  <div className="films-container flex-container">
    {props.filmSearchName ? <FilmCard /> : 'Not found'}
  </div>
);

FilmsContainer.propTypes = {
  filmSearchName: PropTypes.string
};

FilmsContainer.defaultProps = {
  filmSearchName: ''
};

export default FilmsContainer;
