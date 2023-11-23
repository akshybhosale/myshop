import React from "react";
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () =>{
    return(
        <div className="hero">
<div className="hero-left">
    <h2>New Arrival Only</h2>
    <div>
         <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="hand_icon" />
         </div>
         <p>Collection</p>
         <p>for Everyone</p>
    </div>
    <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img src={arrow} alt="Arrow icon"/>
    </div>
</div>
<div className="hero-right">
    <img src={hero_image} alt="Hero_image"/>
</div>
        </div>
    )
}
export default Hero;