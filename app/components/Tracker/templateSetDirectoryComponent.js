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
export default class SetTemplateButton extends Component<*> {
  render() {
    const {
      tracker: { setTemplateFolder }
    } = this.props;
    return (
      <div>
        <Button onClick={setTemplateFolder}>Set Templates Folder</Button>
      </div>
    );
  }
}
