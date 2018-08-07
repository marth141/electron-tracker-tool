// @flow
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Label, Input, FormGroup } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';

@inject(root => ({
  tracker: root.trackerStore
}))
@observer
export class ServiceNumberEntry extends Component<*> {
  render() {
    const { serviceNumber, onServiceChange } = this.props.tracker;
    return (
      <div>
        <FormGroup>
          <Label>Service Number</Label>
          <br />
          <AvField
            name="serviceNumberField"
            type="text"
            pattern="^[0-9]{7}"
            placeholder="Enter Service Number"
            maxLength="7"
            value={serviceNumber}
            onChange={onServiceChange}
          />
        </FormGroup>
      </div>
    );
  }
}
