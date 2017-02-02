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
    // this.init();
  }

  init() {
    var myVar = setInterval(myTimer, 1000);
    var oldTime = "";

    function myTimer() {
      if ((this.audio.paused != true && (this.audio.currentTime - oldTime) == 0 )) {
        this.audio.src = "";
        this.audio.src = src;
        this.audio.play();
        }
        oldTime = audio.currentTime;
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
        });
      this.played = true;
    } else {
      audio.pause();
      this.played = false;      
    }
  }
}
