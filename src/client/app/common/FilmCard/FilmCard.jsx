import React from 'react';
import { Link } from 'react-router-dom';
import './FilmCard.css';


const FilmCard = props => (
  <div className="film-card">
    <div className="center">
      <Link to={`/film/${props.film.id}`} >
        <img alt="{props.film.title}" src={props.film.posterUrl} className="poster" />
      </Link>
    </div>
    <div className="standart-padding-left standart-padding-right standart-margins">
      <div className="flex-container space-beetween align-center">
        <div className="title">{props.film.title}</div>
        <div className="font-bold release-date">{props.film.releaseYear}</div>
      </div>
      <div className="standart-margins">
        {props.film.genre}
      </div>
    </div>
  </div>
);


export default FilmCard;
