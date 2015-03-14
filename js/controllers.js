var moviesControllers = angular.module('moviesControllers', []);

moviesControllers.controller('listCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/imdb250.json').success(function(data) {
      $scope.movies = data;
    });

    $scope.orderProp = 'title';
    $scope.dir = "+";
  }]);

moviesControllers.controller('detailCtrl', ['$scope', '$http', '$routeParams','$filter',
  function($scope, $http, $routeParams, $filter) {

  	$http.get('data/imdb250.json').success(function(data) {
      $scope.movies = data;
      $scope.movieId = $routeParams.movieId;
      $scope.movie = $filter('filter')(data, {'rank' : $scope.movieId})[0];
      $scope.prevAddr = (parseInt($scope.movieId) - 1);
      $scope.prevAddr = $scope.prevAddr < 0 ? 250 : $scope.prevAddr;
      $scope.nextAddr = parseInt($scope.movieId) + 1;
      $scope.nextAddr = $scope.nextAddr > 250 ? 0 : $scope.nextAddr;
    });

   }]);

moviesControllers.controller('galleryCtrl', ['$scope', '$http',
  function($scope, $http) {

  	$http.get('data/imdb250.json').success(function(data) {
      $scope.movies = data;
      $scope.genres = ['all', 'Drama', 'Action', 'Thriller', 'Biography', 'History', 'Western',
    'Adventure', 'Fantasy', 'Romance', 'Mystery', 'Sci-fi', 'Family', 'Comedy', 'War', 'Animation',
    'Horror', 'Music', 'Film-Noir', 'Musical', 'Sport'
    ];
    });

    $scope.filterByGenres = function(movie) {
    	if($scope.genre == 'all')
    	{
    		return 1;
    	}
        return (movie.genre.indexOf($scope.genre) !== -1);
    };
    

    $scope.genre = 'all';
  }]);