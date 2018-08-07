import { observable, action, computed } from 'mobx';
import moment from 'moment';
import 'moment-duration-format';

export default class TrackerStore {
  @observable
  designerPoints; // Designer's total points

  @observable
  serviceNumber; // Designer's service number

  @observable
  designType; // Designer's design type

  @observable
  templateType; // Designer's template

  @observable
  accountRecord; // Designer's accounts

  constructor() {
    this.designerPoints = 0;
    this.serviceNumber = undefined;
    this.designType = 'None';
    this.templateType = 'None';
    this.accountRecord = [
      {
        serviceNumber: '1234567',
        duration: 'Date'
      }
    ];
  }

  accountToAdd = {
    // Account to be added to ledger
    serviceNumber: '',
    duration: ''
  };

  points = {
    // The worth of points for designs.
    None: 0,
    'Full Design': 105,
    Redesign: 60,
    'PV Design & Pre-Design': 85,
    'PV Design & Structural': 95,
    'PV Design': 75
  };

  // Shows designer's points + to be earned points based on design type
  @computed
  get pointsTotalToEarn() {
    for (var category in this.points) {
      if (this.designType === category) {
        return this.designerPoints + this.points[category];
      }
    }
  }

  // Displays the points that the selected design type yields
  @computed
  get pointsToEarn() {
    for (var pointCategory in this.points) {
      if (this.designType === pointCategory) {
        return this.points[pointCategory];
      }
    }
  }

  @action.bound
  onInvalid = e => {
    console.log(e.target);
  };

  // Changes the state for the service number when it's typed
  @action.bound
  onServiceChange = e => {
    this.serviceNumber = e.target.value;
  };

  // Changes the state for design type when selection is changed
  @action.bound
  onDesignTypeChange = e => {
    this.designType = e.target.value;
  };

  // Changes the state for template when the selection is changed
  @action.bound
  onTemplateTypeChange = e => {
    this.templateType = e.target.value;
  };

  // Sets the service number in the account to add record
  @action.bound
  onStartAccount = () => {
    this.accountToAdd.serviceNumber = this.serviceNumber;
  };

  // Will end the account's timer and record the duration in ledger
  @action.bound
  onEndAccount = timerTime => {
    this.accountToAdd.duration = moment
      .duration(timerTime)
      .format('hh:mm:ss', { trim: false }); // Set's account's duration
    this.accountRecord.push(this.accountToAdd); // Pushes the account to add to account record
    this.designerPoints += this.pointsToEarn; // Adds points to designer's point total
    this.serviceNumber = ''; // Resets the service number DOM
    this.designType = 'None'; // Resets the design type DOM
  };
}
