import React from 'react';
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';

import '../services.css';
import prettyGirl from '../assets/images/pretty.jpg';
import hairstylist from '../assets/images/hairstylist-1.jpg';
import hairStyle from '../assets/images/haircut-2.jpg';
import makeup1 from '../assets/images/makeup-girl.jpg';
import makeup2 from '../assets/images/makeup-girl-2.jpg';
import bridal from '../assets/images/bridal.jpg';


function Services() {
    return (
        <main id="services">
            <div className="services-top container-fluid">
                <div className="row">
                    <div className="col-md-6 you-look-good text-center">
                        <div className="message-background">
                            <Pulse>
                                <h1 className="you">You</h1>
                                <h1 className="look">Look</h1>
                                <h1 className="good">Great</h1>
                            </Pulse>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Slide right>
                            <img src={prettyGirl} />
                        </Slide>
                    </div>
                </div>
                <hr></hr>
            </div>

            <div id="Nav-Invite" className="container-fluid">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center" id="nav-container">
                        <div className="nav-services">
                            <a href="#hair">Hair</a>
                            <a href="#makeup">Makeup</a>
                            <a href="#group-events">Group Events</a>
                        </div>
                    </div>
                    <div id="services-appt-invite" className="col-md-6">
                        <p className="invite-p1">Already know what you want done?</p>
                        <hr className="hr1-services"></hr>
                        <p className="invite-p2">Schedule an appointment <span className="today"><a href="/appointment">TODAY</a></span>!</p>
                    </div>
                </div>

                <div id="hair" className="row">
                    <div className="col-md-7">
                        <img src={hairstylist} />
                    </div>
                    <div className="col-md-5 hair-srvs-div">
                        <h1>HAIR</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                </div>

                <div id="hairstyle" className="row">
                    <div className="col-md-6">
                        <div className="hair-srvs-div-2">
                            <h1>MORE HAIR</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={hairStyle} />
                    </div>
                </div>


                <div id="makeup" className="row">
                    <div className="col-md-4">
                        <img src={makeup1} className="makeup1" />
                    </div>
                    <div className="col-md-4">
                        <h1>MAKEUP</h1>
                        <p className="makeup-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                        <h1 className="mt-5">SKINCARE</h1>
                        <p className="makeup-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src={makeup2} className="makeup2" />
                    </div>
                </div>

                <div id="group-events" className="row">
                    <div className="col-md-6">
                        <img src={bridal} />
                    </div>

                    <div className="col-md-6">
                        <h1>GROUP EVENTS</h1>
                        <p className="group-events-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                </div>


            </div>
        </main>
    )
}

export default Services;