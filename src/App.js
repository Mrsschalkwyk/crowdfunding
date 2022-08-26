import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from
"react-router-dom";

//import pages here//
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import CreateProjectPage from "./pages/CreateProjectPage";


function App() {
  return (
    <Router>
    <div>
    < Nav/>

      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/project/:id" element={<ProjectPage/>}/>
        <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/create" element={<CreateProjectPage/>}/>
// create project path//
        {/* path('pledges/', views.PledgeList.as_view()) */}
      </Routes>
    </div>

    </Router>
  );
}

export default App;
