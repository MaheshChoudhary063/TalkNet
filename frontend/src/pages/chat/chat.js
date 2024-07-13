import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./chat.css";

let socket;
const Chat = () => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socketUrl = "http://localhost:8000";

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const user = params.get("name");
    const room = params.get("room");

    setUser(user);
    setRoom(room);

    socket = io(socketUrl);

    socket.emit("join", { user, room }, (err) => {
      if (err) {
        // alert(err)
      }
    });

    return () => {
      // User leaves room
      socket.disconnect();
      socket.off();
    };
  }, [socketUrl, window.location.search]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prevMsg) => [...prevMsg, msg]);

      setTimeout(() => {
        var div = document.getElementById("chat_body");
        div.scrollTop = div.scrollHeight - div.clientWidth;
      }, 10);
    });

    socket.on("roomMembers", (usrs) => {
      setUsers(usrs);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    socket.emit("sendMessage", message, () => setMessage(""));
    setTimeout(() => {
      var div = document.getElementById("chat_body");
      div.scrollTop = div.scrollHeight;
    }, 100);
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        <div className="users-list">
          <p>Active Users</p>
          <ul>
            {users.map((e, i) => (
              <li key={i}>{e.user}</li>
            ))}
          </ul>
        </div>
        <div className="chat-section">
          <div className="chat-header">
            <h3>{room}</h3>
          </div>
          <div className="chat-body" id="chat_body">
            {messages.map((e, i) =>
              e.user === user?.toLowerCase() ? (
                <div className="message own" key={i}>
                  <p>{e.text}</p>
                  <time>{e.user}</time>
                </div>
              ) : (
                <div className="message" key={i}>
                  <p>{e.text}</p>
                  <time>{e.user}</time>
                </div>
              )
            )}
          </div>
          <div className="message-input">
            <input
              id="btn-input"
              type="text"
              value={message}
              onKeyPress={(event) =>
                event.key === "Enter" ? sendMessage(event) : null
              }
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Write your message here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
