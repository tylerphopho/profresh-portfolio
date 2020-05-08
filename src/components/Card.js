import React, {Component} from "react";
import "materialize-css/dist/css/materialize.min.css";
import Me from "./me.jpg"


export default class Card extends Component {
    render(){
        return (
        <div className="container">
            <div className="card large" style={{marginTop: "100px"}}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={Me}></img>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4 center"><h4>Welcome to my Portfolio!</h4></span>
                    <h5 className="center"><a href="/portfolio">View Portfolio</a></h5>
                </div>
                <div className="card-reveal">
                    <span className="card-title activator grey-text text-darken-4"><h4 className="center">About</h4><i class="material-icons right">close</i></span>
                    <p style={{fontSize: "20px"}} className="center">Hello my name is Tyler Phothirath, I'm a Full Stack Web-Developer.<br/>
                    Here is my Portfolio to demonstrate some of my work, I hope you enjoy!<br/><br/> A little about me, I love art (everything.. art)
                    and love to be creative. I also enjoy learning and trying new things and finding time to perfect them if I actually do enjoy it. My family and friends
                    mean everything to me and I'm always on the look out to meeting new people.  I may seem shy at first but once I get comfortable I'm very outgoing and we'd love to meet you!
                    </p>
                </div>
            </div>
        </div>

        )
    }
}