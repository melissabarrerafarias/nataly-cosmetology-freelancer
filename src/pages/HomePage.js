import React from 'react';

import placeholderIMG1 from '../assets/images/makeup-pallete.jpg'
function HomePage() {
    return (
        <main id="homepage">
            <div className="container">
                <img src={placeholderIMG1} className="homepage-init-img"/>
            </div>
        </main>
    )
}

export default HomePage;