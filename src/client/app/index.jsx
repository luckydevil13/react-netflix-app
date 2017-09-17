import React from 'react';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom';
import App from './App';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    require('./App');
    render(App);
  });
}
