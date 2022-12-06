import React, { useState } from 'react';

import employeeTracker from './../../assets/employeetracker.PNG'
import gameHoard from './../../assets/gamehoard.PNG'
import hobbyTracker from './../../assets/hobbytracker.PNG'
import READMEgenerator from './../../assets/readmegenerator.PNG'
import socialNetworkAPI from './../../assets/socialnetworkAPI.PNG'
import weatherDashboard from './../../assets/weatherdashboard.PNG'


export default function Portfolio () {

    const [currentIndicator, setCurrentIndicator] = useState(1)
    const [currentSlide, setCurrentSlide] = useState(1)

    
    function handleCarouselNext () {
        console.log("Next clicked")
        if (currentIndicator < 6) {
            setCurrentIndicator(currentIndicator + 1)
        } else {
            setCurrentIndicator(1)
        }
        if (currentSlide < 6) {
            setCurrentSlide(currentSlide+1)
        } else {
            setCurrentSlide(1)
        }
    }

    function handleCarouselPrev () {
        console.log("prev clicked")
        if (currentIndicator > 1) {
            setCurrentIndicator(currentIndicator - 1)
        } else {
            setCurrentIndicator(6)
        }
        if (currentSlide > 1) {
            setCurrentSlide(currentSlide - 1)
        } else {
            setCurrentSlide(6)
        }
    }
    return (
        <>
        <div id="carouselExampleCaptions myCarousel" className="carousel slide position-relative" data-bs-ride="false">
            <div className="carousel-indicators">
                <button id="indicator1" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className={currentIndicator === 1 ? "active" : ""} aria-current={currentIndicator === 1 ? "true" : ""} aria-label="Slide 1"></button>
                <button id="indicator2" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className={currentIndicator === 2 ? "active" : ""} aria-current={currentIndicator === 2 ? "true" : ""} aria-label="Slide 2"></button>
                <button id="indicator3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className={currentIndicator === 3 ? "active" : ""} aria-current={currentIndicator === 3 ? "true" : ""} aria-label="Slide 3"></button>
                <button id="indicator4" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className={currentIndicator === 4 ? "active" : ""} aria-current={currentIndicator === 4 ? "true" : ""} aria-label="Slide 4"></button>
                <button id="indicator5" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" className={currentIndicator === 5 ? "active" : ""} aria-current={currentIndicator === 5 ? "true" : ""} aria-label="Slide 5"></button>
                <button id="indicator6" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" className={currentIndicator === 6 ? "active" : ""} aria-current={currentIndicator === 6 ? "true" : ""} aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner">
                <div className={currentSlide === 1 ? "carousel-item active" : "carousel-item"} id="item1">
                    <img src={hobbyTracker} className="d-block w-100" alt="hobby tracker website"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Hobby Tracker</h5>
                        <p>This application allows the user to 'level up' as they complete tasks and get rewarded with YouTube videos based on their personal preferences.</p>
                    </div>
                </div>
                <div className={currentSlide === 2 ? "carousel-item active" : "carousel-item"} id="item2">
                    <img src={gameHoard} className="d-block w-100" alt="app that tracks games you/others own"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Game Hoard</h5>
                        <p>This app allows users to catalogue their game collection and find other users to play with.</p>
                    </div>
                </div>
                <div className={currentSlide === 3 ? "carousel-item active" : "carousel-item"} id="item3">
                    <img src={weatherDashboard} className="d-block w-100" alt="weather dashboard app"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Weather Dashboard</h5>
                        <p>Allows the user to check the weather for any city in the US; utilizes a 3rd party API.</p>
                    </div>
                </div>
                <div className={currentSlide === 4 ? "carousel-item active" : "carousel-item"} id="item4">
                    <img src={socialNetworkAPI} className="d-block w-100" alt="A social media API that returns user data as JSON"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Social Network API</h5>
                        <p>Utilizes a Mongo database to replicate social network functionality without a frontend.</p>
                    </div>
                </div>
                <div className={currentSlide === 5 ? "carousel-item active" : "carousel-item"} id="item5">
                    <img src={employeeTracker} className="d-block w-100" alt="Console/command line app that tracks employees"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Employee Tracker</h5>
                        <p>Utilizes a SQL database to make a console/command line app that allows the user to manipulate employee data.</p>
                    </div>
                </div>
                <div className={currentSlide === 6 ? "carousel-item active" : "carousel-item"} id="item6">
                    <img src={READMEgenerator} className="d-block w-100" alt="Console/command line app that generates a README file"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Professional README Generator</h5>
                        <p>Allows a user to create a README file for their app in the console/command line through a series of prompts.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" onClick={handleCarouselPrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" onClick={handleCarouselNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
</>
    );
};