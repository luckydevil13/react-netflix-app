import React from 'react';
import Genre from './Genre';
import Title from './Title';
import Image from './Image';
import ReleaseDate from './ReleaseDate';
import './FilmCard.css';

const FilmCard = () => (
  <div className="film-card">
    <Image />
    <div className="standart-padding-left standart-padding-right standart-margins">
      <div className="flex-container space-beetween align-center">
        <Title />
        <ReleaseDate />
      </div>
      <div className="standart-margins">
        <Genre />
      </div>
    </div>
  </div>
);

export default FilmCard;
