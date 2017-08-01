var app = angular.module('myApp', []); //'myApp is the name of the module and dependencies go inside the [] if there are any
app.controller('MainController', function ($scope, $http) {
    //I want to use this in my then function on line 12, but I don't want to clutter code, so I will
    //define it here and simply pass it as the then() parameter
    var onUserComplete = function (response) {
        $scope.user = response.data;
    };

    var onError = function (reason) {
        $scope.error = "Could not fetch the user for some reason";
    };

    $http.get("https://api.github.com/users/angular")
        .then(onUserComplete, onError);

    $scope.search = function (username) {
        $http.get("https://api.github.com/users/" + username)
            .then(onUserComplete, onError);
    }


    $scope.message = "Github viewer";
    $scope.username;

});