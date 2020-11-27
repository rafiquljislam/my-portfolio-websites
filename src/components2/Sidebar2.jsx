import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Sidebar2 = () => {
    const getLucation = useLocation()
    const location = getLucation.pathname;
    const [about, setAbout] = useState({})
    useEffect(() => {
        const url = "https://raw.githubusercontent.com/rafiquljislam/Portfolio-Admin-Panel/main/About.json";
        async function featchdata() {
            await fetch(url, { method: "GET" })
                .then((respon) => respon.json())
                .then((data) => setAbout(data))
        }
        featchdata();
    }, [])
    const sidebar_variant = {
        hidden: {
            x: '-10vw',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                dealy: 0.2,
                duration: 0.5,
                type: 'tween'
            }
        }
    }
    return (
        <motion.div className="sidebar2__container"
            variants={sidebar_variant}
            initial='hidden'
            animate='visible'
        >
            <div className="sidebar2__info">
                <img className="rounded-circle" src={about.imgage} alt="" />
                <h3>{about.name}</h3>
                <button type="button" class="btn btn-primary mb-2">{about.title}</button>
                <button type="button" class="btn btn-success">Dounloda CV</button>
            </div>
            <div className="sidebar2__button_container">
                <div className="sidebar2__button">
                    <Link to="/">
                        <i class={`fa fa-home ${location === '/' && "sidebar2__button_active"}`} aria-hidden="true"></i>
                    </Link>
                </div>
                <div className="sidebar2__button">
                    <Link to="/resume">
                        {/* <i class={`fa fa-file ${location === '/resume' && "sidebar2__button_active"}`} aria-hidden="true"></i> */}
                        <i class={`fa fa-address-card-o ${location === '/resume' && "sidebar2__button_active"}`} aria-hidden="true"></i>
                    </Link>
                </div>
                <div className="sidebar2__button">
                    <Link to="/projects">
                        <i class={`fa fa-database ${location === '/projects' && "sidebar2__button_active"}`} aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar2
