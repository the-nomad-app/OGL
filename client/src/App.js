import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/home/home';
import Campsites from './components/pages/campsites/campsites';
import TravelServices from './components/pages/travelservices/travelservices';
import Trails from './components/pages/trails/trails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/campsites' component={Campsites} />
          <Route path='/trails' component={Trails} />
          <Route path='/travelservices' component={TravelServices} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
