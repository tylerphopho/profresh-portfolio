import React from "react";

export default function Skills() {
    return(
        <div className="container">
            <ul className="collection with-header">
                <li className="collection-header center"><h1>Skills</h1></li>
                <li className="collection-item center"><h4><i class="fab fa-html5"> HTML</i></h4></li>
                <li className="collection-item center"><h4><i class="fab fa-css3-alt"> CSS</i></h4></li>
                <li className="collection-item center"><h4><i class="fab fa-js"> Javascript</i></h4></li>
                <li className="collection-item center"><h4><i class="fab fa-node"> Node.js</i></h4></li>
                <li className="collection-item center"><h4><i class="fas fa-database"> MySql</i></h4></li>
                <li className="collection-item center"><h4><i class="fas fa-rocket"> MongoDB</i></h4></li>

            </ul>
        </div>
    )
}