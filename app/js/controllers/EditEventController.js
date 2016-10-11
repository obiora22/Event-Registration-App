(function () {
  'use strict'
  angular.module('EventRegisterationApp')

  .controller('EditEventController',['$scope', function ($scope) {

    function Event (name, level, date, price, location_city, location_state) {
      this.name = name;
      this.level = level;
      this.date = date;
      this.price = price;
      this.location = {};
      this.location.city = location_city;
      this.location.state = location_state;
    }

    $scope.events = []
    $scope.message = 'Welcome to form scope.'
    $scope.regex = '\\w+|\s';
    $scope.date_regex = '\\d{2}\/\\d{2}\/\\d{4}'
    $scope.numeric_regex = '\\d+\.\\d{2}'
    $scope.createEvent = function () {
      $scope.events.push(new Event($scope.name, $scope.level, $scope.date, $scope.price, $scope.city, $scope.state))
      console.log($scope.events)
    }
    $scope.cancelEventCreation = function () {
      window.location = "/index.html"
    }
  }])
})();
