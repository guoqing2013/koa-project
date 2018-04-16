import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import '../../config/ajax'
import Root from './root'
const store = configureStore();

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('app')
);
ReactDOM.render(<Root  />, document.getElementById('app'))