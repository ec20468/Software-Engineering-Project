import './index.css';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();

  let error = false
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "user" && password === "pass") {
      error = false
      alert("You have successfully logged in.");
      window.location.reload();
    } else {
      error = true
    }
  };

  return (
    <main id="main-holder">
      <h1 id="login-header">Login</h1>
      <div id="login-error-msg-holder">
        {error && <p id="login-error-msg">
          Invalid username{" "}
          <span id="error-msg-second-line">and/or password</span>
        </p>}
      </div>
      <form id="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          id="username-field"
          className="login-form-field"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password-field"
          className="login-form-field"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          value="Login"
          id="login-form-submit"
        />
      </form>
    </main>
  );
};

export default Login;
