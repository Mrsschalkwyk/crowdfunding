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

    {/* <Route path="/project:id">
    <ProjectPage />
    </Route> */}
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/ProjectPage/:id" element={<ProjectPage/>}/>
      <Route exact path="/AboutPage" element={<AboutPage/>}/>
      {/* <Route path="/login"><LoginPage /></Route> */}
      
    </div>

    </Router>
  );
}

export default App;
