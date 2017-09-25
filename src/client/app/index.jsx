import React from 'react';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './SearchPage';
import FilmPage from './FilmPage';
import App from './App';
import NotFound from './common/NotFound';

function render() {
  ReactDOM.render(
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
    </AppContainer>, document.getElementById('app')
  );
}

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    require('./App');
    render();
  });
}
