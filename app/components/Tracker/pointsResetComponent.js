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
export default class ResetPointsButton extends Component<*> {
  render() {
    const {
      tracker: { resetDesignerPoints }
    } = this.props;
    return (
      <div>
        <Button onClick={resetDesignerPoints}>Reset Points</Button>
      </div>
    );
  }
}
