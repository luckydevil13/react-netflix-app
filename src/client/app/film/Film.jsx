import React from 'react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import Title from './Title';
import Rating from './Rating';
import ReleaseDate from './ReleaseDate';
import Duration from './Duration';
import Description from './Description';
import ShowCast from './ShowCast';

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
          <div>
            <Title />
          </div>
          <div className="standart-padding-left">
            <Rating />
          </div>
        </div>

        <div className="flex-container">
          <div>
            <ReleaseDate />
          </div>
          <div className="standart-padding-left">
            <Duration />
          </div>
        </div>

        <Description />
        <ShowCast />
      </div>
    </div>

  </div>
);

export default Search;
