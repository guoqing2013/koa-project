import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.css'
const Header = ({ title }) => {
    return (
        // <div className={styles.header}>
        <div className="header">
            <div>
                <a href="//www.youzan.com">
                    <div className="header-logo"></div>
                </a>
                <div className="header-title">{title}</div>
            </div>
        </div>
    )
}

Header.propTypes  = {
    title: PropTypes.string
}

export default Header