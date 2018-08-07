// @flow
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Label, FormGroup } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';

@inject(root => ({
  tracker: root.trackerStore
}))
@observer
export default class ServiceNumberEntry extends Component<*> {
  render() {
    const {
      tracker: { serviceNumber, onServiceChange }
    } = this.props;
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
