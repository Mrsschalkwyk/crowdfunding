import React from "react";
import {Link } from "react-router-dom";
// import ProjectCard from .../components/ProjectCard/ProjectCard.jsx
import "./ProjectCard.css";



function ProjectCard(props) {
    console.log("projectCard")
    const { projectData } = props;
    console.log(projectData.id)
    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>
                <img src={projectData.image} alt="project"/>
                <h3>{projectData.title}</h3>
            </Link>
        </div>
    );
}

export default ProjectCard;