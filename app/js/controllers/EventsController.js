(function () {
  "use strict"

  angular.module("EventRegisterationApp")

  .controller("EventsController", function ($scope, EventsData, $log, EventsResourceService) {
    $scope.message = "This is the Events Controller.";

    // Set default option for sort criteria drop-down list
    $scope.sortOrder = 'price';


    EventsResourceService.getAllEvents().$promise.then(
      function (response) {
      console.log(response)
      $scope.events = response
    },
      function (error) {
        if (error) {
          $log.warn(error);
        }
      }
    )
    var handleResponse = function (response) {
      // console.log(response);
      // $scope.events = response.data
    }

    // var handleError = function (err) {
    //   $log.error(err);
    // }

    // Acess events collection from custom EventsData service
    // EventsData.getEvents().then(handleResponse, handleError)

   // Access single event resource
  //  EventsData.getEvent().then(
  //    function (respone) {
  //      $scope.event = response.data
  //    },
  //    function (error) {
  //      $log.warn(error)
  //    }
  //   )

    $scope.upVote = function (session) {
      session.voteCount += 1;
    }

    $scope.downVote = function (session) {
      session.voteCount -= 1;
    }


    $scope.counter = 0

    $scope.change = function () {
      $scope.counter++;
    }
  })
})();
