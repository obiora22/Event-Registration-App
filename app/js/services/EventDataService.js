(function () {
  'use strict';

  var eventsData = function ($http, $log) {
    function handleResponse (response) {
      console.log(response)
      return response;
    }

    function handleError (err) {
      $log.error(err);
    }

    function getEvents () {
      return $http({
        method: 'GET',
        url: '/data/events/events.json'
      }).then(handleResponse, handleError)
    }

    function getEventSuccess (response) {
      return response
    }

    function getEventError (error) {
      $log.warn(error)
    }
    function getEvent () {
      return $http({
        method: 'GET',
        url: '/data/events/'
      }).then(getEventSuccess, getEventError)
    }
    return {
      getEvents: getEvents,
      getEvent: getEvent
    }
  }

  angular.module('EventRegisterationApp')

  .factory('EventsData', eventsData);
})();
