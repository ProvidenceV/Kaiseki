import React from 'react';
import logo from "./assets/kaiseki-logo.png";

export default function Title(){
    return(
        <div class="title">
            <a href="/"><img class="logo" src={logo} alt="Kaiseki" /></a>
        </div>
    )
}