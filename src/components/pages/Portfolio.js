import React from 'react';

import gameHoard from './../../assets/gamehoard.PNG'
import hobbyTracker from './../../assets/hobbytracker.PNG'
import READMEgenerator from './../../assets/readmegenerator.PNG'
import socialNetworkAPI from './../../assets/socialnetworkAPI.PNG'
import weatherDashboard from './../../assets/weatherdashboard.PNG'


export default function Portfolio () {

    // function hoverAnimation (e) {
    //     console.log("hovering!")
    //     console.log(e.target)
    // }

    return (
        <div className='portfolio-card-container'>
            <div className='portfolio-card' id='portfolio-card-1'>
                <a href='https://diangigrich.github.io/PineappleMotivator/index.html#' target="_blank" rel="noreferrer">
                    <h5>Hobby Tracker</h5>
                    <img src={hobbyTracker} className="d-block w-100" alt="hobby tracker website"/>
                    <p>This application allows the user to 'level up' as they complete tasks and get rewarded with YouTube videos based on their personal preferences.</p>
                </a>
            </div>
            <div className='portfolio-card' id='portfolio-card-2'>
                <a href='https://gamehoard2022.herokuapp.com/' target="_blank" rel="noreferrer">
                    <h5>Game Hoard</h5>
                    <img src={gameHoard} className="d-block w-100" alt="app that tracks games you/others own"/>
                    <p>This app allows users to catalogue their game collection and find other users to play with. Uses SQL database and Handlebars Node.js package.</p>
                </a>
            </div>
            <div className='portfolio-card' id='portfolio-card-3'>
                <a href='https://killingsworth-kristen.github.io/weather-dashboard/' target="_blank" rel="noreferrer">
                    <h5>Weather Dashboard</h5>
                    <img src={weatherDashboard} className="d-block w-100" alt="weather dashboard app"/>
                    <p>Allows the user to check the weather for any city in the US; utilizes a 3rd party API. Utilizes local storage and a 3rd party weather API.</p>
                </a>
            </div>
            <div className='portfolio-card' id='portfolio-card-4'>
                <a href='https://github.com/killingsworth-kristen/social-network-API' target="_blank" rel="noreferrer">
                    <h5>Social Network API</h5>
                    <img src={socialNetworkAPI} className="d-block w-100" alt="A social media API that returns user data as JSON"/>
                    <p>Utilizes a Mongo database to replicate social network functionality without a frontend.</p>
                </a>
            </div>
            <div className='portfolio-card' id='portfolio-card-5'>
                <a href='https://github.com/killingsworth-kristen/professional-README-generator' target="_blank" rel="noreferrer">
                    <h5>Professional README Generator</h5>
                    <img src={READMEgenerator} className="d-block w-100" id="README-img" alt="Console/command line app that generates a README file"/>
                    <p>Allows a user to create a README file for their app in the console/command line through a series of prompts. Utilizes inquirer Node.js package.</p>
                </a>
            </div>
        </div>
    );
};