import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import Schedule from './components/schedule';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/schedule">
          <Schedule />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
