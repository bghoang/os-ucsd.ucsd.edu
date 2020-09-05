import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/home"
import About from "./routes/about"
import Tutorial from "./routes/tutorial"
import Project from "./routes/project"
import Event from "./routes/event"
import Contact from "./routes/contact"
import Hacktoberfest from "./routes/hacktoberfest"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/tutorials" component={Tutorial} />
      <Route exact path="/projects" component={Project} />
      <Route exact path="/events" component={Event} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/hacktoberfest" component={Hacktoberfest} />
    </Router>
  );
}

export default App;