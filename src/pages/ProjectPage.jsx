import React from "react";
import { oneProject } from "../data";


function ProjectPage() {

    const [projectData, setProjectData] = useState({pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
    })

        useEffect(() => {
            fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectData(data);
            });
        }, []);


    return (
        <div>
            <h2>{oneProject.title}</h2>
            <h3>Created at: {oneProject.date_created}</h3>
            /* //projectData-- this or what i have? */
            <h3>{`Status: ${oneProject.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>{
                oneProject.pledges.map((pledgeData, key) => {
                    return (
                            <li>
                                ${pledgeData.amount} from {pledgeData.supporter}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
    

}

export default ProjectPage;

//STEP 4//