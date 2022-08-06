import React from "react";
import {Link } from "react-router-dom";
// import ProjectCard from .../components/ProjectCard/ProjectCard.jsx
import "./ProjectCard.css";



function ProjectCard(props) {
    const {projectData } =props;
    return (
        <div className="project-card">
            <Link to="/project">
                <img src={projectData.image}/>
                <h3>{projectData.title}</h3>
            </Link>
        </div>
    );
}

export default ProjectCard;