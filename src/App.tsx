import "./App.css";
import Header from "./Header";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import About from "./About";
import Users from "./Users";

const App = () => {
  return (
    <div>
      

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
