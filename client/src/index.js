import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './common/axios-setting';

import './index.css';
import 'zent/css/index.css'; 

import './global';
import Routes from './routes';

const mountNode = document.getElementById('app-container');
ReactDOM.render(<Routes />, mountNode);
registerServiceWorker();
