import React from 'react';
import Film from './film/Film';
import FilmsHeader from './common/FilmsHeader';
import FilmsContainer from './common/FilmsContainer';
import Logo from './common/Logo';

const SearchPage = () => (
  <div>
    <Film />
    <FilmsHeader />
    <FilmsContainer />
    <footer className="standart-padding-left">
      <Logo />
    </footer>
  </div>
);

export default SearchPage;
