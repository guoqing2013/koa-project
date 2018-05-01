
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'zent';
import cx from 'classnames';



import './index.css';

export const PageBlock = ({ children, className }) => (
  <div className={cx('page-block', className)}>{children}</div>
)

PageBlock.propTypes = {
  children: PropTypes.node
}

export default PageBlock;

export const Header = ({ children }) => (
  <PageBlock className="header" children={children} />
)

export const Content = ({ children }) => (
  <PageBlock className="content" children={children} />
)

export const Page = ({ children }) => (
  <div className="page">{children}</div>
)

export const Summary = ({ children }) => (
  <div className="summary">{children}</div>
)

export const FooterAction = ({ children, sticky, className }) => (
  <div className={cx('footer__action', className, {"footer__action--sticky": sticky})}>{children}</div>
)

export const BlockHeader = ({ title, className }) => (
  <div className={cx('block-header', className)}>{title}</div>
)

export class Container extends Component {
  state = {
    loading: false
  }
  childContextTypes = {
    showLoading: PropTypes.func,
    hideLoading: PropTypes.func,
  }
  showLoading = () => {
    this.setState({
      loading: true
    });
  }
  hideLoading = () => {
    this.setState({
      loading: false
    });
  }
  getChildContext() {
    return {
      showLoading: this.showLoading,
      hideLoading: this.hideLoading
    }
  }
  render() {
    const { loading } = this.state;
    const { children, className } = this.props;

    return (
      <Loading show={loading} className="container-loading">
        <div className="container">{children}</div>
      </Loading>
    )
  }
}

Container.childContextTypes = {
  showLoading: PropTypes.func,
  hideLoading: PropTypes.func
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}
