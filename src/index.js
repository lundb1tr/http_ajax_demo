import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

/* Potentially manipulate responses before they are processed */
axios.interceptors.request.use(
  config => {
    console.log('[Index.js]', config);
    return config;
  },
  error => {
    console.log('[Index.js]', error);
    return Promise.reject(error);
  }
);

/* Potentially manipulate responses before they are processed */
axios.interceptors.response.use(
  config => {
    console.log('[Index.js]', config);
    return config;
  },
  error => {
    console.log('[Index.js]', error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
