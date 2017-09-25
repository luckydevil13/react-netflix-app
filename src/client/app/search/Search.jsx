import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../common/Logo';
import Button from '../common/Button';

import './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.filmSearchName || ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    this.props.history.push(`/search/${this.state.value}`);
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
            <div>Search by <Button title="TITLE" isActiveRedBackground /><Button title="DIRECTOR" onClickHandler={this.handleSubmit} /></div>
            <div className="font-larger">
              <Button title="SEARCH" isActiveRedBackground />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  filmSearchName: PropTypes.string,
  history: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
};

Search.defaultProps = {
  filmSearchName: undefined
};

export default withRouter(Search);
