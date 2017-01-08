'use strict';

import './styles.css';
import moment from 'moment';
import axios from 'axios';
import $ from 'jquery';

const audio = new window.AudioContext();
let buffer, source, destination;

export default class HomepageController {
  constructor($scope, $state) {
    this.scope = $scope;
    this.state = $state;
    this.moment = moment;
    this.axios = axios;
    this.play = false;
  }

  stream() {
    if (this.play) {
      this.play = false;
      source.stop(0);
    } else {
      this.play = true;
      axios.get('http://localhost:8081/audio/track.mp3', { responseType: 'arraybuffer' })
        .then(data => {
          audio.decodeAudioData(data.data)
            .then(decodeAudioData => {
              buffer = decodeAudioData;
              source = audio.createBufferSource();
              source.buffer = buffer;
              destination = audio.destination;
              source.connect(destination);
              source.start(0);
            });
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
}
