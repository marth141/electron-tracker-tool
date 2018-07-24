import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class inputAccounts extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label style={{ color: '#FFFFFF' }}>Service Number</Label>
            <Input />
            <br />
            <Label style={{ color: '#FFFFFF' }}>Design Type</Label>
            <Input type="select" />
          </FormGroup>
        </Form>
      </div>
    );
  }
}
