import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilmCard from './FilmCard/FilmCard';
import './FilmsContainer.css';

class FilmsContainer extends React.Component {
  render() {
    return (
      <div className="films-container flex-container">
        {this.props.searchResults.length ?
          this.props.searchResults.map(film => (<FilmCard key={film.id} film={film} />)) : 'Not found'}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchResults
});

export default withRouter(connect(mapStateToProps)(FilmsContainer));
