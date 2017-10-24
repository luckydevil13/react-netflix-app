import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import Button from '../common/Button';

import './Film.css';


class Film extends React.Component {
  render() {
    return (
      <div className="film-container standart-padding-left standart-padding-right">
        <div className="flex-container space-beetween">
          <div className="top-margin">
            <Logo />
          </div>
          <div className="top-margin">
            <Link to={'/'}>
              <Button isActiveWhiteBackground title="SEARCH" />
            </Link>
          </div>
        </div>
        <div className="flex-container padding-top">
          <img alt="{props.film.title}" src={this.props.film.posterUrl} className="film-poster" />
          <div className="details standart-padding-left">
            <div className="flex-container align-center ">
              <h1 className="film-title">{this.props.film.title}</h1>
              <div className="standart-padding-left">
                <div className="circle-text">{this.props.film.rating}</div>
              </div>
            </div>

            <div className="flex-container">
              <div className="font-bold">{this.props.film.releaseYear}</div>
              <div className="standart-padding-left">
                <div className="font-bold">{this.props.film.duration} min</div>
              </div>
            </div>

            <h3 className="film-description">{this.props.film.description}</h3>
            <div className="film-cast">
              <div>Directors: {this.props.film.directors ? this.props.film.directors.toString() : ''}</div>
              <br />
              <div>Casts: {this.props.film.casts}</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  film: state.film
});

export default connect(mapStateToProps)(Film);
