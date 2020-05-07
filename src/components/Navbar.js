import React, {Component} from "react";
import "materialize-css/dist/css/materialize.min.css";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper deep-purple darken-4">
                <div className="container">
                <a href="#" className="brand-logo">Tyler Pho</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Porfolio</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}