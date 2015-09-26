signIn.controller('AttendanceCtrl', function AttendanceCtrl($scope, StudentsFactory){
    $scope.students = StudentsFactory.students;

    $scope.signInStudent = function(student) {
        student.isHere = true;
    };

    $scope.signOutStudent = function(student) {
        student.isHere = false;
    };
});
