var app = angular.module('myApp', []);
app.controller('MainController', function ($scope, $http) {

    var onUserComplete = function (response) {
        $scope.user = response.data;

        //i'm using $http.get again because we are drilling into the first api to go
        //to another link, this will retrieve repo information (another api)
        $http.get($scope.user.repos_url)
            .then(onRepos, onError);
    };


    var onRepos = function(response){
        $scope.repos = response.data;
    };

    var onError = function (reason) {
        $scope.error = "Could not fetch the data";
    };

    $http.get("https://api.github.com/users/angular")
        .then(onUserComplete, onError);

    //will pass username in from the submit on the html page, and append username to the url in order to retrieve
    //the desired data from the github api
    $scope.search = function (username) {
        $http.get("https://api.github.com/users/" + username)
            .then(onUserComplete, onError);
    }


    $scope.message = "Github viewer";
    $scope.username;

});