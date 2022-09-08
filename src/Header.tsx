import React from "react";
import {Link} from 'react-router-dom';


export default function Header() {
  return (
    <div>
      <nav className="header">
        <ul  > 
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        </ul>
      </nav>
    </div>
  )
  
}
