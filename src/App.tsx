import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './home';
import {Connection} from './Connection'
import {Matches} from './Matches'
import Players from './Players';
import Match from './Match';

function App() {
  return (
    <Router>
      <div className="App">
        <body>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + '/connexion'} component={Connection} />
          <Route exact path={process.env.PUBLIC_URL + '/players'} component={Players} />
          <Route exact path={process.env.PUBLIC_URL + '/matches'} component={Matches} />
          <Route exact path={process.env.PUBLIC_URL + '/match'} component={Match} />
        </body>
      </div>
    </Router>
  );
}

export default App;
