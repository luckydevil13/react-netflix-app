import React from 'react';
import Logo from '../common/Logo';
import Button from '../common/Button';

import './Film.css';

const Search = () => (
  <div className="film-container standart-padding-left standart-padding-right">
    <div className="flex-container space-beetween">
      <div className="top-margin">
        <Logo />
      </div>
      <div className="top-margin">
        <Button isActiveWhiteBackground title="SEARCH" />
      </div>
    </div>
    <div className="flex-container padding-top">
      <img className="film-poster" alt="poster" />
      <div className="details standart-padding-left">

        <div className="flex-container align-center ">
          <h1 className="film-title">Film title</h1>
          <div className="standart-padding-left">
            <div className="circle-text">4.1</div>
          </div>
        </div>

        <div className="flex-container">
          <div className="font-bold">1997</div>
          <div className="standart-padding-left">
            <div className="font-bold">141 min</div>
          </div>
        </div>

        <h3 className="film-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
        <div className="film-cast">
          <div>Director: director</div>
          <br />
          <div>Casts: director</div>
        </div>
      </div>
    </div>

  </div>
);

export default Search;
