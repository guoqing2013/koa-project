import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'zent/css/index.css'; // eslint-disable-line

import './global';
import Routes from './routes';

const mountNode = document.getElementById('app-container');
ReactDOM.render(<Routes />, mountNode);
registerServiceWorker();

