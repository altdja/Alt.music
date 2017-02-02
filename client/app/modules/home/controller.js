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
    document.body.appendChild(this.output);
    this.output.id = 'audio';
    this.volume = 50;
    this.stopPlayingFix()
  }

  stopPlayingFix() {
    const audio = $('#audio')[0];
    audio.onended = audio.onerror = function()
    {
        audio.src = audio.currentSrc;
        audio.play();
    };
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
