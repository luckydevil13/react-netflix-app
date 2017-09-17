import React from 'react';
import FilmCard from './FilmCard/FilmCard';
import './FilmsContainer.css';

const FilmsContainer = () => (
  <div className="films-container flex-container">
    <FilmCard />
    <FilmCard />
    <FilmCard />
    <FilmCard />
    <FilmCard />
  </div>
);

export default FilmsContainer;
