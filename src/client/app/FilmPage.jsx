import React from 'react';
import { connect } from 'react-redux';
import * as api from './movie-api';
import Film from './film/Film';
import FilmsHeader from './common/FilmsHeader';
import FilmsContainer from './common/FilmsContainer';
import Logo from './common/Logo';


class FilmPage extends React.Component {
  constructor(props) {
    super(props);

    if (props.match.params.id) {
      api.getFilmsById(props.match.params.id)
        .then(
          (film) => {
            api.getFilmsByDirectorId(film.director.id).then(
              films => this.props.dispatch({ type: 'SEARCH_DONE', payload: films })
            );
            this.props.dispatch({ type: 'SEARCH_FILM_DONE', payload: film });
          },
          () => this.props.dispatch({ type: 'SEARCH_FAILED' })
        );
    }
  }

  render() {
    debugger;
    return (
      <div>
        <Film />
        <FilmsHeader />
        <FilmsContainer />
        <footer className="standart-padding-left">
          <Logo />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchBy: state.searchBy
});

export default connect(mapStateToProps)(FilmPage);
