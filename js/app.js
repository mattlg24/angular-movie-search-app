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


app.controller('MoviesController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.thing = 'did this work?'

    // $scope.movie = {}
    $scope.movies = []

    $scope.getMovies = function(data) {
        // console.log('data is', data);
        let movieTitle = data.title
        console.log(movieTitle);
        $http.get(`http://www.omdbapi.com/?s=${movieTitle}`)
            .then(function(movies) {
                console.log('movies data is', movies.data.Search);
                // movies.push()

                $scope.moviesData = movies.data.Search
                    // console.log(moviesData);
                $location.url('/movies')
            })

    }



}])
