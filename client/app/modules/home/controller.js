'use strict';

import './styles.css';
// import moment from 'moment';
// import axios from 'axios';
import $ from 'jquery';

const src = 'http://91.240.87.220:8000/stream.mp3';

export default class HomepageController {
  constructor($scope, $state) {
    this.scope = $scope;
    this.state = $state;
    this.played = false;
    this.loader = false;
    this.output =  new Audio();
    document.body.appendChild(this.output);
    this.volume = 50;
  }

  changeVolume(val) {
    this.output.volume = val / 100;
  }
  
  play() {
    if (!this.played) {
      this.loader = true;      
      this.output.src = src;
      this.output.play()
        .then(() => {
          this.loader = false;
          this.scope.$apply();
        });
      this.played = true;
    } else {
      $.each($('audio'), function () {
        this.pause();
      });
      this.played = false;      
    }
  }
}
