﻿angular.module('MyApp') // extending from previously created angular module in the First Part
.controller('LoginController', function ($scope, LoginService) {
    $scope.IsLogedIn = false;
    $scope.Message = '';
    $scope.Submitted = false;
    $scope.IsFormValid = false;

    $scope.LoginData = {
        Username: '',
        Password: ''
    };

    //Check is Form Valid or Not // Here f1 is our form Name
    $scope.$watch('f1.$valid', function (newVal) {
        $scope.IsFormValid = newVal;
    });

    $scope.Login = function () {
        $scope.Submitted = true;
        if ($scope.IsFormValid) {
          //  alert('Login Failed!');
            $scope.Message = "Invalid Credential." ;
            //LoginService.GetUser($scope.LoginData).then(function (d) {
            //    if (d.data.Username != null) {
            //        $scope.IsLogedIn = true;
            //        $scope.Message = "Successfully login done. Welcome " + d.data.FullName;

            //    }
            //    else {
            //        alert('Invalid Credential!');
            //    }
            //});
        }
    };
    $scope.changeEvent = function () {
        $scope.Message = "" ;
    };

})
     
.factory('LoginService', function ($http) {
    var fac = {};
    fac.GetUser = function (d) {
        return $http({
            url: '/Data/UserLogin',
            method: 'POST',
            data: JSON.stringify(d),
            headers: { 'content-type': 'application/json' }
        });
    };
    return fac;
});