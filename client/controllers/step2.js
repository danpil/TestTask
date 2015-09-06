angular.module('MyApp')
  .controller('Step2Ctrl', ['$scope', '$location', '$rootScope', 'serviceRequests', function ($scope, $location, $rootScope, serviceRequests) {
    $scope.currencyes = [
      'Доллар',
      'Гривна',
      'Евро'
    ];
    $scope.nameProposal1 = 'Заявка 1';
    $scope.nameProposal2 = 'Заявка 2';
    $scope.nameProposal3 = 'Заявка 3';
    $scope.price1 = '100 USD';
    $scope.price2 = '200 USD';
    $scope.price3 = '300 USD';
    $scope.currency = 'Доллар';
    var proposal;
    $scope.changeCurrency = function () {
      switch ($scope.currency) {
        case 'Гривна':
          $scope.price1 = (100 * 22.1712).toFixed(2) + ' UAH';
          $scope.price2 = (200 * 22.1712).toFixed(2) + ' UAH';
          $scope.price3 = (300 * 22.1712).toFixed(2) + ' UAH';
          $scope.currency = 'Гривна';
          break;
        case 'Доллар':
          $scope.price1 = '100 USD';
          $scope.price2 = '200 USD';
          $scope.price3 = '300 USD';
          $scope.currency = 'Доллар';
          break;
        case 'Евро':
          $scope.price1 = (100 / 1.1151).toFixed(2) + ' EUR';
          $scope.price2 = (200 / 1.1151).toFixed(2) + ' EUR';
          $scope.price3 = (300 / 1.1151).toFixed(2) + ' EUR';
          $scope.currency = 'Евро';
          break;
      }
    };
    $scope.selectProposal = function(pr) {
      proposal = pr;
      $scope.alertWarning = false;
    };
    $scope.submitData = function() {
    if(proposal) {
      var user = JSON.parse(localStorage.getItem('userDetails'));
      var data = JSON.stringify({
        name: user.name,
        email: user.email,
        country: user.country,
        company: user.company,
        description: user.description,
        proposal: proposal,
        currency: $scope.currency
      });
      serviceRequests.sendData(data).success(function (data) {

      });
    } else {
      $scope.alertWarning = true;
    }
    };
  }]);
