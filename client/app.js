angular.module('MyApp', ['ngCookies', 'ngResource', 'ngRoute'])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    });

    $routeProvider
      .when('/', {
        templateUrl: '/client/views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/step1', {
        templateUrl: '/client/views/step1.html',
        controller: 'Step1Ctrl'
      })
      .when('/step2', {
        templateUrl: '/client/views/step2.html',
        controller: 'Step2Ctrl'
      });

      //.when('/answered', {
      //  templateUrl: '/views/answered.html',
      //  controller: 'AnsweredCtrl'
      //})
      //.when('/noanswer', {
      //  templateUrl: '/views/noanswer.html',
      //  controller: 'NoAnswerCtrl'
      //})
      //.when('/submit', {
      //  templateUrl: 'views/submit.html',
      //  controller: 'SubmitCtrl'
      //})
      //.when('/ask/:_id', {
      //  templateUrl: 'views/ask.html',
      //  controller: 'AskCtrl'
      //})
      //.otherwise({
      //  redirectTo: '/'
      //});
  }]);