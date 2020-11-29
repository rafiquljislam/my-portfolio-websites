import React, { useEffect, useState } from 'react'
import Bar from '../components/Resume/Bar';
import { motion } from 'framer-motion'



const Resume2 = () => {
    const [education, setEducation] = useState([]);
    const [exprience, setExprience] = useState([]);
    const [language, setLanguage] = useState([]);
    const [tools, setTools] = useState([]);
    const [resume, setResumetitle] = useState({});

    useEffect(() => {
        const url = "https://raw.githubusercontent.com/rafiquljislam/Portfolio-Admin-Panel/main/About.json";
        async function featchdata() {
            await fetch(url, { method: "GET" })
                .then((respon) => respon.json())
                .then((data) => setResumetitle(data))
        }
        featchdata();
    }, [])



    useEffect(() => {
        let url = "https://raw.githubusercontent.com/rafiquljislam/Portfolio-Admin-Panel/main/Education.json";
        let featchdata = async () => {
            try {
                await fetch(url, { method: "GET" })
                    .then((respon) => respon.json())
                    .then((data) => setEducation(data))
            } catch (error) {
                console.log(error)
            }
        }
        featchdata();
    }, [])

    useEffect(() => {
        let url = "https://raw.githubusercontent.com/rafiquljislam/Portfolio-Admin-Panel/main/Experience.json";
        let featchdata = async () => {
            try {
                await fetch(url, { method: "GET" })
                    .then((respon) => respon.json())
                    .then((data) => setExprience(data))
            } catch (error) {
                console.log(error)
            }
        }
        featchdata();
    }, [])

    useEffect(() => {
        let url = "https://raw.githubusercontent.com/rafiquljislam/Portfolio-Admin-Panel/main/languages.json";
        let featchdata = async () => {
            try {
                await fetch(url, { method: "GET" })
                    .then((respon) => respon.json())
                    .then((data) => setLanguage(data))
            } catch (error) {
                console.log(error)
            }
        }
        featchdata();
    }, [])

    useEffect(() => {
        let url = "https://raw.githubusercontent.com/rafiquljislam/Portfolio-Admin-Panel/main/Tools.json";
        let featchdata = async () => {
            try {
                await fetch(url, { method: "GET" })
                    .then((respon) => respon.json())
                    .then((data) => setTools(data))
            } catch (error) {
                console.log(error)
            }
        }
        featchdata();
    }, [])
    const resume_variant = {
        hidden: {
            x: '-10vw',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                dealy: 0.2,
                duration: 0.6,
                type: 'tween'
            }
        }
    }

    return (
        <motion.div className="container m-0 p-0"
            variants={resume_variant}
            initial='hidden'
            animate='visible'
        >
            <div className="resume__content__header">
                <div className="resume_header__title__head">
                    <div className="resume_header__title__head__icon">
                        <i class="fa fa-briefcase" aria-hidden="true"></i>
                    </div>
                    <div className="resume_header__title__head__text">
                        {resume.resumetitle}
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-md-6">
                        <div className="resume__content__title">Education</div>
                        {
                            education.map((edu, i) => (
                                <div key={i} className="resume__content__data">
                                    <p><b>{edu.college}</b></p>
                                    <p>{edu.subject}({edu.year})</p>
                                    <p>{edu.about}</p>
                                    <p><b>GPA</b> : {edu.Gead}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-6">
                        <div className="resume__content__title">Experience</div>
                        {
                            exprience.map((exp, i) => (
                                <div key={i} className="resume__content__data">
                                    <p><b>{exp.title}</b></p>
                                    <p>Company Name: {exp.companyName}</p>
                                    <p>Position: {exp.position}</p>
                                    <p>Dutration: {exp.duration}</p>
                                    <p>Time: {exp.time}</p>
                                </div>
                            ))
                        }

                    </div>
                    <div className="col-md-6">
                        <div className="resume__content__title">Language & Framework</div>
                        {
                            language.map((data, i) => (
                                <div key={i} className="resume__content__data">
                                    <Bar
                                        name={data.name}
                                        icon={data.icon}
                                        level={data.level}
                                    />
                                </div>
                            ))
                        }

                    </div>
                    <div className="col-md-6">
                        <div className="resume__content__title">Tools & Software</div>
                        {
                            tools.map((data, i) => (
                                <div key={i} className="resume__content__data">
                                    <Bar
                                        name={data.name}
                                        icon={data.icon}
                                        level={data.level}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume2
