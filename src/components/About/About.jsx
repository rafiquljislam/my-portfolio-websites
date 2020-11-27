import React, { useEffect, useState } from 'react'
import './About.css';

const About = () => {
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
                    .then((data) => setAboutme(data[0].about))
            } catch (error) {
                console.log(error)
            }
        }
        featchdata();
    }, [])
    return (
        <div className="about container">
            <div className="about__docs">
                <p>{aboutme}</p>
            </div>
            <div className="">
                <h2>Whit I Provite</h2>
            </div>
            <div className="about__allSkills row">
                {slills.map((skil, i) => (
                    <div key={i} className="about__singleSkill col-lg-5">
                        <div className="about__skill_image">
                            <img src={skil.icon} alt="" />
                        </div>
                        <div className="about__skill_contete">

                            <h5>{skil.title}</h5>
                            <p>{skil.about
                            }</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About
