angular.module('core.phone').factory('Phone', ['$resource', ($resource) => {
  return $resource('phones/:phoneId.json', {}, {
    query: {
      method: 'GET',
      params: {phoneId: 'phones'},
      isArray: true
    }
  })
}])