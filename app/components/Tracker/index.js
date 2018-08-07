// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { DesignTypeSelection } from './designTypeSelectorComponent';
import { TemplateSelection } from './templateSelectorComponent';
import { ServiceNumberEntry } from './serviceNumberEntryComponent';
import { TimerButtons } from './timerButtonsComponent';
import { Progress, Table } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

@inject(root => ({
  tracker: root.trackerStore,
  timerStore: root.timerStore
}))
@observer
class AccountInput extends Component<*> {
  render() {
    const {
      accountRecord,
      designerPoints,
      pointsToEarn,
      pointsTotalToEarn
    } = this.props.tracker;
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
          <h1>Current Points: {designerPoints}</h1>
          <h1>To Earn: {pointsToEarn}</h1>
          <Progress value={pointsTotalToEarn} max={400} />
        </AvForm>
        <br />
        <TimerButtons />
        <br />
        <div align="center">
          <h1>{this.props.timerStore.mainDisplay}</h1>
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
