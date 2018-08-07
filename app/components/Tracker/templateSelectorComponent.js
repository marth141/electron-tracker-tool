// @flow
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { FormGroup, Input, Label } from 'reactstrap';

@inject(root => ({
  tracker: root.trackerStore
}))
@observer
export class TemplateSelection extends Component<*> {
  render() {
    const { onTemplateTypeChange } = this.props.tracker;
    return (
      <div>
        <FormGroup>
          <Label>Template Needed</Label>
          <br />
          <Input type="select" onChange={onTemplateTypeChange}>
            <option>California</option>
          </Input>
        </FormGroup>
      </div>
    );
  }
}
