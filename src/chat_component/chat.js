import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUsers, faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons';

function ChatApp() {
  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1><FontAwesomeIcon icon={faSmile} /> StaffSpace</h1>
        <a href="index" className="btn">Leave Room</a>
      </header>
      <main className="chat-main">
        <div className="chat-sidebar">
          <h3><FontAwesomeIcon icon={faComments} /> Room Name:</h3>
          <h2 id="room-name">Consultants</h2>
          <h3><FontAwesomeIcon icon={faUsers} /> Users</h3>
          <ul id="users">
            <li>Brad</li>
            <li>John</li>
            <li>Mary</li>
            <li>Paul</li>
            <li>Mike</li>
          </ul>
        </div>
        <div className="chat-messages">
          <div className="message">
            <p className="meta">Brad <span>9:12pm</span></p>
            <p className="text">
              Hello mary i was wondering if you could help me with the with a client for FDI. Could you send that email you been meaning to send.
            </p>
          </div>
          <div className="message">
            <p className="meta">Mary <span>9:15pm</span></p>
            <p className="text">
              Absoultly brad coming to you now.
            </p>
          </div>
        </div>
      </main>
      <div className="chat-form-container">
        <form id="chat-form">
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autoComplete="off"
          />
          <button className="btn"><FontAwesomeIcon icon={faPaperPlane} /> Send</button>
        </form>
      </div>
    </div>
  );
}

export default ChatApp;