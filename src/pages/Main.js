  
import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card"
import Portfolio from "./Portfolio";
// import About from "./About"; 
import Contact from "./Contact";
import M from "materialize-css";
import Skills from './Skills';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class Main extends Component {
    state = {
        skills: "",
        contact: "",
        portfolio: "",

    }
    componentDidMount() {
        M.AutoInit();
    }
    
    navClick = event => {
        this.setState({
            skills: "",
            contact: "",
            portfolio: "",
            [event.target.name]: "active"
        })
    }
    render() {
        return(
            <Router>
                <Navbar
                navClick={this.navClick}
                skills={this.state.skills}
                contact={this.state.contact}
                portfolio={this.state.contact}
                />         
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Card/>
                        </Route>
                        <Route path="/skills">
                            <Skills/>
                        </Route>
                        <Route exact path="/contact">
                            <Contact/>
                        </Route>
                        <Route path="/portfolio">
                            <Portfolio/>
                        </Route>
                    </Switch>
                </main>
                <Footer/>
            </Router>
        )
    }
}