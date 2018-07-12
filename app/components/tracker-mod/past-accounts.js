import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

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
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Past Accounts</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <ul>
                <li>S-1234567</li>
              </ul>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}