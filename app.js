var signIn = angular.module('signIn', ['ui.router']);

signIn.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state("home", {
        url: "",
        templateUrl: "partials/home.html",
    });

    $stateProvider.state("student", {
        url: "/student",
        templateUrl: "partials/student.html",
        controller: "StudentsCtrl"
    });




});
