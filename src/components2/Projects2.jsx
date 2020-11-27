import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'


const Projects2 = () => {
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
    const projects_variant = {
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
        <motion.div className="container m-0 p-0"
            variants={projects_variant}
            initial='hidden'
            animate='visible'
        >
            <div className="mainContent__header">
                <div className="mainContent__nav">
                    <nav className="navbar navbar-expand-lg navbar-dark py-0">
                        <div className="">
                            <h2 className="navbar-brand project__body_title" >Projects</h2>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto">
                                <a onClick={(_) => (setShow(state), setActive("all"))} className={`nav-item nav-link ${active === 'all' && 'project_item_active'}`} >All</a>
                                <a onClick={(_) => (filterdata('django'))} className={`nav-item nav-link ${active === 'django' && 'project_item_active'}`}  >Django</a>
                                <a onClick={(_) => (filterdata('react'))} className={`nav-item nav-link ${active === 'react' && 'project_item_active'}`}  >React</a>
                                <a onClick={(_) => (filterdata('android'))} className={`nav-item nav-link ${active === 'android' && 'project_item_active'}`}  >Android</a>
                                <a onClick={(_) => (filterdata('flutter'))} className={`nav-item nav-link ${active === 'flutter' && 'project_item_active'}`}  >Flutter</a>
                                <a onClick={(_) => (filterdata('firebase'))} className={`nav-item nav-link ${active === 'firebase' && 'project_item_active'}`}  >Fierbase</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="project_all_data_wrapper">
                <div className="row m-0 p-0">
                    {
                        show.map((data, i) => (
                            <div key={i} className="col-md-4">
                                <div className="project__single__item">
                                    <div className="project__single__item__img">
                                        <a href={data.deployed_url === null ? data.imageUrl : data.deployed_url} aria-hidden="true" rel="noreferrer" target="_blank">
                                            <img src={data.imageUrl} alt="" />
                                        </a>
                                    </div>
                                    <div className="project__single__item__data">
                                        <div className="project__single__item__data__img">
                                            <a href={data.github_url} aria-hidden="true" rel="noreferrer" target="_blank">
                                                <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="project__single__item__data__title">
                                            {data.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </motion.div>
    )
}

export default Projects2
