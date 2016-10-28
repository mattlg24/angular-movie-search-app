const app = angular.module('movieSearchApp', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/movies', {
            templateUrl: '../views/movies.html',
            controller: 'MoviesController'
        })
        .when('/movie', {
            templateUrl: '../views/movie.html',
            controller: 'MovieController'
        })
})


app.controller('MoviesController', ['$scope', '$http', function($scope, $http) {
    $scope.thing = 'did this work?'

    $scope.getMovies = function(data) {
            console.log('data is', data);
        }
        // getMovies()
        // $http.get('http://www.omdbapi.com/?')



}])

app.controller('MovieController', ['$scope', function($scope) {
    $scope.thing = 'i work'
}])
