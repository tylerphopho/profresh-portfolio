import React from "react";
import {Link} from "react-router-dom";

export default function Navbar({ skills, contact, portfolio, navClick}) {
    return(
        <nav className="nav-wrapper deep-purple darken-4">
            <div className="container">
                <a className="brand-logo"><Link to ="/" name="index" onClick={navClick}>Tyler Pho</Link></a>
                <ul className="right hide-on-med-and-down">
                    <li className={skills}><Link to="/skills" name="skills" onClick={navClick}>Skills</Link></li>
                    <li className={contact}><Link to="/contact" name="contact" onClick={navClick}>Contact</Link></li>
                    <li className={portfolio}><Link to="/portfolio" name="portfolio" onClick={navClick}>Portfolio</Link></li>
                    <li className={portfolio}><Link to="/resume" name="resume" onClick={navClick}>Resume</Link></li>
                </ul>
            </div>
        </nav>
    )
}