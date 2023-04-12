import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import PersonalInfo from './component/update/personalinfo';
import NavBar from './component/update/navbar';
import Schedule from './components/schedule';
import Home from './components/home';




function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/schedule">
          <Schedule />
        </Route>
        <Route exact path="/personalinfo">
          <PersonalInfo />
        </Route>
        <Route exact path="/navbar">
          <NavBar />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;




