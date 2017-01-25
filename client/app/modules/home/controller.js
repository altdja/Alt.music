'use strict';

import './styles.css';
// import moment from 'moment';
// import axios from 'axios';
import $ from 'jquery';

export default class HomepageController {
  constructor($scope, $state) {
    this.scope = $scope;
    this.state = $state;
    this.moment = moment;
    // this.audio = new window.AudioContext();
  }
}
