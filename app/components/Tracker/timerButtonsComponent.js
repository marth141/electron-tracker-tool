// @flow
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'reactstrap';

@inject(root => ({
  timerStore: root.timerStore,
  timerTime: root.timerStore.timer.totalMilliSeconds,
  tracker: root.trackerStore
}))
@observer
export default class TimerButtons extends Component<*> {
  render() {
    const {
      timerStore,
      tracker: {
        serviceNumber,
        designType,
        onStartAccount,
        onEndAccount,
        accountToAdd
      },
      timerTime
    } = this.props;
    return (
      <div>
        <Button
          block
          onClick={() => {
            if (designType.match(/None/)) {
              alert('Please select a design type for points!');
            } else if (serviceNumber.length < 7 || serviceNumber.match(/^$/)) {
              alert('Service number must be 7 digits!');
            } else {
              timerStore.startTimer();
              onStartAccount();
            }
          }}
        >
          Start
        </Button>
        <Button
          block
          onClick={() => {
            timerStore.stopTimer();
          }}
        >
          Pause
        </Button>
        <Button
          block
          onClick={() => {
            if (accountToAdd.serviceNumber.match(/^$/)) {
              alert('No account ready to add!');
            } else {
              timerStore.stopTimer();
              timerStore.resetTimer();
              onEndAccount(timerTime);
            }
          }}
        >
          End
        </Button>
      </div>
    );
  }
}
