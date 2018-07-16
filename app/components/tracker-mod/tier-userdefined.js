import React, { Component } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Form,
  FormGroup
} from 'reactstrap';

export default class tierUserDefined extends Component {
  constructor(props) {
    super(props);

    this.state = { value: null };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">$</InputGroupAddon>
              <Input
                placeholder="I want to reach..."
                type="number"
                step="1"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
            <Input type="submit" value="Submit" />
          </FormGroup>
        </Form>
      </div>
    );
  }
}
