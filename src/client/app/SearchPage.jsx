import React from 'react';
import PropTypes from 'prop-types';
import FilmsHeader from './common/FilmsHeader';
import FilmsContainer from './common/FilmsContainer';
import Logo from './common/Logo';
import Search from './search/Search';

const SearchPage = props => (
  <div>
    <Search filmSearchName={props.match.params.query} />
    <FilmsHeader filmSearchName={props.match.params.query} />
    <FilmsContainer filmSearchName={props.match.params.query} />
    <footer className="standart-padding-left">
      <Logo />
    </footer>
  </div>
);

SearchPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string
    })
  })
};

SearchPage.defaultProps = {
  results: undefined,
  match: {
    params: {
      query: undefined
    }
  }
};

export default SearchPage;
