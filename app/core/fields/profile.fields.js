'use strict';

angular.module('app.core').value('ProfileFields',
  [{
    key: "divider",
    type: "item-divider",
    templateOptions: {
      type: "text",
      label: "Your Information",
      placeholder: "First Name",
      required: true
    }
  }, {
    key: 'first_name',
    type: 'input',
    templateOptions: {
      type: 'text',
      required: true,
      placeholder: 'First Name',
      icon: 'ion-ios-person',
      iconPlaceholder: true
    }
  }, {
    key: 'last_name',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Last Name',
      required: true,
      placeholder: 'Last Name',
      icon: 'ion-ios-person',
      iconPlaceholder: true
    }
  }, {
    key: 'phone_number',
    type: 'input',
    templateOptions: {
      type: 'text',
      required: true,
      placeholder: 'Phone number',
      icon: 'ion-ios-telephone',
      iconPlaceholder: true
    }
  }, {
    key: 'church',
    type: 'select',
    templateOptions: {
      label: "Church Affiliation",
      options: [],
      valueProp: '_id',
      labelProp: 'name'
    },
    controller: function ($scope, DS) {
      $scope.to.options = [{name: 'Church A'}, {name: 'Church B'}];
    }
  }, {
    "key": "divider",
    "type": "item-divider",
    "templateOptions": {
      "type": "text",
      "label": "Account Information",
      "placeholder": "First Name"
    }
  }, {
    key: 'email',
    type: 'input',
    templateOptions: {
      type: 'text',
      required: true,
      placeholder: 'Email',
      icon: 'ion-ios-email',
      iconPlaceholder: true
    }
  }, {
    key: 'password',
    type: 'input',
    templateOptions: {
      type: 'password',
      required: true,
      placeholder: 'Password',
      icon: 'ion-locked',
      iconPlaceholder: true
    }
  }, {
    key: 'confirmPassword',
    type: 'input',
    templateOptions: {
      type: 'password',
      placeholder: 'Confirm password',
      required: true,
      icon: 'ion-locked',
      iconPlaceholder: true
    },
    extras: {
      validateOnModelChange: true
    },
    validators: {
      confirmPassword: {
        expression: function (viewValue, modelValue, fieldScope) {
          if (!_.isUndefined(fieldScope.model['password'])) {
            return modelValue === fieldScope.model['password'];
          }
        },
        message: "Passwords do not match'"
      }
    }
  }]
);
