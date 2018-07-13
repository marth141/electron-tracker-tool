import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Table } from 'reactstrap';

export default class commonErrors extends Component {
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
        <Button color="danger" onClick={this.toggle} block style={{ marginBottom: '1rem' }}>Errors</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card style={{ backgroundColor: "#4F575E" }}>
            <CardBody style={{ overflowY: "scroll", maxHeight: "300px" }}>
              <Table dark>
                <thead>
                  <tr>
                    <th>Account</th>
                    <th>Error</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>S-1234567</td>
                    <td>Setbacks</td>
                  </tr>
                  <tr>
                    <td>S-1234567</td>
                    <td>Setbacks</td>
                  </tr>
                  <tr>
                    <td>S-1234567</td>
                    <td>Setbacks</td>
                  </tr>
                  <tr>
                    <td>S-1234567</td>
                    <td>Setbacks</td>
                  </tr>
                  <tr>
                    <td>S-1234567</td>
                    <td>Setbacks</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}