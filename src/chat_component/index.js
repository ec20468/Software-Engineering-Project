import React from 'react';
import './style.css';


function Join() {
  return (
    <div className="join-container">
      <header className="join-header">
        <h1>
           StaffSpace
        </h1>
      </header>
      <main className="join-main">
        <form action="chat.html">
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="room">Room</label>
            <select name="room" id="room">
              <option value="JavaScript">Consultants</option>
              <option value="Python">mangers</option>
              <option value="PHP">Inhouse staff</option>
              <option value="C#">admins</option>
            </select>
          </div>
          <button type="submit" className="btn">
             Join Chat
          </button>
        </form>
      </main>
    </div>
  );
}

export default Join;