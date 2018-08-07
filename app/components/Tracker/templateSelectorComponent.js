// @flow
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { FormGroup, Input, Label } from 'reactstrap';

@inject(root => ({
  tracker: root.trackerStore
}))
@observer
export default class TemplateSelection extends Component<*> {
  render() {
    const {
      tracker: { onTemplateTypeChange }
    } = this.props;
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
