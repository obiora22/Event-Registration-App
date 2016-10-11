(function () {
  "use strict";
  var app = angular.module('EventRegisterationApp', ['ngSanitize', 'ngResource']);

  app.controller('MainCtrl',function ($scope) {
    $scope.message = "Welcome to a new Angular application!";

  })
})();
