import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import placeholderIMG1 from '../assets/images/makeup-pallete.jpg';
import placeholderIMG2 from '../assets/images/portrait.jpg'
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

            <div id="about" className="container">
                <h1 className="text-center">Meet Your Stylist</h1>
                <div className="row mt-5">
                    
                    <div className="col-md-6">
                        <img src={placeholderIMG2} />
                    </div>

                    <div className="col-md-6">
                        <p className="about-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage;