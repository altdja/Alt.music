'use strict';

import './styles.css';
import $ from 'jquery';
import io from 'socket.io-client';

const socket = io('http://localhost:8081/');

let name = '';
socket.on('track', function(msg) {
  if (name !== msg) {
    name = msg;
    $('#name').text(name);
  }
});

const src = 'http://91.240.87.220:8000/stream.ogg';

export default class HomepageController {
  constructor($scope, $state) {
    this.scope = $scope;
    this.state = $state;
    this.played = false;
    this.loader = false;
    this.output =  new Audio();
    this.audio = $('#audio')[0];
    this.getVolume();
    this.init();
  }

  init() {
    const bg = $('.container');
    const min = 1;
    const max = 11;
    const i = Math.floor(Math.random() * (max - min + 1)) + min;
    bg.css('background-image', `url(/img/bg/${i}.jpg)`);   
  }

  getVolume() {
    const volume = this.getCookie("volume");
    if (volume) {
      this.volume = JSON.parse(volume);
      this.audio.volume = volume / 100;
    } else {
      this.volume = 70;
      this.setCookie(this.volume);
    }
  }

  getCookie(name) {
    var name = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }

  setCookie(value) {
    const d = new Date();
    d.setTime(d.getTime() + (15 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = "volume=" + value + ";" + expires + ";path=/";
  }

  stopFix() {
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
    this.setCookie(val);
  }
  
  play() {
    if (!this.played) {
      this.loader = true;      
      this.audio.play()
        .then(() => {
          this.loader = false;
          this.scope.$apply();
          this.stopFix();
        });
      this.played = true;
    } else {
      this.audio.pause();
      this.played = false;      
    }
  }
}
