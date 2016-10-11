(function () {
  angualar.module('EventRegisterationApp')

  .controller('EventController', function ($scope, EventsResourceService) {
    $scope.message = 'Event Page'
    $scope.getEvent = getEvent(event.id)
  })


})();
