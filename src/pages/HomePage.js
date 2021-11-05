import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import placeholderIMG1 from '../assets/images/makeup-pallete.jpg'
function HomePage() {
    return (
        <main id="homepage">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 d-flex justify-content-end">
                        <Fade left>
                            <img src={placeholderIMG1} className="homepage-init-img" />
                        </Fade>
                    </div>
                    <Fade top>
                        <div className="col-md-6">
                            <div className="overlap-text-div">
                                <h1 className="overlap-h1">BOOK TODAY</h1>
                                <p className="overlap-p">Check out my availability and schedule an appointment with me today!</p>
                                <button className="overlap-btn"><Link to={'/appointment'}>LET'S GO</Link></button>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </main>
    )
}

export default HomePage;