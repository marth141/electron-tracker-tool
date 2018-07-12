import React, { Component } from 'react';
import NavBar from './navbar';
import PastAccounts from './past-accounts';
import CommonErrors from './common-errors';
import TierProgress from './tier-progress';
import TierSelection from './tier-selection';

export default class designTracker extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <PastAccounts />
          <CommonErrors />
        </div>
        <div>
          <TierSelection />
        </div>
        <div>
          <TierProgress />
        </div>
      </div>
    );
  }
}