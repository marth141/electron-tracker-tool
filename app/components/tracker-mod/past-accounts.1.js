import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Table } from 'reactstrap';

export default class pastAccounts extends Component {
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
          color="success"
          onClick={this.toggle}
          block
          style={{ marginBottom: '1rem' }}
        >
          Accounts
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card style={{ backgroundColor: '#4F575E' }}>
            <CardBody style={{ overflowY: 'scroll', maxHeight: '300px' }}>
              <Table dark>
                <thead>
                  <tr>
                    <th>Account</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>S-1234567</td>
                    <td>1:04:00</td>
                  </tr>
                  <tr>
                    <td>S-1234567</td>
                    <td>1:04:00</td>
                  </tr>
                  <tr>
                    <td>S-1234567</td>
                    <td>1:04:00</td>
                  </tr>
                  <tr>
                    <td>S-1234567</td>
                    <td>1:04:00</td>
                  </tr>
                  <tr>
                    <td>S-1234567</td>
                    <td>1:04:00</td>
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
