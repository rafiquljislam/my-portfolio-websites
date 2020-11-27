import React, { useEffect, useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {
    const [about, setAbout] = useState({});

    useEffect(() => {
        const url = "https://raw.githubusercontent.com/rafiquljislam/Portfolio-Admin-Panel/main/About.json";
        async function featchdata() {
            await fetch(url, { method: "GET" })
                .then((respon) => respon.json())
                .then((data) => setAbout(data))
        }
        featchdata();
    }, [])
    console.log(about);
    const facebook = about.facebook;
    const instragram = about.instragram;
    const linkdin = about.linkdin;
    const github = about.github;

    return (
        <div className="sidebar">
            <div className="sidebar__image">
                <img src={about.imgage} alt="" srcset="" />
            </div>
            <div className="sidebar__name">
                <h3>{about.name}</h3>
            </div>
            <div className="sidebar__title">
                <h4>{about.title}</h4>
            </div>
            <div className="sidebar__resume my-2">
                <a className="btn btn-info btn-lg" href="#" target="_blank" rel="noreferrer"><i className="fa fa-file-pdf-o" aria-hidden="true"></i> Dounlode resume</a>
            </div>
            <div className="sidebar__girhub mb-2">
                <a href={github} target="_blank" rel="noreferrer" className="btn btn-info btn-lg"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a>
            </div>
            <div className="sidebar__socialbutton">
                <a href={facebook} target="_blank" rel="noreferrer" className="">
                    <i className="fa fa-facebook-f"></i>
                </a>
                <a href={instragram} target="_blank" rel="noreferrer" className="">
                    <i className="fa fa-instagram" ></i>
                </a>
                <a href={linkdin} target="_blank" rel="noreferrer" className="">
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>
            <div className="sodebar__address">
                <p>{about.email}</p>
                <p>{about.address}</p>
                <p>{about.phone}</p>
            </div>
        </div>
    )
}

export default Sidebar
