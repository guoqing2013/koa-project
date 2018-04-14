import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Root from './root'
const store = configureStore();

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('app')
);
ReactDOM.render(<Root  />, document.getElementById('app'))