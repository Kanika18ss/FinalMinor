import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import logo from '../Assets/logo.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>WE WELCOME YOU</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>to</p>
                        <img src={hand_icon} alt=""/>
                    </div>
                    <p>the world</p>
                    <p>of MEDITATION</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest offers</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>
            <div className='hero-right'>
                <img src={logo} alt=''/>
            </div>
        </div>
    )
}
export default Hero;
