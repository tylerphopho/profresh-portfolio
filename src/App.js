import React from 'react';
import Navbar from "./components/Navbar"
import Card from "./components/Card";
import {BrowserRouter as Router, Route} from "react-router-dom"
import "materialize-css/dist/css/materialize.min.css";
import Skills from './pages/Skills';

function App() {
  return (
    <Router>
      <Navbar navClick/>
      <div className="container">
        <Card/>
        <Route exact path="/skills" component={Skills}/>
      </div>
    </Router>
  );
}

export default App;
