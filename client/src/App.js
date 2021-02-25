import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
<<<<<<< HEAD
// import Home from './components/pages/Home';
=======
import Home from './components/pages';
>>>>>>> eb025fc21d5055e80099bdd6f9781d0b5ec4c52c
import campsites from './components/pages/campsites';
import travelservices from './components/pages/travelservices';
import trails from './components/pages/trails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          <Route path='/campsites' component={campsites} />
          <Route path='/trails' component={trails} />
          <Route path='/travelservices' component={travelservices} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
