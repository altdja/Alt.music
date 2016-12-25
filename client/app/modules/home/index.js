import angular from 'angular';
import ngAudio from 'angular-audio';

import routing from './routes';
import HomeController from './controller';

export default angular.module('app.Homepage', [ngAudio])
  .config(routing)
  .component('homepage', {
      template: require('./homepage.html'),
      controller: ['$scope', '$state', ngAudio, HomeController],
      controllerAs: '$ctrl'
  })
  .name;
