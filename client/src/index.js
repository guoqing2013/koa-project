import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './setting/ajax'

const store = configureStore();

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('app')
);

registerServiceWorker();
