import React from 'react';
import FilmsHeader from './common/FilmsHeader';
import FilmsContainer from './common/FilmsContainer';
import Logo from './common/Logo';
import Search from './search/Search';


class SearchPage extends React.Component {
  render() {
    return (
      <div>
        <Search filmSearchName={this.props.match.params.query} />
        <FilmsHeader filmSearchName={this.props.match.params.query} />
        <FilmsContainer filmSearchName={this.props.match.params.query} />
        <footer className="standart-padding-left">
          <Logo />
        </footer>
      </div>
    );
  }
}

export default SearchPage;
