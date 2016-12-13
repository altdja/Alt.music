import angular from 'angular';

import ApiSrv from = '../../services/api.srv';
import routing from './routes';
import MainpageController from './controller';

export default angular.module('app.Mainpage', [ApiService])
  .config(routing)
  .component('mainpage', {
    tempalate: require('./mainpage.html'),
    controller: ['$scope', '$state', 'api', MainpageController],
    controllerAs: '$ctrl'
  })
