import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-sm">
        <ul className="navbar-nav w-100 nav-justified">
            <li className="nav-item navbar-brand">
                Clicky Game
            </li>
            <li className="nav-item navbar-text">
                Click and image below to begin!
            </li>
            <li className="nav-item navbar-text">
                Score {props.score}  |  Top Score {props.topScore}
            </li>
        </ul>
    </nav>
)

export default Navbar;