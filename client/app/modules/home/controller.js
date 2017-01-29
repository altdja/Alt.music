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
    this.output =  new Audio();
    document.body.appendChild(this.output);
  }
  
  play() {
    if (!this.played) {
      this.output.src = src;
      this.output.play()
        .then(() => {
          console.log('!!!');
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
