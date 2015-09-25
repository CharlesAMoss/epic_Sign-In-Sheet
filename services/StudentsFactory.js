signIn.factory('StudentsFactory', function StudentsFactory() {
    var factory = {};
    factory.students = [{
        name: "Juan Epstein",
        lastName: "Epstein",
        image: "/image/epstein.jpg",
        isHere:false
    }, {
        name: "Freddie Washington",
        lastName: "Washington",
        image: "/image/washington.jpg",
        isHere:false
    }, {
        name: "Vincent Barbarino",
        lastName: "Barbarino",
        image: "/image/barbarino.jpg",
        isHere:false
    }, {
        name: "Arnold Horshack",
        lastName: "Horshack",
        image: "/image/horshack.jpg",
        isHere:false
    }];



    // factory.addStudent = function() {
    //     var student = { name:factory.studentName, isHere:false };
    //     factory.students.push(student);
    //     factory.studentName = null;
    // };
    //
    // factory.deleteStudent = function(student) {
    //     var index = factory.students.indexOf(student);
    //     factory.students.splice(index, 1);
    // };
    return factory;
});
