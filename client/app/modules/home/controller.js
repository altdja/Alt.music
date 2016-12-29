import './styles.css';
import moment from 'moment';
import axios from 'axios';

export default class HomepageController {
  constructor($scope, $state, ngAudio) {
    this.scope = $scope;
    this.state = $state;
    this.moment = moment;
    this.ngAudio = ngAudio;
    this.axios = axios;
    this.tracklist = [
      "./tracks/Static Cycle -I'll Take You Back.mp3",
      "./tracks/Digital Summer - Breaking Point.mp3"
    ];
    this.load();
  }

  load() {
    axios.get('http://localhost:8081/tracklist')
      .then(data => {
        console.log(data);
      })
  }

  play() {
    this.sound = this.ngAudio.load(this.tracklist[0]);
    this.play = false;
    if (!this.play) {
      this.sound.play();
      this.play = true;
    } else {
      this.sound.pause();
      this.play = false;
    }
  }
}
