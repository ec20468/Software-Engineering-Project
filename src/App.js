import React from 'react';
import './App.css';
import PersonalInfo from './component/update/personalinfo';
import Navbar from './component/update/navbar';



function App() {
  return (
    <div className="PersonalInfo">
      
      <main>
      <Navbar/>
      <PersonalInfo />
      </main>
    </div>
  );
}


export default App;




