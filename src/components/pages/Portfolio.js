import React, { useState } from 'react';

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
                    <img src="http://placekitten.com/300/300" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className={currentSlide === 2 ? "carousel-item active" : "carousel-item"} id="item2">
                    <img src="http://placekitten.com/301/301" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className={currentSlide === 3 ? "carousel-item active" : "carousel-item"} id="item3">
                    <img src="http://placekitten.com/302/302" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
                <div className={currentSlide === 4 ? "carousel-item active" : "carousel-item"} id="item4">
                    <img src="http://placekitten.com/303/303" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Fourth slide label</h5>
                        <p>Some representative placeholder content for the fourth slide.</p>
                    </div>
                </div>
                <div className={currentSlide === 5 ? "carousel-item active" : "carousel-item"} id="item5">
                    <img src="http://placekitten.com/304/304" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Fifth slide label</h5>
                        <p>Some representative placeholder content for the fifth slide.</p>
                    </div>
                </div>
                <div className={currentSlide === 6 ? "carousel-item active" : "carousel-item"} id="item6">
                    <img src="http://placekitten.com/305/305" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Sixth slide label</h5>
                        <p>Some representative placeholder content for the sixth slide.</p>
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