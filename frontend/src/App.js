// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Chat from "./pages/chat/chat";
import Header from "./pages/Header/Header";
import AboutUs from "./pages/About/About";
// import "./App.css";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about" element={ <AboutUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
