/**
*
* Header
*
*/

import React from 'react';

import styles from './styles.css';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>Hello</h1>
        <h2>small text</h2>
        <h3>Found any change</h3>
      </div>
    );
  }
}

export default Header;
