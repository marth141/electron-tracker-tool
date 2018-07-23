import React, { Component } from 'react';
import { Form, FormGroup, Label } from 'reactstrap';

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
            <Label color="white">Service Number</Label>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
