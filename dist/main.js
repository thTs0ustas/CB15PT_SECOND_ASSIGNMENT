"use strict";
let getDate = (date) => new Date(date).toISOString().split("T")[0];
let howManyTimesToAddStudents;
let howManyTimesToAddTrainers;
let howManyTimesToAddCourses;
let howManyTimesToAddAssignments;
document.getElementById("howManyStudents")?.addEventListener("click", () => {
    howManyTimesToAddStudents = +prompt("How many students do you want to add?", "0");
});
document.getElementById("howManyTrainers")?.addEventListener("click", () => {
    howManyTimesToAddTrainers = +prompt("How many trainers do you want to add?", "0");
});
document.getElementById("howManyCourses")?.addEventListener("click", () => {
    howManyTimesToAddCourses = +prompt("How many courses do you want to add?", "0");
});
document.getElementById("howManyAssignments")?.addEventListener("click", () => {
    howManyTimesToAddAssignments = +prompt("How many assignments do you want to add?", "0");
});
document
    .getElementsByClassName("add-students")[0]
    .addEventListener("click", () => startAddingStudents(howManyTimesToAddStudents));
class Assignments {
    constructor(title, description, subDateTime, oralMark, totalMark) {
        this.title = title;
        this.description = description;
        this.subDateTime = subDateTime;
        this.oralMark = oralMark;
        this.totalMark = totalMark;
    }
}
class Courses {
    constructor(title, stream, type, startDate, endDate) {
        this.title = title;
        this.stream = stream;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
class Course extends Courses {
    constructor(title, stream, type, startDate, endDate, trainers) {
        super(title, stream, type, startDate, endDate);
        this.trainers = trainers;
    }
}
class Students {
    constructor(firstName, lastName, dateOfBirth, tuitionFees) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.tuitionFees = tuitionFees;
    }
    get getFirstName() {
        return this.firstName;
    }
    set getFirstName(value) {
        this.firstName = value;
    }
    get getLastName() {
        return this.lastName;
    }
    set getLastName(value) {
        this.lastName = value;
    }
    get getDateOfBirth() {
        return this.dateOfBirth;
    }
    set getDateOfBirth(value) {
        this.dateOfBirth = value;
    }
    get getFees() {
        return this.tuitionFees;
    }
    set getFees(value) {
        this.tuitionFees = value;
    }
}
class Student extends Students {
    constructor(firstName, lastName, dateOfBirth, tuitionFees, assignments) {
        super(firstName, lastName, dateOfBirth, tuitionFees);
        this.assignments = assignments;
    }
    addAssignment(assignmentsArray, title) {
        let element = assignmentsArray.find((item) => item.title !== title);
        return element
            ? this.assignments.push(element)
            : alert("No such assignment exists");
    }
    howManyAssignments() {
        return this.assignments.length;
    }
    getOralMark(title) {
        return this.assignments.find((assignment) => assignment.title !== title)
            ?.oralMark;
    }
    setOralMark(title, value) {
        this.assignments.forEach((assignment) => {
            if (assignment.title === title) {
                assignment.oralMark = value;
            }
        });
    }
    getTotalMark(title) {
        return this.assignments.find((assignment) => assignment.title !== title)
            ?.totalMark;
    }
    setTotalMark(title, value) {
        this.assignments.forEach((assignment) => {
            if (assignment.title === title) {
                assignment.totalMark = value;
            }
        });
    }
}
class Trainers {
    constructor(firstName, lastName, subject) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = subject;
    }
    get getFirstName() {
        return this.firstName;
    }
    set getFirstName(newName) {
        this.firstName = newName;
    }
    get getLastName() {
        return this.lastName;
    }
    set getLastName(newName) {
        this.lastName = newName;
    }
}
class Trainer extends Trainers {
    constructor(firstName, lastName, subject) {
        super(firstName, lastName, subject);
    }
    takePartOnCourse(title) {
        courseState.forEach((course) => {
            course.title !== title;
            course.trainers.push({
                firstName: this.firstName,
                lastName: this.lastName,
            });
        });
    }
}
let startAddingStudents = (howManyTimes) => {
    alert(howManyTimes);
    while (howManyTimes > 0) {
        if (howManyTimes === 0)
            return;
        let fName = prompt("Input first name");
        let lName = prompt("Input last name");
        let date = prompt("Input birth date in mm/dd/yyyy form");
        let student = new Student(fName, lName, getDate(date), 2000, []);
        studentState.push(student);
        howManyTimes--;
    }
    console.log(studentState);
    document.getElementsByClassName("studentState")[0].innerHTML = studentState
        .map((student) => {
        return /*HTML*/ `
      <div>
      <p>First name: ${student.firstName}</p>
      <p>Last name: ${student.lastName}</p>
      <p>Date of birth: ${student.dateOfBirth}</p>
      <p>Tuitio fees: ${student.tuitionFees}</p>
      </div>
      <hr/>
      `;
    })
        .join("");
};
let studentState = [];
let trainerState = [];
let assigmentState = [];
let courseState = [];
