import React, {Component} from "react";
import "materialize-css/dist/css/materialize.min.css";
import Me from "./me.jpg"


export default class Card extends Component {
    render(){
        return (
            <div className="card large" style={{marginTop: "100px"}}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={Me}></img>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4 center"><h4>Welcome to my Portfolio!</h4></span>
                    <h5 className="center"><a href="#   ">View Portfolio</a></h5>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">About</span>
                    <p>Some information about me</p>
                </div>
            </div>
        )
    }
}