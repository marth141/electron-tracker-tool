import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class tierSelection extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div>
        <p style={{ color: "#FFFFFF" }}>Bonus Goal</p>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            I want to reach...
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Bonus Tier</DropdownItem>
            <DropdownItem>Bonus 1</DropdownItem>
            <DropdownItem>Bonus 2</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}