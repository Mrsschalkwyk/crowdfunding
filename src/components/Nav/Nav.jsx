import React from "react";
import { Link } from "react-router-dom";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
		const [loggedIn, setLoggedIn] = 
useState(!!window.localStorage.getItem('token'));

const logOut = () => {
    window.localStorage.removeItem("token");
	    setLoggedIn(false)
}

    return (
        <nav>
        <Link to ="/">Home</Link>
        {loggedIn ? (
        <Link to = "/" onClick={LogOut}>Logout</Link>)
        : (<Link to = "/login">Login</Link>)}
        <Link to="/about">about</Link>

        <Link to = "/CreateProject">CreateProject</Link>

        </nav>

    );
}



export default Nav;