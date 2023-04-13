import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider,route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import PersonalInfo from './component/update/personalinfo.js';
import Index from './chat_component/index';
import Calendar from './components/schedule/index';
import Messages from './chat_component/chat'
import Login from './components/Login/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "personalinfo",
    element: <PersonalInfo/>
  },
  {
    path: "index",
    element: <Index/>
  },
  {
    path: "calendar",
    element: <Calendar/>
  },
  {
    path: "messages",
    element: <Messages/>
  },
  {
    path: "Login",
    element: <Login/>
  }





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
