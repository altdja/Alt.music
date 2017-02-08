'use strict';

import './styles.css';
import $ from 'jquery';
import axios from 'axios';

const src = 'http://91.240.87.220:8000/stream';

const context = new window.AudioContext();
let buffer, source, destination; 

export default class HomepageController {
  constructor($scope, $state) {
    this.scope = $scope;
    this.state = $state;
    this.played = false;
    this.loader = false;
    // this.output =  new Audio();
    // this.audio = $('#audio')[0];
    // this.volume = 70;
    this.getAudio();
  }

  getAudio() {
    var loadSoundFile = function(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'arraybuffer';
      xhr.onload = function(e) {
        context.decodeAudioData(this.response,
        function(decodedArrayBuffer) {
          buffer = decodedArrayBuffer;
          source = context.createBufferSource();
          source.buffer = buffer;
          destination = context.destination;
          source.connect(destination);
          source.start(0);
        }, function(e) {
          console.log('Error decoding file', e);
        });
      };
      xhr.send();
    }

    loadSoundFile(src);  
  }
  
  // play() {
  //   if (!this.played) {
  //     this.loader = true;      
  //     this.getAudio()
  //     this.played = true;
  //   } else {
  //     this.audio.pause();
  //     this.played = false;      
  //   }
  // }
}
