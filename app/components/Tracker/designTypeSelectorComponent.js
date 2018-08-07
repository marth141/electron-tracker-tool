// @flow
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { FormGroup, Input, Label } from 'reactstrap';

@inject(root => ({
  tracker: root.trackerStore
}))
@observer
export default class DesignTypeSelection extends Component<*> {
  render() {
    const { designType, onDesignTypeChange } = this.props.tracker;
    return (
      <div>
        <FormGroup>
          <Label>Design Type</Label>
          <br />
          <Input type="select" value={designType} onChange={onDesignTypeChange}>
            <option>None</option>
            <option>Full Design</option>
            <option>Redesign</option>
            <option>PV Design & Pre-Design</option>
            <option>PV Design & Structural</option>
            <option>PV Design</option>
          </Input>
        </FormGroup>
      </div>
    );
  }
}
