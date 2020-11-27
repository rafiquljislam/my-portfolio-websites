import React, { useEffect, useState } from 'react'
import Bar from './Bar';
import "./Resume.css";

const Resume = () => {

    const [education, setEducation] = useState([])
    const [exprience, setExprience] = useState([])
    const [language, setLanguage] = useState([])
    const [tools, setTools] = useState([])

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


    return (
        <div className="container">
            <div className="row resume">
                <div className="col-lg-6 resume__item">
                    <h4>Education</h4>
                    {
                        education.map((edu, i) => (
                            <div key={i} className="resume__singleEdu">
                                <p><b>{edu.college}</b></p>
                                <p>{edu.subject}({edu.year})</p>
                                <p>{edu.about}</p>
                                <p><b>GPA</b> : {edu.Gead}</p>
                            </div>
                        )
                        )
                    }
                </div>
                <div className="col-lg-6 resume__item">
                    <h4>Exprience</h4>
                    {
                        exprience.map((exp, i) => (
                            <div key={i} className="resume__singleExp">
                                <p><b>{exp.title}</b></p>
                                <p>Company Name: {exp.companyName}</p>
                                <p>Position: {exp.position}</p>
                                <p>Dutration: {exp.duration}</p>
                                <p>Time: {exp.time}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="col-lg-6 resume__item">
                    <h4>Language & Framework</h4>
                    {
                        language.map((data, i) => (
                            <div key={i} className="">
                                <Bar
                                    name={data.name}
                                    icon={data.icon}
                                    level={data.level}
                                />
                            </div>
                        ))
                    }

                </div>
                <div className="col-lg-6 resume__item">
                    <h4>Tools & Software</h4>
                    {
                        tools.map((data, i) => (
                            <div key={i} className="">
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
    )
}

export default Resume
