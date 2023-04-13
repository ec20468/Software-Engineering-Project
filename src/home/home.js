import React from 'react';
import './home.css';
import loginicon from "./login.icon.png";

function Home() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/">StaffSpace</a>
          <br></br>
          <a href="calendar">Calendar</a>
          <br></br>
          <a href="messages">Messages</a>
        </div>
        <div className="navbar-right">
            <a href="personalinfo"><img src={loginicon} /></a>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to StaffSpace</h1>
        <p>Explore the world of StaffSpace and discover new opportunities!</p>
      </div>
    </div>
  );
}

export default Home;