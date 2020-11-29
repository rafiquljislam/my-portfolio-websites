import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SidebarButtons = () => {
    const getLucation = useLocation()
    const location = getLucation.pathname;
    return (
        <>
            <ul className="sidebar2__button_container">
                <li className={`sidebar2__button ${location === '/' && "sidebar2__button_active"}`}>
                    <Link to="/#">
                        <i class="fa fa-home" aria-hidden="true"></i>{"About".toUpperCase()}
                    </Link>
                </li>
                <li className={`sidebar2__button ${location === '/resume' && "sidebar2__button_active"}`}>
                    <Link to="/resume#resume">
                        <i class="fa fa-address-card-o" aria-hidden="true"></i>{"Resume".toUpperCase()}
                    </Link>
                </li>
                <li className={`sidebar2__button ${location === '/works' && "sidebar2__button_active"}`}>
                    <Link to="/works#works">
                        <i class="fa fa-database" aria-hidden="true"></i>{"works".toUpperCase()}
                    </Link>
                </li>
                <li className={`sidebar2__button ${location === '/contact' && "sidebar2__button_active"}`}>
                    <Link to="/contact#contact">
                        <i class="fa fa-at" aria-hidden="true"></i>{"Contact".toUpperCase()}
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default SidebarButtons
