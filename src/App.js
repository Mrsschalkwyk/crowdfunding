import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from
"react-router-dom";

//import pages here//
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";


function App() {
  return (
    <Router>
    <div>
    < Nav/>
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/ProjectPage" element={<ProjectPage/>}/>
      <Route exact path="/AboutPage" element={<AboutPage/>}/>
      <Route path="/login"><LoginPage /></Route>

      


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
