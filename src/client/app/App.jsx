import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

const App = props => (
  <div>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
};

export default App;
