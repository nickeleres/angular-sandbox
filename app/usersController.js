//app/usersController.js

var app = angular.module('boilerplate')

app.controller('UsersController', ['$scope', 'DataService', function($scope, DataService){
    $scope.records = DataService.getUserData()

    console.log($scope.users, "$scope.users")

    $scope.clickFunction = function(user){
        console.log(user, "user")

        alert('You have clicked ' + user.Name)
    }
}])