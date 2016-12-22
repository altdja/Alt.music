import angular from 'angular';
import routing from './app.config';

angular.module('app', []).config(routing).run(['$rootScope', '$state', '$stateParams', (scope, $state, $stateParams) => {
  scope.$state = $state;
  scope.$stateParams = $stateParams;
}])
