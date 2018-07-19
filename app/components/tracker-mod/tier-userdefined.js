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
    this.state = {
      goal: null,
      nintyTierProgress: null,
      nintyFiveTierProgress: null,
      test: null
    }
  }

  setGoal = event => {
    this.setState({
      goal: (event.target.value)
    });
  }

  setDesignsNinty = event => {
    const nintyTier = 4;
    let designsCompletedNinty = (event.target.value);

    if (designsCompletedNinty <= 0) {
      designsCompletedNinty = 0;
      this.setState({
        nintyTierProgress: nintyTier * designsCompletedNinty
      })
    } else {
      this.setState({
        nintyTierProgress: nintyTier * designsCompletedNinty
      })
    }
  }

  setDesignsNintyFive = event => {
    const nintyFiveTier = 7;
    let designsCompletedNintyFive = (event.target.value);

    if (designsCompletedNintyFive <= 0) {
      designsCompletedNintyFive = 0;
      this.setState({
        nintyFiveTierProgress: nintyFiveTier * designsCompletedNintyFive
      })
    } else {
      this.setState({
        nintyFiveTierProgress: nintyFiveTier * designsCompletedNintyFive
      })
    }
  }

  handleChange = event => {
    this.setState({
      test: (event.target.value)
    })
  };

  render() {
    return (
      <div>
        <div>
          <Form>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">My Bonus goal is.....</InputGroupAddon>
                <Input
                  type="number"
                  step="1"
                  onChange={this.setGoal}
                />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Designs in 90% Tier</InputGroupAddon>
                <Input
                  type="number"
                  step="1"
                  onChange={this.setDesignsNinty}
                />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Designs in 95% Tier</InputGroupAddon>
                <Input
                  type="number"
                  step="1"
                  onChange={this.setDesignsNintyFive}
                />
              </InputGroup>
            </FormGroup>
          </Form>
        </div>
        <div>
          <p style={{ color: '#FFFFFF' }}>Bonus Progress</p>
          <div className="text-center text-white">90% Tier Progress</div>
          <Progress
            value={this.state.nintyTierProgress}
            max={this.state.goal}
          />
          <div className="text-center text-white">95% Tier Progress</div>
          <Progress
            value={this.state.nintyFiveTierProgress}
            max={this.state.goal}
          />
          <div className="text-center text-white">Combined</div>
          <Progress multi>
            <Progress bar value={this.state.nintyTierProgress} max={this.state.goal} />
            <Progress bar color="success" value={this.state.nintyFiveTierProgress} max={this.state.goal} />
          </Progress>
        </div>
      </div>
    );
  }
}
