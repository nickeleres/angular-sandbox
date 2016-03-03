//components/services/dataService.js

var app = angular.module('boilerplate')

app.service('DataService', ['$http', function(http){
    console.log('inside DataService')

    this.getUserData = function(){
        console.log('inside getUserData()')
        var obj =
            [
                {"name": "Michael Kang", "location":"Lobby", "content":"Your guest is in the lobby", "timeRemaining": "5 min"},
                {"name": "Billy Nershi", "location":"Room", "content":"Your guest has been waiting", "timeRemaining": "7 min"},
                {"name": "Kyle Hollingsworth", "location":"Office", "content":"Your guest is here", "timeRemaining": "8 min"}
            ]
        return obj
    }
}])