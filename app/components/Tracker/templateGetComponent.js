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
export default class CreateDesignDirButton extends Component<*> {
  render() {
    const {
      tracker: { selectTemplateFolder }
    } = this.props;
    return (
      <div>
        <Button onClick={selectTemplateFolder}>Create Design Folder</Button>
      </div>
    );
  }
}
