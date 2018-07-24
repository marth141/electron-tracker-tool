import React, { Component } from 'react';
import {} from 'react-router-dom';
import {} from 'reactstrap';
import styles from './navbar.css';

export default class header extends Component {
  render() {
    return (
      <div
        className={styles.trackerNavbarDrag}
        style={{ height: '30px', backgroundColor: '#1A1F24' }}
      />
    );
  }
}
