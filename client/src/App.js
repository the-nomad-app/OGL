import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
// import Home from './components/pages/Home';
=======
import Home from './components/pages';
>>>>>>> eb025fc21d5055e80099bdd6f9781d0b5ec4c52c
import campsites from './components/pages/campsites';
import travelservices from './components/pages/travelservices';
import trails from './components/pages/trails';
=======
import Home from './components/pages/home/home';
import Campsites from './components/pages/campsites/campsites';
import TravelServices from './components/pages/travelservices/travelservices';
import Trails from './components/pages/trails/trails';
>>>>>>> 8f3e4654799ac0cf80fad0690412f713af8ff714
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
<<<<<<< HEAD
          {/* <Route path='/' exact component={Home} /> */}
          <Route path='/campsites' component={campsites} />
          <Route path='/trails' component={trails} />
          <Route path='/travelservices' component={travelservices} />
=======
          <Route path='/' exact component={Home} />
          <Route path='/campsites' component={Campsites} />
          <Route path='/trails' component={Trails} />
          <Route path='/travelservices' component={TravelServices} />
>>>>>>> 8f3e4654799ac0cf80fad0690412f713af8ff714
        </Switch>
      </Router>
    </>
  );
}

export default App;
