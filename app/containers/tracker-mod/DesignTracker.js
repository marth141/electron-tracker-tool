import React, { Component } from 'react';
import Header from '../../components/tracker-mod/header';
import NavBar from '../../components/tracker-mod/navbar';
import TierProgress from '../../components/tracker-mod/tier-progress';
import TierUserDefined from '../../components/tracker-mod/tier-userdefined';

export default class designTracker extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <TierUserDefined />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <TierProgress />
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
