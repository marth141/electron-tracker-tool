import { observable, action, computed } from 'mobx';
import { persist } from 'mobx-persist';
import swal from 'sweetalert';
import moment from 'moment';
import 'moment-duration-format';

const electron = require('electron');

const { dialog } = electron.remote;

const fs = require('fs');
// const path = require('path');

export default class TrackerStore {
  @persist('object')
  @observable
  designerPoints; // Designer's total points

  @persist('object')
  @observable
  templateFolder;

  @observable
  serviceNumber; // Designer's service number

  @observable
  designType; // Designer's design type

  @observable
  templateType; // Designer's template

  @persist('object')
  @observable
  accountRecord = [
    // {
    //   serviceNumber: '1234567',
    //   duration: '01:05:00'
    // }
  ];

  constructor() {
    this.designerPoints = 0;
    this.serviceNumber = '';
    this.designType = 'None';
    this.templateType = 'None';
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
    let category;
    for (category in this.points) {
      if (this.designType === category) {
        return this.designerPoints + this.points[category];
      }
    }
  }

  // Displays the points that the selected design type yields
  @computed
  get pointsToEarn() {
    let pointCategory;
    for (pointCategory in this.points) {
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

  @action.bound
  resetDesignerPoints = () => {
    const oldPoints = this.designerPoints;
    swal({
      title: 'Are you sure?',
      text: 'Once reset, you will not be able to recover your points!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    })
      .then(willReset => {
        if (willReset) {
          swal('Your points have reset.', {
            icon: 'success'
          });
          this.designerPoints = 0;
        } else if (!willReset) {
          swal('Your points are safe.');
          return oldPoints;
        }
        return oldPoints;
      })
      .catch(error => {
        throw error;
      });
  };

  @action.bound
  resetAccountsRecord = () => {
    const oldRecord = this.accountRecord;
    swal({
      title: 'Are you sure?',
      text: 'Once reset, you will not be able to recover your account table!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    })
      .then(willReset => {
        if (willReset) {
          swal('Your account log has reset.', {
            icon: 'success'
          });
          this.accountRecord = [];
        } else if (!willReset) {
          swal('Your account log is safe.');
          return oldRecord;
        }
        return oldRecord;
      })
      .catch(error => {
        throw error;
      });
  };

  // Will end the account's timer and record the duration in ledger
  @action.bound
  onEndAccount = timerTime => {
    this.accountToAdd.duration = moment.duration(timerTime).format('hh:mm:ss', {
      trim: false
    }); // Set's account's duration
    this.accountRecord.push(this.accountToAdd); // Pushes the account to add to account record
    this.designerPoints += this.pointsToEarn; // Adds points to designer's point total
    this.serviceNumber = ''; // Resets the service number DOM
    this.designType = 'None'; // Resets the design type DOM
    this.accountToAdd = {
      serviceNumber: '',
      duration: ''
    };
  };

  @action.bound
  setTemplateFolder = () => {
    dialog.showOpenDialog(
      {
        title: 'Select a folder',
        properties: ['openDirectory']
      },
      folderPaths => {
        // folderPaths is an array that contains all the selected paths
        if (folderPaths === undefined) {
          console.log('No destination folder selected');
        } else {
          console.log(`${folderPaths}`);
          this.templateFolder = folderPaths;
        }
        // TODO: Copy templates to new service number folder.
      }
    );
  };

  @action.bound
  selectTemplateFolder = () => {
    dialog.showOpenDialog(
      {
        title: 'Select a folder',
        properties: ['openDirectory']
      },
      folderPaths => {
        // folderPaths is an array that contains all the selected paths
        if (folderPaths === undefined) {
          console.log('No destination folder selected');
        } else if (
          this.serviceNumber.length < 7 ||
          this.serviceNumber.match(/^$/) ||
          this.serviceNumber.match(/[a-zA-Z]/)
        ) {
          swal('Need a valid service number!');
        } else {
          console.log(`${folderPaths}/${this.serviceNumber}`);
          fs.mkdir(`${folderPaths}/${this.serviceNumber}`, error => {
            if (error) {
              console.log(error);
              swal("Directory wasn't made.");
            } else {
              swal('Directory created!');
            }
          });
          // TODO: Copy templates to new service number folder.
        }
      }
    );
  };
}
