import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from
"react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./components/pages/HomePage";
import ProjectPage from "./components/pages/ProjectPage";

function App() {
  return (
    <Router>
    <div>
    < Nav/>
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="./Projects" element={<ProjectPage/>}/>
      


    </Routes>
    </div>

    </Router>
  );
}




      {/* <Routes>
          <Route exact path="/project" element={<ProjectPage/>}/>
          <ProjectPage/>
          </Route>

          <Route path="/">
          <HomePage/>
          </Route>
      </Routes>
      </div>
//       </Router> */}
//   );
// }





export default App;
