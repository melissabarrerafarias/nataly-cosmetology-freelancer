import React from 'react';
import Pulse from 'react-reveal/Pulse';
import Slide from 'react-reveal/Slide';

import '../services.css';
import prettyGirl from '../assets/images/pretty.jpg';


function Services() {
    return (
        <main id="services">
            <div className="">
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
            </div>
        </main>
    )
}

export default Services;