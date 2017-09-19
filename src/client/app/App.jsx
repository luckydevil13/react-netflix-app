import React from 'react';
import Search from './search/Search'; // eslint-disable-line no-unused-vars
import FilmsContainer from './common/FilmsContainer';
import Logo from './common/Logo';
import FilmsHeader from './common/FilmsHeader';
import Film from './film/Film'; // eslint-disable-line no-unused-vars

import './App.css';

// class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
//  render() {
//    return (
//      <div>
//        <Search />
//        <FilmsHeader />
//        <FilmsContainer />
//        <footer className="standart-padding-left">
//          <Logo />
//        </footer>
//      </div>
//    );
//  }
// }

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
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


export default App;
