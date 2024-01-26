import React from "react";
import "./css/Layout.css";
import './css/NavigationBar.css';
import { Outlet, Link } from "react-router-dom";


export default function Layout() {
  return (
    <div>
      <nav >
        <ul className="nav-bar">
          <li>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
      <br/><br/>
    </div>
 
  );
}