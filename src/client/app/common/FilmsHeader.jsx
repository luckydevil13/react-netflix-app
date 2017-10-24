import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../common/Button';
import './FilmsHeader.css';


class FilmsHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: props.sortBy,
      filmPage: !!props.location.pathname.match(/\/film\//)
    };
  }

  toggleSortBy(by) {
    event.preventDefault();
    if (by !== this.state.searchBy) {
      this.props.dispatch({ type: 'SORT_BY', payload: by });
    }
  }

  render() {
    return (
      <div
        className="films-header flex-container
        space-beetween standart-padding-left standart-padding-right align-center"
      > {
          (this.state.filmPage === true)
            ? <div>Films by {this.props.film.director ? this.props.film.director.name : ''}</div>
            : <div>results of search: {this.props.filmSearchName}</div>
        }
        <div>Sort by
          <Button title="rating" isActiveRedColor={this.props.sortBy === 'rating'} onClickHandler={this.toggleSortBy.bind(this, 'rating')} />
          <Button title="release date" isActiveRedColor={this.props.sortBy === 'releaseYear'} onClickHandler={this.toggleSortBy.bind(this, 'releaseYear')} /></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sortBy: state.sortBy,
  film: state.film
});

export default withRouter(connect(mapStateToProps)(FilmsHeader));

