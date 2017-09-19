import React from 'react';
import Logo from '../common/Logo';
import Button from '../common/Button';

import './Search.css';

const Search = () => (
  <div className="search-container standart-padding-left standart-padding-right">
    <div className="padding-top">
      <Logo />
    </div>
    <div className="font-bold margin-top">
      <div>FIND YOUR MOVIE</div>
    </div>
    <form action="/search">
      <div className="margin-top">
        <input className="font-larger" placeholder="Tarantino" type="text" />
      </div>
      <div className="font-bold margin-top flex-container align-center space-beetween">
        <div>Search by <Button title="TITLE" isActiveRedBackground /><Button title="DIRECTOR" /></div>
        <div className="font-larger">
          <Button title="SEARCH" isActiveRedBackground />
        </div>
      </div>
    </form>
  </div>
);

export default Search;
