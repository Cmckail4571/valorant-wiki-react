import React from 'react';
import '../index.css';
import Valorant_Red from '../media/images/wallpapers/VALORANT_V_Red.jpg';
import Valorant_Prime from '../media/images/Prime/ValorantWallpaper_Prime.jpg';
import Pheonix_Jet from '../media/images/VALORANT_phx_jett_brand.jpg';
import Val_Split from '../media/images/Split/ValorantWallpaper_SplitMap.jpg'

function Carousel() {
    return (
        <div id="main-carousel" className="carousel slide mt-4" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={Valorant_Red} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <h5>Welcome to Valorant Tricks.GG!</h5>
                        <p className="d-none d-md-block">Valorant is a 5v5 tactical shooter with unique agents. 
                            Valorant's game play relies on precise gunplay and strategy, setting up for attack or defense using a range of weapons and abilities.
                            Each team gets to play once from defense side and once from attack side, with up to 25 rounds per game split into 2 halfs, the first team to 13 rounds wins.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="8000">
                    <img src={Valorant_Prime} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <a href="#stat-chart" className="carousel-link">
                            <h5>Check Out Gun Stats!</h5>
                        </a>
                        <p className="d-none d-md-block">Guns in Valorant all have unique damage values and effective ranges that create varied engagments, get up to speed on what you need to know about each weapon to effictivley plan your strategies.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="8000">
                    <img src={Pheonix_Jet} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <a href="#tutorials" className="carousel-link">
                            <h5>Watch tutorials from your favourite creators!</h5>
                        </a>
                        <p className="d-none d-md-block">Watch or read from a library of tutorials available from popular creators and real players with tips and tricks to keep you
                            up to date with the latest strategies.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="8000">
                    <img src={Val_Split} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption">
                        <a href="#signup" className="carousel-link">
                            <h5>Sign Up for the Daily Newsletter!</h5>
                        </a>
                        <p className="d-none d-md-block">Sign up to recieve our daily newsletter full of fresh Valorant news, info, and tutorials.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;