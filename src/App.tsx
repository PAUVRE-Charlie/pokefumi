import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <Router>
      <div className="App">
        <body>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
        </body>
      </div>
    </Router>
  );
}

export default App;
