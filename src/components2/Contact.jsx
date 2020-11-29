import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ContactItem from './ContactItem'

const Contact = () => {
    const [link, setLinks] = useState([])
    useEffect(() => {
        const url = "https://raw.githubusercontent.com/rafiquljislam/Portfolio-Admin-Panel/main/Links.json";
        async function featchdata() {
            await fetch(url, { method: "GET" })
                .then((respon) => respon.json())
                .then((data) => setLinks(data))
        }
        featchdata();
    }, [])
    console.log(link);
    const contact_variant = {
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
        <motion.div className="container contact"
            variants={contact_variant}
            initial='hidden'
            animate='visible'
        >
            <div className="contact__body__fullWrapper">
                <div className="contact__body__fullWrapper_title">{"Social Links".toUpperCase()}</div>
                <div className="row">
                    {
                        link.map((data, i) => (
                            <div key={i} className="col-md-6  mx-0 px-0">
                                <ContactItem
                                    title={data.title}
                                    image={data.image}
                                    link={data.link}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Contact
