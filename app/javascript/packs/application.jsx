import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui/dist/semantic.min.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>,
    document.body.appendChild(document.createElement('div')),
  )
})
