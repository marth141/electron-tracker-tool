import React, { Component } from 'react';
import {} from 'react-router-dom';
import {} from 'reactstrap';
import styles from './navbar.css';

export default class navbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div
        className={styles.trackerNavbarDrag}
        style={{ height: '30px', backgroundColor: '#1A1F24' }}
      />
    );
  }
}
