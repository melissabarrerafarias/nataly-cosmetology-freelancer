import React from 'react';
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';

import '../services.css';
import prettyGirl from '../assets/images/pretty.jpg';


function Services() {
    return (
        <main id="services">
            <div className="services-top">
                <div className="row">
                    <div className="col-md-6 you-look-good text-center">
                        <Pulse>
                            <h1 className="you">You</h1>
                            <h1 className="look">Look</h1>
                            <h1 className="good">Great</h1>
                        </Pulse>
                    </div>
                    <div className="col-md-6">
                        <Slide right>
                            <img src={prettyGirl} />
                        </Slide>
                    </div>
                </div>
                <hr></hr>
            </div>
            
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <a>Hair</a>
                        <a>Makeup</a>
                        <a>Group Events</a>
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