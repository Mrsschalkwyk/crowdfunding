import React, {useState} from "react";
import { Link } from "react-router-dom";

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
        <Link to = "/" onClick={ logOut }>Logout</Link>)
        : (<Link to = "/login">Login</Link>)}
        <Link to="/about">about</Link>

        <Link to = "/create">CreateProject</Link>

        </nav>

    );
}



export default Nav;