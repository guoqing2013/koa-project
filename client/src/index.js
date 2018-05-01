import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './components/common'
import registerServiceWorker from './registerServiceWorker';

import 'zent/css/index.css'; 
import './index.css';

import './global';
import Routes from './routes';

const mountNode = document.getElementById('app-container');
ReactDOM.render(
    <div className="page">
        <Container>
            <Routes />
        </Container>
    </div>,
 mountNode);
registerServiceWorker();
