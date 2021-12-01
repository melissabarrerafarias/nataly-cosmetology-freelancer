import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './homepage.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AppointmentPage from './pages/AppointmentPage';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="root-page">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/appointment" component={AppointmentPage}></Route>
          <Route exact path="/services" component={Services}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
