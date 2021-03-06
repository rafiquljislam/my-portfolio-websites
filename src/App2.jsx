import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';
import './App2.css';
import Contact from './components2/Contact';
import Maincomp2 from './components2/Maincomp2';
import Projects2 from './components2/Projects2';
import Resume2 from './components2/Resume2';
import Sidebar2 from './components2/Sidebar2';
import SidebarButtons from './components2/SidebarButtons';

const App2 = () => {
  const location = useLocation();
  return (

    <AnimatePresence>
      <div className="container-fluid">
        <div className="row">
          <SidebarButtons />
          <div className="col-md-3 p-0">
            <Sidebar2 />
          </div>
          <div className="col-md-9 p-0">
            <Switch location={location} key={location.key}>
              <Route exact path="/" component={Maincomp2} />
              <Route exact path="/resume" component={Resume2} />
              <Route exact path="/works" component={Projects2} />
              <Route exact path="/contact" component={Contact} />
              <Route component={Maincomp2} />
            </Switch>
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default App2
