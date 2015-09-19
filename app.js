var askExperts = angular.module('askExperts', ['ui.router']);

askExperts.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });
});