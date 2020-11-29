import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SidebarButtons from './SidebarButtons'

const Sidebar2 = () => {
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
                <a href={about.cv} type="button" class="btn btn-success">{"Dounloda CV".toUpperCase()}</a>
            </div>
        </motion.div>
    )
}

export default Sidebar2
