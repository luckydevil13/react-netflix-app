import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as api from '../movie-api';
import Logo from '../common/Logo';
import Button from '../common/Button';

import './Search.css';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.doSearch(props.match.params.query);

    this.state = {
      value: props.filmSearchName || '',
      searchBy: props.searchBy
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    if (this.state.value) {
      this.doSearch(this.state.value);
      if (this.props.history.location.pathname !== `/search/${this.state.value}`) {
        this.props.history.push(`/search/${this.state.value}`);
      }
    }
  }

  toggleSearchBy(by) {
    event.preventDefault();
    if (by !== this.state.searchBy) {
      this.props.dispatch({ type: 'SEARCH_BY', payload: by });
      const updateSearch = this.props.match.params.query || this.state.value;
      this.state.searchBy = by;
      if (updateSearch) {
        this.doSearch(updateSearch);
      }
    }
  }

  doSearch(query) {
    const queryAction = this.state
      ? (this.state.searchBy === 'title' ? 'getFilmsByQuery' : 'getFilmsByDirector')
      : this.props.searchBy === 'title' ? 'getFilmsByQuery' : 'getFilmsByDirector';
    api[queryAction](query)
      .then(
        (films) => {
          const sortedFilms = films.sort((a, b) => b[this.props.sortBy] - a[this.props.sortBy]);
          this.props.dispatch({ type: 'SEARCH_DONE', payload: sortedFilms });
        },
        () => this.props.dispatch({ type: 'SEARCH_FAILED' })
      );
  }

  render() {
    return (
      <div className="search-container standart-padding-left standart-padding-right">
        <div className="padding-top">
          <Logo />
        </div>
        <div className="font-bold margin-top">
          <div>FIND YOUR MOVIE</div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="margin-top">
            <input className="font-larger" value={this.state.value} placeholder="Tarantino" type="text" onChange={this.handleChange} />
          </div>
          <div className="font-bold margin-top flex-container align-center space-beetween">
            <div>Search by
              <Button title="TITLE" isActiveRedBackground={this.props.searchBy === 'title'} onClickHandler={this.toggleSearchBy.bind(this, 'title')} />
              <Button title="DIRECTOR" isActiveRedBackground={this.props.searchBy === 'director'} onClickHandler={this.toggleSearchBy.bind(this, 'director')} /></div>
            <div className="font-larger">
              <Button title="SEARCH" onClickHandler={this.handleSubmit} isActiveRedBackground />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchBy: state.searchBy
});

export default withRouter(connect(mapStateToProps)(Search));
