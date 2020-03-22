// components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";

const navbar = props => {
    const showRedirect = () => {
        console.log({ linkChange: props.changeLinkStatus });
        return (
            <div>
                <h4>Redirecting: {`${props.changeLinkStatus}`}</h4>
            </div>
        );
    };

    return (
        <nav className="nav-style">
            <ul>
                <li>
                    {/* <a href="/" > Home </a> */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/about/Marcos"> About Name </Link>
                </li>
            </ul>

            {showRedirect()}

            <button onClick={props.linkChange}> Change Link </button>
        </nav>
    );
};

export default navbar;
