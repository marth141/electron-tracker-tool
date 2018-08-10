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
export default class ResetAccountsTable extends Component<*> {
  render() {
    const {
      tracker: { resetAccountsRecord }
    } = this.props;
    return (
      <div>
        <Button onClick={resetAccountsRecord}>Reset Table</Button>
      </div>
    );
  }
}
