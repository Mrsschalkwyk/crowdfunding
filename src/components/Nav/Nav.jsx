import React from "react";
import { Link } from "react-router-dom"

function Nav () {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/ProjectPage">Project</Link>
            <Link to="/AboutPage">About</Link>


        </nav>

    );
}

export default Nav;