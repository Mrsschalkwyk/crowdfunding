import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";


function HomePage() {
    const [projectList, setProjectList] = useState([]);


    //this stops it from loading unnessisary only when arry changes

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
        setProjectList(data);
        });
    }, []);    

    // projectsdata was changed to projectItem
    return (
        <div id="project-list"> 
        {projectList.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData}/>;
        })}
        </div>
    );
    }
export default HomePage;