import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './homepage.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="root-page">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
