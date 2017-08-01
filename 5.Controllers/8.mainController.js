
var app = angular.module('myApp', []); //'myApp is the name of the module and dependencies go inside the [] if there are any
app.controller('MainController', function($scope, $http)
{
    //I want to use this in my then function on line 12, but I don't want to clutter code, so I will
    //define it here and simply pass it as the then() parameter
    var onUserComplete = function(response){
        $scope.user = response.data;
    };

    var onError = function(reason){
        $scope.error = "Could not fetch the user for some reason";
    };

    $http.get("https://api.github.com/users/liteshotv3")
        .then(onUserComplete, onError);
    var person = {
        firstName: "Archie",
        lastName: "Tolstov",
        //imageSrc: "https://pbs.twimg.com/profile_images/2824227101/20823644bf8866ab3454efd4ccda40f8.jpeg"
    };

    $scope.message = "Hello, Angular!";
    $scope.person = person;

});