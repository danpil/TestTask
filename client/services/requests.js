angular.module('MyApp')
    .service('serviceRequests', ['$http', function ($http) {
      this.sendData = function(data) {
        return $http.post('/order/create/', data);
      };
    }]);