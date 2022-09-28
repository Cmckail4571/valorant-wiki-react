import React from 'react';
import '../index.css';
import ValLogo from "../media/logos/V_Logomark_Red.png";

function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark pb-3 pt-3">
            <div className="container-fluid">
                <a className="navbar-brand" id="logo-link" href="#">
                    <img src={ValLogo} alt="" width="60" height="40" className="d-inline-block align-middle"/>
                    <p className="fw-bold fs-4 d-inline">Valorant Tricks.GG</p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-lg-flex justify-content-end collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item me-3">
                            <a className="nav-link btn btn-dark fs-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link btn btn-dark fs-5" href="#stat-chart">Stats</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link btn btn-dark fs-5" href="#tutorials">Tutorials</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link btn btn-dark fs-5" href="#">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;