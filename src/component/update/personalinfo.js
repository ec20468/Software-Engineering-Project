import React, { useState } from 'react';

import './personalinfo.css'
import Navbar from './navbar';



function PersonalInfo() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRoles] = useState("")
    const [line1, setline1] = useState("");
    const [line2, setline2] = useState("");
    const [post, setpostcode] = useState("");
    
    const [isEditing, setIsEditing] = useState(false);
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveClick = () => {
      setIsEditing(false);
    };
  
    const handleOptionChange = (event) => {
      setRoles(event.target.value);
    };
  
  
    
  
    return (
      <>
      <body>
      <div id='main'>
        <h2>Welcome, {name} ! </h2>
        {isEditing ? (
          <div class = "edit">
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <label>
              Roles:
              <select value={role} onChange={handleOptionChange}>
              <option value="Manager">Manager</option>
              <option value="In-house Staff">In-House Staff</option>
              <option value="Adminstrator">Administrator</option>
              <option value="Consultant">Consultant</option>
              </select>
            </label>
            <label>
              Address Line 1:
              <input 
                type="add1"
                value = {line1}
                onChange={(e) => setline1(e.target.value)}
              />
            </label>
            <label>
              Address Line 2:
              <input 
                type="add2"
                value = {line2}
                onChange={(e) => setline2(e.target.value)}
              />
            </label>
            <label>
              Post Code:
              <input 
                type="post"
                value = {post}
                onChange={(e) => setpostcode(e.target.value)}
              />
            </label>
            <button class = "editbutton" onClick={handleSaveClick}>Save</button>
          </div>
          
        ) : (
          <form>
          <div class="view" id="view">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Roles: {role}</p>
            <p>Address: {line1} {line2} {post}</p>
            <button onClick={handleEditClick}>Edit</button>
          </div>
          </form>
        )}
      </div></body></>
    );
  }
  
  
  export default PersonalInfo;