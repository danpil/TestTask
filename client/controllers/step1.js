angular.module('MyApp')
  .controller('Step1Ctrl', ['$scope', '$location', '$rootScope', 'serviceRequests', function($scope, $location, $rootScope, serviceRequests) {
    $scope.newUser = {};
    if(localStorage.getItem('userDetails')) {
      var user = JSON.parse(localStorage.getItem('userDetails'));
      $scope.newUser.name = user.name;
      $scope.newUser.email = user.email;
      $scope.newUser.country = user.country;
      $scope.newUser.company = user.company;
      $scope.newUser.description = user.description;
    }
    $scope.addNewUser = function(newUser) {
      if ($scope.myForm.$valid) {
        var userDetails = {};
        userDetails.name = newUser.name;
        userDetails.email = newUser.email;
        userDetails.country = newUser.country;
        userDetails.company = newUser.company;
        userDetails.description = newUser.description || '';
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        $location.path('/step2');
      } else {
        $scope.showValidation = true;
      }
    };
    $scope.getError = function(error) {
      if (angular.isDefined(error)) {
        if (error.required) {
          return "Please enter a value";
        } else if (error.email) {
          return "Please enter a valid email address";
        }
      }
    };

  }]);
