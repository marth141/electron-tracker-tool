import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  option,
  Collapse,
  Card,
  CardBody,
  Button
} from 'reactstrap';

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
        <Button
          color="primary"
          onClick={this.toggle}
          block
          style={{ marginBottom: '1rem' }}
        >
          Enter new account
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card style={{ backgroundColor: '#4F575E' }}>
            <CardBody style={{ overflowY: 'scroll', maxHeight: '300px' }}>
              <Form>
                <FormGroup>
                  <Label style={{ color: '#FFFFFF' }}>Service Number</Label>
                  <Input placeholder="Enter Service Number (e.g. 1234567)" />
                  <br />
                  <Label style={{ color: '#FFFFFF' }}>Design Type</Label>
                  <Input type="select">
                    <option>Select Design Type</option>
                    <option>CP Match</option>
                    <option>Full Design</option>
                    <option>PV Design & Pre-Design</option>
                    <option>PV Design & Structural</option>
                    <option>PV Design</option>
                    <option>Redesign</option>
                  </Input>
                  <br />
                  <Label style={{ color: '#FFFFFF' }}>Templates</Label>
                  <Input type="select">
                    <option>Select Template</option>
                    <option>APS</option>
                    <option>CA</option>
                    <option>General</option>
                    <option>NM</option>
                  </Input>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}
