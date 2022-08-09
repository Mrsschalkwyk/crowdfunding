import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";


function HomePage() {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
    .then((results) => {
        console.log("boop", results.json())
        return results.json();
    })
    .then((data) => {

        setProjectList(data);
    });
    const [projectList, setProjectList] = useState([]);

    //this stops it from loading unnessisary only when arry changes

    useEffect(() => {
        setProjectList(allProjects);
    }, []);    
    console.log(projectList)
    return (
        <div id="project-list"> 
        {projectList.map((projectItem, key) => {
            return <ProjectCard key={key} projectData={projectItem}/>;
        })}
        </div>
    )

    
}

export default HomePage;