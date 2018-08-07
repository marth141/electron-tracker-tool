// @flow
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Progress, Table } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import DesignTypeSelection from './designTypeSelectorComponent';
import TemplateSelection from './templateSelectorComponent';
import ServiceNumberEntry from './serviceNumberEntryComponent';
import TimerButtons from './timerButtonsComponent';

@inject(root => ({
  tracker: root.trackerStore,
  timerStore: root.timerStore
}))
@observer
class AccountInput extends Component<*> {
  render() {
    const {
      tracker: {
        accountRecord,
        designerPoints,
        pointsToEarn,
        pointsTotalToEarn
      },
      timerStore: { mainDisplay }
    } = this.props;
    const tableData = accountRecord.map((record, index) => {
      return (
        <tr key={index}>
          <td>{record.serviceNumber}</td>
          <td>{record.duration}</td>
        </tr>
      );
    });
    return (
      <div>
        <AvForm>
          <DesignTypeSelection />
          <br />
          <TemplateSelection />
          <br />
          <ServiceNumberEntry />
          <br />
          <TimerButtons />
          <br />
          <h1>Current Points: {designerPoints}</h1>
          <h1>To Earn: {pointsToEarn}</h1>
          <Progress value={pointsTotalToEarn} max={400} />
        </AvForm>
        <br />
        <div align="center">
          <h1>{mainDisplay}</h1>
        </div>
        <br />
        <Table dark>
          <thead>
            <tr>
              <th>Service Number</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </Table>
      </div>
    );
  }
}

export default AccountInput;
