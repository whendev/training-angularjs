'use strict';

// function PhoneListController($http) {
//   let self = this;
//   self.orderProp = 'age';

//   $http.get('phones/phones.json').then(function(response) {
//     self.phones = response.data;
//   });
// }

// PhoneListController.$inject = ['$http']

angular.module('phoneList').component('phoneList', {
  templateUrl: 'phone-list/phone-list.template.html',
  controller: ['Phone', function PhoneListController(Phone) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }]
});


















// Register `phoneList` component, along with its associated controller and template
// angular.
//   module('phonecatApp').
//   component('phoneList', {
//     template:
//         '<ul>' +
//           '<li ng-repeat="phone in $ctrl.phones">' +
//             '<span>{{phone.name}}</span>' +
//             '<p>{{phone.snippet}}</p>' +
//           '</li>' +
//         '</ul>',
//     controller: function PhoneListController() {
//       this.phones = [
//         {
//           name: 'Nexus S',
//           snippet: 'Fast just got faster with Nexus S.'
//         }, {
//           name: 'Motorola XOOM™ with Wi-Fi',
//           snippet: 'The Next, Next Generation tablet.'
//         }, {
//           name: 'MOTOROLA XOOM™',
//           snippet: 'The Next, Next Generation tablet.'
//         }
//       ];
//     }
//   });
