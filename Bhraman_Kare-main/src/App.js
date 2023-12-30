import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./components/pages/Home";
import maps from "./components/pages/maps";
import destinations from "./components/pages/destinations";
import profile from "./components/pages/profile";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/destinations" component={destinations} />
          <Route path="/maps" component={maps} />
          <Route path="/profile" component={profile} />
          <Route path="/SignUp" component={SignUp} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
