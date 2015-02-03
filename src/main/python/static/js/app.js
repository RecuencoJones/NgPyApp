angular.module('starter', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider

            .state('starter', {
                url: "/",
                templateUrl: "index.html"
            })

            .state('home', {
                url: "/home",
                templateUrl: "home.html",
                controller: "MainCtrl"
            })

            .state('about', {
                url: "/about",
                templateUrl: "about.html"
            });

        $urlRouterProvider.otherwise('home');
    })

    .controller('MainCtrl', [ '$scope', '$http', function($scope, $http){
        $scope.inputList= [ ];
        $scope.newInput="";

        $http({
            method: 'GET',
            url: "http://" + window.location.host + '/api/values'
        }).success(function(data){
            data.forEach(function(d){
                $scope.inputList.push(d);
            })
        });

        $scope.submitNewInput = function(){
            $http({
                method: 'POST',
                url: "http://" + window.location.host + '/api/add/' + $scope.newInput
            }).success(function(data,status){
                $scope.newInput="";
                $scope.inputList.push(data.result);
            }).error(function(data,status){
                console.log(data+status);
            });
        };

        $scope.removeInput = function(value){
            if(confirm("Are you sure you want to delete this input?")) {
                $http({
                    method: 'DELETE',
                    url: "http://" + window.location.host + '/api/del/' + value
                }).success(function (data, status) {
                    for(var i = 0; i < $scope.inputList.length; i++){
                        if($scope.inputList[i].id === value){
                            $scope.inputList.splice(i,1);
                        }
                    }
                    console.log("EXTERMINATION COMPLETED");
                });
            }
        }
    }]);
