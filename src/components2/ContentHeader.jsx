import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ContentHeader = ({ title, social }) => {
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
    const header_variant = {
        hidden: {
            y: '-10vw',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                dealy: 0.2,
                duration: 0.5,
                type: 'tween'
            }
        }
    }
    return (
        <motion.div className="container mainContent__header"
            variants={header_variant}
            initial='hidden'
            animate='visible'
        >
            <div className="row">
                <div className="col-md-6">
                    <div className="contetHeader_hed_title_wrap">
                        <div className="contetHeader_hed_title">
                            {title}
                        </div>
                        <div className="mainContent__body_title">
                            {
                                social === "resume" ?
                                    "Go My GitHub Profile" :
                                    "Contact Me"
                            }
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="mainContent__button_wrapper">
                        {social === "resume" ? (<div className="mainContent__button">
                            <a href={`${about.github}`} rel="noreferrer" target="_blank" >
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </div>) : (<><div className="mainContent__button">
                            <a href={`mailto:${about.email}`} rel="noreferrer" target="_blank" >
                                <i className="fa fa-at" aria-hidden="true"></i>
                            </a>
                        </div>
                            <div className="mainContent__button">
                                <a href={`${about.github}`} rel="noreferrer" target="_blank" >
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div className="mainContent__button">
                                <a href={`${about.linkdin}`} rel="noreferrer" target="_blank" >
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>

                            </div>
                            <div className="mainContent__button">
                                <a href={`${about.facebook}`} rel="noreferrer" target="_blank">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </div></>)}
                    </div>
                </div>
            </div>
        </motion.div>
        // <div className="mainContent__header p-3">
        //     <div className="mainContent__title">
        //         <h2>{title}</h2>
        //     </div>
        //     {
        //         social === "true" &&
        //         <div className="mainContent__body">
        //             <div className="mainContent__body_title">
        //                 Contact Me :
        //             </div>
        //             <div className="mainContent__button">
        //                 <a href={`mailto:${about.email}`} rel="noreferrer" target="_blank" >
        //                     <i className="fa fa-at" aria-hidden="true"></i>
        //                 </a>
        //             </div>
        //             <div className="mainContent__button">
        //                 <a href={`${about.github}`} rel="noreferrer" target="_blank" >
        //                     <i className="fa fa-github" aria-hidden="true"></i>
        //                 </a>
        //             </div>
        //             <div className="mainContent__button">
        //                 <a href={`${about.linkdin}`} rel="noreferrer" target="_blank" >
        //                     <i className="fa fa-linkedin" aria-hidden="true"></i>
        //                 </a>

        //             </div>
        //             <div className="mainContent__button">
        //                 <a href={`${about.facebook}`} rel="noreferrer" target="_blank">
        //                     <i className="fa fa-facebook" aria-hidden="true"></i>
        //                 </a>

        //             </div>
        //         </div>
        //     }
        //     {
        //         social === "resume" &&
        //         <div className="mainContent__body">
        //             <div className="mainContent__body_title">
        //                 Go My GitHub Profile :
        //             </div>
        //             <div className="mainContent__button">
        //                 <a href="#">
        //                     <i className="fa fa-github" aria-hidden="true"></i>
        //                 </a>
        //             </div>
        //         </div>
        //     }
        // </div>
    )
}

export default ContentHeader
