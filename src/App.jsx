import React from 'react';
import './App.css';
import MainComp from './components/maincomp/MainComp';
import Sidebar from './components/sidebar/Sidebar';

function App() {


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <MainComp />
        </div>
      </div>
    </div>
  );
}

export default App;
