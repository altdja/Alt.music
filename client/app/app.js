import angular from 'angular';
import ngRoute from 'angular-route';

import Home from './modules/home/index.js';

angular.module('app', [
  'ngRoute'
])
.component('app', Home)
