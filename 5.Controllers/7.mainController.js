
var app = angular.module('myApp', []);
app.controller('MainController', function($scope)
{

    var person = {
        firstName: "Archie",
        lastName: "Tolstov",
        imageSrc: "https://pbs.twimg.com/profile_images/2824227101/20823644bf8866ab3454efd4ccda40f8.jpeg"
    };

    $scope.message = "Hello, Angular!";
    $scope.person = person;

});