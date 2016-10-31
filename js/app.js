const app = angular.module('movieSearchApp', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
        .when('/movies', {
            templateUrl: '../views/movies.html',
            controller: 'MoviesController'
        })
        .when('/movie/:id', {
            templateUrl: '../views/movie.html',
            controller: 'OneMovieController'
        })
})


app.controller('MoviesController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    // $scope.thing = 'did this work?'

    // $scope.movie = {}
    $scope.movies = []

    $scope.getMovies = function(data) {
        // console.log('data is', data);
        let movieTitle = data.title
        console.log(movieTitle);
        $http.get(`http://www.omdbapi.com/?s=${movieTitle}`)
            .then(function(movies) {
                console.log('movie data is', movies.data.Search);
                // movies.push()

                $scope.moviesData = movies.data.Search
                    // console.log(moviesData);
                $location.url('/movies')
            })
    }
}])

app.controller('OneMovieController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    let id = $routeParams.id
    console.log('routeparams id is', id);
    $http.get(`http://www.omdbapi.com/?i=${id}`)
        .then(function(movie) {
            console.log('movie is', movie);
            $scope.movie = movie.data
            console.log('movie  data', $scope.movie);
        })

    // $location.url('/movie/:id')
    $scope.thing = 'did this work'
}])
