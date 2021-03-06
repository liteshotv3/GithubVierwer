var app = angular.module('myApp', []);
app.controller('MainController', function ($scope, $http) {
    var onUserComplete = function (response) {
        $scope.user = response.data;
    };

    var onError = function (reason) {
        $scope.error = "Could not fetch the user for some reason";
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