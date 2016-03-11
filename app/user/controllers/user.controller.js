'use strict';

angular.module('app.user').controller('UserCtrl', function (DS, user, ProfileFields) {
  this.user = user;
  this.fields = ProfileFields;

  this.save = function (profile) {
    debugger;
    DS.save('user', 5).then(function(){
      debugger;
    }).catch(function(error){
      debugger;
    })
    //DS.update('user', 1, profile).thne(function(){
    //  //Go back
    //})
  };
});
