signIn.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;

    $scope.signInStudent = function(student) {
        student.isHere = true;
    };

    $scope.signOutStudent = function(student) {
        student.isHere = false;
    };


});
