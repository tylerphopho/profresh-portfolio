import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import EventFinder from "../components/images/event-finder-img.png";
import PasswordGen from "../components/images/password-generator.png";
import QuizGame from "../components/images/quiz-game.png";
import Fitness from "../components/images/fitness-tracker.PNG";
import DayPlanner from "../components/images/day-planner.PNG";
import Weather from "../components/images/weather-dashboard.PNG";

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
                            <span className="card-title grey-text text-darken-4"><h4>Details</h4><i class="material-icons right">close</i></span>
                            <br/>
                            <h5>Ticketmaster API for Events <br/>Materialize CSS Framework<br/> Here API for location</h5>
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
                            <span className="card-title grey-text text-darken-4"><h4>Details</h4><i class="material-icons right">close</i></span>
                            <br/>
                            <h5>HTML<br/>CSS<br/>Javascript</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s6 m6">
                    <div className="card ">
                        <div className="card-image waves effect waves-block waves-light ">
                            <img className="activator" src={QuizGame}/>  
                            </div>  
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Quiz Game</span>
                            <a href="https://tylerphopho.github.io/PW-Generation/">View Project</a>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4"><h4>Details</h4><i class="material-icons right">close</i></span>
                            <h5>HTML<br/>CSS<br/>Javascript<br/>jQuery</h5>
                        </div>
                    </div>
                </div>
                <div className="col s6 m6">
                    <div className="card">
                        <div className="card-image waves effect waves-block waves-light ">
                            <img className="activator" src={Fitness}/>  
                            </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Fitness Tracker</span>
                            <a href="https://secure-headland-44408.herokuapp.com/?id=5eadff3550e46300172c0159">View Project</a>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4"><h4>Details</h4><i class="material-icons right">close</i></span>
                            <h5>HTML<br/>CSS<br/>Javascript<br/>MongoDB</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col s6 m6">
                    <div className="card">
                        <div className="card-image waves effect waves-block waves-light ">
                            <img className="activator" src={DayPlanner}/>  
                            </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Day Planner</span>
                            <a href="https://tylerphopho.github.io/weekly-day-planner/">View Project</a>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4"><h4>Details</h4><i class="material-icons right">close</i></span>
                            <h5>HTML<br/>CSS<br/>Javascript<br/>jQuery</h5>
                        </div>
                    </div>
                </div>  
                <div className="col s6 m6">
                    <div className="card">
                        <div className="card-image waves effect waves-block waves-light ">
                            <img className="activator" src={Weather}/>  
                            </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Weather Dashboard</span>
                            <a href="https://tylerphopho.github.io/weekly-day-planner/">View Project</a>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4"><h4>Details</h4><i class="material-icons right">close</i></span>
                            <h5>HTML<br/>CSS<br/>Javascript</h5>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}