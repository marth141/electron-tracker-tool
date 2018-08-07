// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Button } from 'reactstrap';

@inject(root => ({
  timerStore: root.timerStore,
  timerTime: root.timerStore.timer.totalMilliSeconds,
  tracker: root.trackerStore
}))
@observer
export class TimerButtons extends Component<*> {
  render() {
    return (
      <div>
        <Button
          block
          onClick={() => {
            this.props.timerStore.startTimer();
            this.props.tracker.onStartAccount();
          }}
        >
          Start
        </Button>
        <Button
          block
          onClick={() => {
            this.props.timerStore.stopTimer();
          }}
        >
          Pause
        </Button>
        <Button
          block
          onClick={() => {
            this.props.timerStore.stopTimer();
            this.props.timerStore.resetTimer();
            this.props.tracker.onEndAccount(this.props.timerTime);
          }}
        >
          End
        </Button>
      </div>
    );
  }
}
