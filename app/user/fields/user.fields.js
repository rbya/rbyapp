'use strict';

angular.module('app.user').value('ProfileFields',
  {
    name: [
      {
        key: 'first_name',
        type: 'floating-input',
        templateOptions: {
          type: 'text',
          label: 'First Name',
          required: true,
          placeholder: 'First Name'
        }
      },
      {
        key: 'last_name',
        type: 'floating-input',
        templateOptions: {
          type: 'text',
          label: 'Last Name',
          required: true,
          placeholder: 'Last Name'
        }
      }
    ],
    email: [
      {
        key: 'email',
        type: 'floating-input',
        templateOptions: {
          type: 'text',
          label: 'Email',
          required: true,
          placeholder: 'Email'
        }
      }
    ],
    phone: [
      {
        key: 'phone_number',
        type: 'floating-input',
        templateOptions: {
          type: 'text',
          label: 'Phone Number',
          required: true,
          placeholder: 'Phone Number'
        }
      }
    ],
    school: []
  }
);
