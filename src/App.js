import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import PersonalInfo from './component/update/personalinfo';
import Navbar from './component/update/navbar';
import Home from './home/home';



function App() {

  return (
    <div className="PersonalInfo">
      
      <main>
      <Home/>
      </main>
    </div>

  );
}


export default App;




