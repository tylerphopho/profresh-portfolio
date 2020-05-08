import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import EventFinder from "../components/images/event-finder-img.png";
import PasswordGen from "../components/images/password-generator.png";
import QuizGame from "../components/images/quiz-game.png";

export default function Portfolio() {
    
    return(
        <div className="container">
            <div className="row">

                <div className="col s6 m6">
                        <div className="card">
                            <div className="card-image waves effect waves-block waves-light ">
                                <img className="activator" src={EventFinder}/>  
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Event Finder</span>
                                <a href="https://tylerphopho.github.io/event-finder/">View Project</a>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Event Finder</span>
                                <p>Information about the project</p>
                            </div>
                        </div>
                </div>
                
                <div className="col s6 m6">
                        <div className="card">
                            <div className="card-image waves effect waves-block waves-light ">
                                <img className="activator" src={PasswordGen}/>  
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Password Generator</span>
                                <a href="https://tylerphopho.github.io/PW-Generation/">View Project</a>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Password Generator</span>
                                <p>Information about the project</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className="row">

            <div className="col s6 m6">
                        <div className="card">
                            <div className="card-image waves effect waves-block waves-light ">
                                <img className="activator" src={QuizGame}/>  
                            </div>  
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Quiz Game</span>
                                <a href="https://tylerphopho.github.io/PW-Generation/">View Project</a>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Quiz Game</span>
                                <p>Information about the project</p>
                            </div>
                        </div>
                </div>

                <div className="col s6 m6">
                        <div className="card">
                            <div className="card-image waves effect waves-block waves-light ">
                                <img className="activator" src={PasswordGen}/>  
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Password Generator</span>
                                <a href="https://tylerphopho.github.io/PW-Generation/">View Project</a>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Password Generator</span>
                                <p>Information about the project</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}