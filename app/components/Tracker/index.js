// @flow
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Progress, Table } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import DesignTypeSelection from './designTypeSelectorComponent';
import TemplateSelection from './templateSelectorComponent';
import ServiceNumberEntry from './serviceNumberEntryComponent';
import TimerButtons from './timerButtonsComponent';
import ResetPointsButton from './pointsResetComponent';
import ResetAccountsTable from './tableResetComponent';
import CreateDesignDirButton from './templateGetComponent';
import SetTemplateButton from './templateSetDirectoryComponent';
import WorkdayTimeEntry from './workdayTimeEntryComponent';

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
        pointsTotalToEarn,
        workdayEfficiency,
        stopwatchEfficiency
      },
      timerStore: { mainDisplay }
    } = this.props;
    const tableData = accountRecord.map(record => (
      <tr key={record.id}>
        <td>{record.serviceNumber}</td>
        <td>{record.duration}</td>
      </tr>
    ));
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
        </AvForm>
        <br />
        <SetTemplateButton />
        <CreateDesignDirButton />
        <br />
        <AvForm>
          <WorkdayTimeEntry />
        </AvForm>
        <p>Workday Efficiency: {workdayEfficiency}</p>
        <p>Stopwatch Efficiency: {stopwatchEfficiency}</p>
        <br />
        <h1>Current Points: {designerPoints}</h1>
        <h1>To Earn: {pointsToEarn}</h1>
        <Progress value={pointsTotalToEarn} max={400} />
        <br />
        <div align="center">
          <h1>{mainDisplay}</h1>
        </div>
        <br />
        <ResetPointsButton />
        <ResetAccountsTable />
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
