const app = angular.module('movieSearchApp', ['ngroute'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/movies', {
            templateUrl: '../views/movies.html',
            controller: 'MoviesController'
        })
        .when('/movie', {
            templateUrl: '../views.movie.html',
            controller: 'MovieController'
        })
})

app.controller('MoviesController', ['$scope', MoviesController])

app.controller('MovieController', ['$scope', MovieController])
