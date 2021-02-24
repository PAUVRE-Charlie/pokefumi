import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './home';
import {Connection} from './Connection'
import Players from './Players';

function App() {
  return (
    <Router>
      <div className="App">
        <body>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + '/connexion'} component={Connection} />
          <Route exact path={process.env.PUBLIC_URL + '/players'} component={Players} />
        </body>
      </div>
    </Router>
  );
}

export default App;
