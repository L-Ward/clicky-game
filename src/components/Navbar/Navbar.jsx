import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-sm sticky-top">
        <ul className="navbar-nav w-100 nav-justified">
            <li className="nav-item navbar-brand">
                Clicky Game
            </li>
            <li className="nav-item navbar-text">
                {props.title}
            </li>
            <li className="nav-item navbar-text">
                Score {props.score}  |  Top Score {props.topScore}
            </li>
        </ul>
    </nav>
)

export default Navbar;