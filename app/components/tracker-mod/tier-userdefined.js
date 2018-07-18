import React, { Component } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Form,
  FormGroup,
  Progress
} from 'reactstrap';

export default class tierUserDefined extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <div>
          <Form>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input
                  placeholder="I want to reach..."
                  type="number"
                  step="1"
                  onChange={this.handleChange}
                />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
              </InputGroup>
              <Input type="submit" value="Submit" />
            </FormGroup>
          </Form>
        </div>
        <div>
          <p style={{ color: '#FFFFFF' }}>Bonus Progress</p>
          <div className="text-center text-white">0%</div>
          <Progress />
          <div className="text-center text-white">25%</div>
          <Progress value="25" />
          <div className="text-center text-white">50%</div>
          <Progress value={50} />
          <div className="text-center text-white">75%</div>
          <Progress value={75} />
          <div className="text-center text-white">100%</div>
          <Progress value="100" />
          <div className="text-center text-white">Multiple bars</div>
          <Progress multi>
            <Progress bar value="15" />
            <Progress bar color="success" value="30" />
            <Progress bar color="info" value="25" />
            <Progress bar color="warning" value="20" />
            <Progress bar color="danger" value="5" />
          </Progress>
        </div>
      </div>
    );
  }
}
