import React from 'react';
import Filter from './Filter';
import SearchButton from './SearchButton';
import SearchField from './SearchField';
import Logo from '../common/Logo';

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
        <SearchField />
      </div>
      <div className="font-bold margin-top flex-container align-center space-beetween">
        <Filter />
        <SearchButton />
      </div>
    </form>
  </div>
);

export default Search;
