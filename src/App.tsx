import "./App.css";
import Header from "./Header";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import About from "./About";
import Users from "./Users";

const App = (props) => {
  return (
    <div>
      <Header />

      <Router>
        {/* <nav>
          <li><Link to = '/'>Main</Link></li>
          <li><Link to = '/about'>About</Link></li>
          <li><Link to = '/users'>Users</Link></li>
        </nav> */}
        <Routes>
          <Route path="/" element={<Profile title ='Поиск информации о GitHub пользователе'/>} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
