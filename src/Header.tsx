import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="header">
        <ul  > 
        <li>
          <a href="/">Main</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/users">Users</a>
        </li>
        </ul>
      </nav>
    </div>
  );
}
