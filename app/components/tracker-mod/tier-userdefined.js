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

    this.state = {
      minimumDesigns: 0,
      designsCompleted: 0,
      goal: 0,
      nintyTierProgress: 0,
      nintyTierEarned: 0,
      nintyFiveTierProgress: 0,
      nintyFiveTierEarned: 0,
      netDesigns: 0
    };
  }

  setMinimumDesigns = event => {
    const nintyTier = 4;
    const nintyFiveTier = 7;
    if (event.target.name === 'Hours') {
      const minimumDesignsCalc = Math.round(event.target.value / 10 * 15);
      this.setState({
        minimumDesigns: minimumDesignsCalc,
        nintyTierProgress:
          (this.state.designsCompleted - minimumDesignsCalc) * nintyTier,
        nintyFiveTierProgress:
          (this.state.designsCompleted - minimumDesignsCalc) * nintyFiveTier
      });
    } else if (event.target.name === 'Completed') {
      const designsInput = event.target.value;
      const nintyTierCalc =
        (designsInput - this.state.minimumDesigns) * nintyTier;
      const nintyFiveTierCalc =
        (designsInput - this.state.minimumDesigns) * nintyFiveTier;
      if (designsInput >= this.state.minimumDesigns) {
        this.setState({
          nintyTierProgress: nintyTierCalc,
          nintyTierEarned: nintyTierCalc,
          nintyFiveTierProgress: nintyFiveTierCalc,
          nintyFiveTierEarned: nintyFiveTierCalc,
          netDesigns: designsInput - this.state.minimumDesigns,
          designsCompleted: designsInput
        });
      } else {
        this.setState({
          designsCompleted: designsInput
        });
      }
    } else if (event.target.name === 'Goal') {
      this.setState({
        goal: event.target.value
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <Form>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  Hours Worked
                </InputGroupAddon>
                <Input
                  name="Hours"
                  type="number"
                  step="1"
                  min="0"
                  placeholder="0"
                  onChange={this.setMinimumDesigns}
                />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  Designs Completed
                </InputGroupAddon>
                <Input
                  name="Completed"
                  type="number"
                  step="1"
                  min="0"
                  placeholder="0"
                  onChange={this.setMinimumDesigns}
                />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  My Bonus goal is
                </InputGroupAddon>
                <Input
                  name="Goal"
                  type="number"
                  step="1"
                  min="0"
                  placeholder="0"
                  onChange={this.setMinimumDesigns}
                />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
        </div>
        <div>
          <p style={{ color: '#FFFFFF' }}>
            Minimum Designs before Bonus: {this.state.minimumDesigns}
          </p>
          <div className="text-center text-white">To Bonus Progress</div>
          <Progress
            value={this.state.designsCompleted}
            max={this.state.minimumDesigns}
          />
          <div className="text-center text-white">
            Net Bonus Designs: {this.state.netDesigns}
          </div>
          <br />
          <br />
          <div className="text-center text-white">90% Tier Progress</div>
          <div className="text-center text-white">
            ${this.state.nintyTierEarned}
          </div>
          <Progress
            value={this.state.nintyTierProgress}
            max={this.state.goal}
          />
          <br />
          <div className="text-center text-white">95% Tier Progress</div>
          <div className="text-center text-white">
            ${this.state.nintyFiveTierEarned}
          </div>
          <Progress
            value={this.state.nintyFiveTierProgress}
            max={this.state.goal}
          />
        </div>
      </div>
    );
  }
}
