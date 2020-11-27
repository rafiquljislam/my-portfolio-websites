import React, { useEffect, useState } from 'react'
import './Projects.css';

const Projects = () => {
    const [state, setState] = useState([])
    const [show, setShow] = useState([])
    const [active, setActive] = useState('all')
    useEffect(() => {
        let url = "https://raw.githubusercontent.com/rafiquljislam/Portfolio-Admin-Panel/main/Project.json";
        let featchdata = async () => {
            try {
                await fetch(url, { method: "GET" })
                    .then((respon) => respon.json())
                    .then((data) => (
                        setState(data),
                        setShow(data)
                    ))
            } catch (error) {
                console.log(error)
            }
        }
        featchdata();
    }, [])


    const filterdata = async (d) => {
        setActive(d)
        if (state.filter(project => project.category.includes(d))) {
            const data = await state.filter(project => project.category.includes(d));
            setShow(data);
        }
        else if (d == 'all') {
            setShow(state)
        }
    };



    return (
        <>
            <div className="projects__navbar">
                <nav class="navbar navbar-expand-lg navbar-light p-0">
                    <a class="navbar-brand">Projects</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-auto">
                            <div onClick={(_) => (setShow(state), setActive("all"))} className={`nav-item projects__nav_item ${active === 'all' && "projects__nav_item_active"}`} >All</div>
                            <div onClick={(_) => (filterdata('django'))} className={`nav-item projects__nav_item ${active === 'django' && "projects__nav_item_active"}`}>Django</div>
                            <div onClick={(_) => (filterdata('react'))} className={`nav-item projects__nav_item ${active === 'react' && "projects__nav_item_active"}`}>React</div>
                            <div onClick={(_) => (filterdata('android'))} className={`nav-item projects__nav_item ${active === 'android' && "projects__nav_item_active"}`}>Android</div>
                            <div onClick={(_) => (filterdata('flutter'))} className={`nav-item projects__nav_item ${active === 'flutter' && "projects__nav_item_active"}`}>Flutter</div>
                            <div onClick={(_) => (filterdata('firebase'))} className={`nav-item projects__nav_item ${active === 'firebase' && "projects__nav_item_active"}`}>Fierbase</div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container">
                <div className="row projects">
                    {show.map((proj) => (
                        <div className="col-lg-6">
                            <h3>{proj.name}</h3>
                            <h3>{proj.category.map((cat) => (
                                <h3>{cat}</h3>
                            ))}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects
