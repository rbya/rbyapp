'use strict';

angular.module('app.user')
  .run(function ($q, DS) {
    DS.defineResource({
      name: 'user',
      methods: {
        login: function (credentials) {
          return $q.when(true);
        }
      }
    });
  });
