import React, { Component } from 'react';
import Header from '../../components/tracker-mod/header';
import NavBar from '../../components/tracker-mod/navbar';
import PastAccounts from '../../components/tracker-mod/past-accounts';
import CommonErrors from '../../components/tracker-mod/common-errors';
import TierProgress from '../../components/tracker-mod/tier-progress';
import TierSelection from '../../components/tracker-mod/tier-selection';

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
              <PastAccounts />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <CommonErrors />
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <TierSelection />
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
