(function () {
  'use strict'

  angular.module('EventRegisterationApp')

  .controller('EditProfileController', function ($scope, gravatarUrlBuilder) {
    $scope.string_regex = '\\w+'
    $scope.email_regex = '^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$'

    $scope.image_url = gravatarUrlBuilder.buildGravatarUrl($scope.email);

  })
})();
