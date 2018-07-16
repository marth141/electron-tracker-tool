import React, { Component } from 'react';
import styles from './navbar.css';

export default class navbar extends Component {
  render() {
    return (
      <div
        className={styles.trackerNavbarDrag}
        style={{ height: '30px', backgroundColor: '#1A1F24' }}
      />
    );
  }
}
