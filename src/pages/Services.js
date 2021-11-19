import React from 'react';
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';

import '../services.css';
import prettyGirl from '../assets/images/pretty.jpg';


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

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center" id="nav-container">
                        <div className="nav-services">
                            <a href="#hair">Hair</a>
                            <a href="#makeup">Makeup</a>
                            <a href="#group-events">Group Events</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p>Already know what you want done?</p>
                        <p>Schedule an appointment!</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Services;