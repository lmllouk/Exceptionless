(function () {
  'use strict';

  angular.module('exceptionless.url', [])
    .factory('urlService', [function () {

      function buildUrl(isSecure, host, port, path, queryString) {
        var url = (isSecure ? 'https://' : 'http://') + host;

        if (port !== 80 && port !== 443) {
          url += ':' + port;
        }

        if (path) {
          if (path && path.indexOf('/') !== 0) {
            url += '/';
          }

          url += path;
        }

        if (Object.keys(queryString).length > 0) {
          var isFirst = true;
          for (var key in queryString) {
            if (isFirst) {
              url += '?';
              isFirst = false;
            } else {
              url += '&';
            }

            url += key + '=' + queryString[key];
          }
        }

        return url;
      }

      var service = {
        buildUrl: buildUrl
      };

      return service;
    }
    ]);
}());
