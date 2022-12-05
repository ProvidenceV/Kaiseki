import React from "react";
import kaisekipromotional from "./assets/kaiseki-fine-dining.mp4"

const Hero = () => {
    return (
        <>
        <div className="hero">
            <div className="overlay"></div>
            <video src={kaisekipromotional} autoPlay loop muted />
            <div className="hero-content">
                <h1>
                    "An experience to remember."
                </h1>
            </div>
        </div>
        </>
    )
}

export default Hero