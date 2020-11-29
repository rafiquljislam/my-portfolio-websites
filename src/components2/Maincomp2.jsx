import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'


const Maincomp2 = () => {
    const [slills, setSlills] = useState([])
    const [aboutme, setAboutme] = useState('');

    useEffect(() => {
        const url = "https://raw.githubusercontent.com/rafiquljislam/Portfolio-Admin-Panel/main/Skills.json";
        const featchdata = async () => {
            try {
                await fetch(url)
                    .then((respon) => respon.json())
                    .then((data) => setSlills(data))
            } catch (error) {
                console.log(error)
            }
        }
        featchdata();
    }, [])
    useEffect(() => {
        const url = "https://raw.githubusercontent.com/rafiquljislam/Portfolio-Admin-Panel/main/About.json";
        const featchdata = async () => {
            try {
                await fetch(url)
                    .then((respon) => respon.json())
                    .then((data) => setAboutme(data.about))
            } catch (error) {
                console.log(error)
            }
        }
        featchdata();
    }, [])
    const about_variant = {
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
        <>
            <motion.div className="container p-0"
                variants={about_variant}
                initial='hidden'
                animate='visible'
            >
                <div className="mainComp__about">
                    <p>{aboutme}</p>
                </div>
                <div className="mainComp__offer">
                    What I Offer
                </div>
                <div className="mainComp__offer__full_wrapper">
                    <div className="row p-0 m-0">
                        {slills.map((skill, i) => (
                            <div key={i} className="col-md-6">
                                <div className="mainComp__offer_itemwrapper">
                                    <div className="offer_item__img">
                                        <img src={skill.icon} alt="" />
                                    </div>
                                    <div className="offer_item__data">
                                        <div className="offer_item__data_title">
                                            {skill.title}
                                        </div>
                                        <div className="offer_item__data_about">
                                            {skill.about}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Maincomp2
