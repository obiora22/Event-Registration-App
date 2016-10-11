(function () {
  'use strict'
  angular.module('EventRegisterationApp')
  .factory('EventsResourceService', function ($resource) {
    var resource = $resource('/data/events/:id', {id: '@id'})
    return {
      getAllEvents: function () {
        return resource.query()
      },
      getEvent: function (eventId) {
        return resource.get({id: eventId})
      }
    }
  })
})()
