import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <p>Logo</p>
        </div>
        <h1 className="login-h1">Login to your Account</h1>
        <form method="post">
          <div className="form-group">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              onChange={(e) => setRoom(e.target.value)}
              type="text"
              placeholder="Room Name"
              required
              className="form-control"
            />
          </div>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <input type="submit" className="form-submit" value="Join Room" />
          </Link>
        </form>
      </div>
      <div className="login-box">
        <div className="logo">
          <p>Room</p>
        </div>
        <h1 className="login-h1">Create a Room</h1>
        <form method="post">
          <div className="form-group">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              onChange={(e) => setRoom(e.target.value)}
              type="text"
              placeholder="New Room Name"
              required
              className="form-control"
            />
          </div>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <input type="submit" className="form-submit" value="Create Room" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
