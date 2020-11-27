import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
import App2 from './App2';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <App2 />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

