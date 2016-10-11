(function () {
  'use strict';

  angular.module('EventRegisterationApp')

  .factory('gravatarUrlBuilder', function () {
    return {
      buildGravatarUrl: function (email) {
        // var defaultGravatarUrl = "http://www.gravatar.com/avatar/000?s=200";
        var defaultGravatarUrl = "images/user.svg"
        var email_regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
          if (!email_regex.test(email)) {
            return defaultGravatarUrl
          };

          var md5_email_hash = md5(email);

          return 'http://www.gravatar.com/avatar/' + md5_email_hash
      }
    }





  })
})();
