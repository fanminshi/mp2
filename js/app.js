var moviesApp = angular.module('moviesApp', [
  'ngRoute',
  'moviesControllers',
]);

moviesApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/lists', {
        templateUrl: 'partials/list.html',
        controller: 'listCtrl'
      }).
      when('/lists/:movieId', {
        templateUrl: 'partials/details.html',
        controller: 'detailCtrl'
      }).
      when('/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'galleryCtrl'
      }).
      otherwise({
        redirectTo: '/lists'
      });
  }]);
