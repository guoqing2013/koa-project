import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import './index.css';

const Root = ({ store }) => 
     (
      <Provider store={store}>
        <div className="container">
          <Header title="免费注册" />
          <Main />
          <Footer />
        </div>
      </Provider>
    );

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root;
