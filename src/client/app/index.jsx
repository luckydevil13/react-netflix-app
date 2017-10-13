import React, { Component } from 'react'
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './SearchPage';
import FilmPage from './FilmPage';
import App from './App';
import NotFound from './common/NotFound';
import configureStore from './configureStore';

const store = configureStore();

class Netflix extends Component {

render() {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Router>
          <App>
            <Switch>
              <Route exact path="/" component={SearchPage} />
              <Route path="/search/:query" component={SearchPage} />
              <Route path="/film/:filmName" component={FilmPage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </App>
        </Router>
      </AppContainer>
    </Provider>, document.getElementById('app')
  );
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    film: state.film
  };
}

connect(mapStateToProps)(render());

if (module.hot) {
  module.hot.accept('./App', () => {
    require('./App');
    connect(mapStateToProps)(render());
  });
}
