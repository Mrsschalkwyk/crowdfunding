import React from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";


function HomePage() {

    <div id="project-list"> 
    {allProjects.map((projectData, key) => {
    return <ProjectCard key={key} projectData={projectData}/>;
    })}
    </div>
    
}

export default HomePage;