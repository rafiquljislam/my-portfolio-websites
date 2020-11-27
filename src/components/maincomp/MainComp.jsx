import React from 'react'
import Navbar from '../navbar/Navbar'
import './MainComp.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from '../About/About'
import Resume from '../Resume/Resume'
import Projects from '../Projects/Projects'



const MainComp = () => {



    return (
        <div className="MainComp container">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/projects" component={Projects} />
                    <Route component={About} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainComp
