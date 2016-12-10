'use strict';

const app = angular.module('app', []);

app.controller('appController', function appController($scope, $window) {
  fs.readFile('/etc/passwd', function (err, data ) {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
});
