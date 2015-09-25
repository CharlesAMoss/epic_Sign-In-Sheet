studentRoster.factory('StudentsFactory', function StudentsFactory() {
    var factory = {};
    factory.students = [{
        name: "Juan Epstein",
        image: "/image/epstein.jpg",
        isHere:false
    }, {
        name: "Freddie Washington",
        image: "/image/washington.jpg",
        isHere:false
    }, {
        name: "Vincent Barbarino",
        image: "/image/barbarino.jpg",
        isHere:false
    }, {
        name: "Arnold Horshack",
        image: "/image/horshack.jpg",
        isHere:false
    }];

    factory.addStudent = function() {
        var student = { name:factory.studentName, inClass:false };
        factory.students.push(student);
        factory.studentName = null;
    };

    factory.deleteStudent = function(student) {
        var index = factory.students.indexOf(student);
        factory.students.splice(index, 1);
    };
    return factory;
});
