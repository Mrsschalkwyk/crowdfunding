import React from "react";
import { Link } from "react-router-dom"


function Nav () {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/login">login</Link>
            {/* <Link to="/ProjectPage">Project</Link> */}
        </nav>
    );
}



export default Nav;