import React from "react";
import "./navbar.css";
import loginicon from "./login.icon.png";




function Navbar() {
  return (
    <nav>
    <ul>
      <li>
        <a href="#">StaffSpace</a>
      </li>
      <li>
        <a href="personalinfo"><img src={loginicon} /></a>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;