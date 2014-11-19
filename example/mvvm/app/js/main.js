var myApp = angular.module('myApp', []);

function mvvmCtrl($scope) {
    $scope.form = {person:"tom", city:"Kassel"};
    $scope.foo = function() {
        var testdata = $scope.form;
        true;
    }
}