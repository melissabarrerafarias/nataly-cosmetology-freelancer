import React from 'react';
import '../navbar.css';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div id="navBarElements" class="container-fluid">
                <div id="navTitle">
                    <a class="navbar-brand" href="/">BeautyXBelle</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="far fa-caret-square-down"></i>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a id="navFAQ" class="nav-link" aria-current="page" href="/">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a id="navFAQ" class="nav-link" aria-current="page" href="/#about">ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a id="navAbout" class="nav-link" aria-current="page" href="/services">SERVICES</a>
                        </li>
                        <li class="nav-item">
                            <a id="navContact" class="nav-link" aria-current="page" href="/appointment">BOOK NOW</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;