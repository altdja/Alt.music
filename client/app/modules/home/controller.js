'use strict';

import './styles.css';
import $ from 'jquery';

const src = 'http://91.240.87.220:8000/stream.mp3';

export default class HomepageController {
  constructor($scope, $state) {
    this.scope = $scope;
    this.state = $state;
    this.played = false;
    this.loader = false;
    this.output =  new Audio();
    this.audio = $('#audio')[0];
    this.volume = 70;
  }

  init() {
    const myVar = setInterval(myTimer, 1000);
    function myTimer() {
      if (this.audio.ended === true) {
          this.audio.src = "";
          this.audio.src = src;
          this.audio.play();
        }
    };
    return true;
  }

  changeVolume(val) {
    this.audio.volume = val / 100;
  }
  
  play() {
    if (!this.played) {
      this.loader = true;      
      this.audio.play()
        .then(() => {
          this.loader = false;
          this.scope.$apply();
          this.init();
        });
      this.played = true;
    } else {
      this.audio.pause();
      this.played = false;      
    }
  }
}
