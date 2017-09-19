import React from 'react';
import './FilmCard.css';

const FilmCard = () => (
  <div className="film-card">
    <div className="center poster" />
    <div className="standart-padding-left standart-padding-right standart-margins">
      <div className="flex-container space-beetween align-center">
        <div className="title">title</div>
        <div className="font-bold release-date">1997</div>
      </div>
      <div className="standart-margins">
        Genre
      </div>
    </div>
  </div>
);

export default FilmCard;
