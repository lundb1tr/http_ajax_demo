import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
/* Potentially manipulate responses before they are processed */
axios.interceptors.request.use(
  config => {
    console.log(config);
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
/* Potentially manipulate responses before they are processed */
axios.interceptors.response.use(
  config => {
    console.log(config);
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
