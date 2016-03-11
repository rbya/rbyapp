'use strict';

angular.module('app.core')
  .run(function (DS) {
    DS.defineResource('school');
  });
