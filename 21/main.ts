// 21. They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

interface itCourse{            // itCourse is object name
    courseName : string         // courseName is one of the properties of the object
    location : string          // another property of itCourse is created, i.e. location
    onSiteStudents : number
}

let itCourse = {
    courseName : "TypeScript",
    location : "Governor House",
    onSiteStudents : 50000
}

console.log(itCourse)
