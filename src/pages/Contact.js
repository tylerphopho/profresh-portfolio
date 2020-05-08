import React from "react";
import "materialize-css/dist/css/materialize.min.css";

export default function Contact() {
    return (
        <div className="container">
            <div className="card large deep-purple darken-4">
                <div className="card-content white-text">
                    <span className="card-title"><h3 className="center">Contact Information</h3></span>
                    <br/>
                    <div className="container">
                    <p style={{fontSize: "30px"}}><i class="material-icons">call</i> Number: 801-946-5454</p>
                    <p style={{fontSize: "30px"}}><i class="material-icons">contact_mail</i> Email: Tyler.phopho@gmail.com</p>
                    <p style={{fontSize: "30px"}}><a class="fa fa-github grey-text text-lighten-3" href="https://github.com/tylerphopho"> GitHub</a></p>
                    <p style={{fontSize: "30px"}}><a class="fa fa-linkedin grey-text text-lighten-3" href="https://www.linkedin.com/in/tyler-phothirath-bb2a07194/"> LinkedIn</a></p>
                    <p style={{fontSize: "30px"}}><a class="fa fa-twitter grey-text text-lighten-3" href="https://twitter.com/typhopho"> Twitter</a></p>
                    </div>

                </div>
            </div>
        </div>
    )
}