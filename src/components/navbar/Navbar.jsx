import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {

    const [activeNav, setactiveNav] = useState('')
    const lucation = useLocation()
    const curentPath = lucation.pathname
    useEffect(() => {
        if (curentPath === '/') {
            setactiveNav("About")
        }
        else if (curentPath === '/resume') {
            setactiveNav("Resume")
        }
        else if (curentPath === '/projects') {
            setactiveNav("Projects")
        } else {
            setactiveNav("About")
        }
    }, [curentPath])

    return (
        <div className="navbar_">
            <nav class="navbar m-0 p-0 navbar-expand-lg navbar-light bg-">
                <h1 class="navbar-brand" >{activeNav}</h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link class="nav-link navbar__irems" to="/">About </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link navbar__irems" to="/resume">Resume</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link navbar__irems" to="/projects">Projects</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
