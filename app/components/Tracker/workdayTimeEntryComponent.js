// @flow
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Label, FormGroup } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';

@inject(root => ({
  tracker: root.trackerStore
}))
@observer
export default class WorkdayTimeEntry extends Component<*> {
  render() {
    const {
      tracker: { workdayTime, onWorkdayTimeChange }
    } = this.props;
    return (
      <div>
        <FormGroup>
          <Label>Enter Workday Hours</Label>
          <br />
          <AvField
            name="workdayTimeField"
            type="text"
            pattern="[\d]"
            placeholder="Enter Workday Time"
            maxLength="2"
            minLength="1"
            value={workdayTime}
            onChange={onWorkdayTimeChange}
          />
        </FormGroup>
      </div>
    );
  }
}
