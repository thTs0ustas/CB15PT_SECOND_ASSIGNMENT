import {
  AssignInterface,
  CourseInterface,
  mockup,
  PartOfCourse,
  StudentInterface,
  TrainersInterface,
} from "../classes/types/types";

import { getDate, randomId } from "../customFunctions/customFunctions";
import { Assignment, Course, Student, Trainer } from "../classes";
import { studentMockup } from "../mockups/studentMockup";
import { assignMockup } from "../mockups/assignMockup";
import { courseMockup } from "../mockups/courseMockup";
import { trainerMockup } from "../mockups/trainerMockup";
import { groupBy } from "lodash";

export class StateManagement {
  studentState: StudentInterface[] = [];
  trainerState: TrainersInterface[] = [];
  courseState: CourseInterface[] = [];
  assignmentState: AssignInterface[] = [];

  constructor() {
    studentMockup.forEach((mk) => this.addNewStudent(0, "is", mk));
    assignMockup.forEach((mk) => this.addNewAssignment(0, "is", mk));
    courseMockup.forEach((mk) => this.addNewCourse(0, "is", mk));
    trainerMockup.forEach((mk) => this.addNewTrainer(0, "is", mk));

    document
      .getElementById("studentWithAssign")!
      .addEventListener("click", () => this.showStudentsWithAssign());
    document
      .getElementById("studentAssign")!
      .addEventListener("click", () => this.addAssignmentToStudent());
    document
      .getElementById("courseTrainers")!
      .addEventListener("click", () => this.addTrainerInCourse());
    document
      .getElementById("assignPerCourse")!
      .addEventListener("click", () => this.assignPerCourse());
    document
      .getElementById("studentPerCourse")!
      .addEventListener("click", () => this.showStudentsPerCourse());
    document
      .getElementById("stTakePart")!
      .addEventListener("click", () => this.takePartOnCourseSt());
  }

  addNewTrainer(howManyTimes: number, typeM: mockup, mk?: TrainersInterface) {
    if (howManyTimes) {
      let fName: string;
      let lName: string;
      let subject: string;

      if (typeM === "isNot") {
        while (howManyTimes > 0) {
          fName = prompt("Input first name")!;
          lName = prompt("Input last name")!;
          subject = prompt("Input type of subject")!;
          this.trainerState.push(
            new Trainer(randomId(), fName, lName, subject)
          );
          howManyTimes--;
        }
      }
    }
    if (typeM === "is") {
      this.trainerState.push(
        new Trainer(mk!.id, mk!.firstName, mk!.lastName, mk!.subject)
      );
    }
  }
  addNewCourse(howManyTimes: number, typeM: mockup, mk?: CourseInterface) {
    if (howManyTimes) {
      let title: string;
      let steam: string;
      let type: string;
      let startDate: string;
      let endDate: string;

      if (typeM === "isNot") {
        while (howManyTimes > 0) {
          title = prompt("Input courses title")!;
          steam = prompt("Input steam")!;
          type = prompt("Input type of course")!;
          startDate = prompt("Input start date of course in mm/dd/yyyy")!;
          endDate = prompt("Input end date of course in mm/dd/yyyy")!;

          this.courseState.push(
            new Course(
              randomId(),
              title,
              steam,
              type,
              getDate(startDate),
              getDate(endDate)
            )
          );
          howManyTimes--;
        }
      }
    }
    if (typeM === "is") {
      this.courseState.push(
        new Course(
          mk!.id,
          mk!.title,
          mk!.stream,
          mk!.type,
          mk!.startDate,
          mk!.endDate
        )
      );
    }
  }
  addNewAssignment(howManyTimes: number, typeM: mockup, mk?: AssignInterface) {
    if (howManyTimes) {
      let title: string;
      let description: string;
      let submissionDate: string;
      let partOfCourse: PartOfCourse;

      if (typeM === "isNot") {
        while (howManyTimes > 0) {
          title = prompt("Input assignment title")!;
          description = prompt("Input assignment description")!;

          partOfCourse = prompt(
            "Input assignment to course relation"
          ) as PartOfCourse;

          submissionDate = prompt("Input submission date in mm/dd/yyyy")!;

          this.assignmentState.push(
            new Assignment(
              randomId(),
              title,
              partOfCourse,
              description,
              getDate(submissionDate),
              0,
              0
            )
          );
          howManyTimes--;
        }
      }
    }
    if (typeM === "is") {
      this.assignmentState.push(
        new Assignment(
          mk!.id,
          mk!.title,
          mk!.partOfCourse,
          mk!.description,
          mk!.subDateTime,
          mk!.oralMark,
          mk!.totalMark
        )
      );
    }
  }
  addNewStudent(howManyTimes: number, typeM: mockup, mK?: StudentInterface) {
    if (howManyTimes) {
      let fName: string;
      let lName: string;
      let date: string;

      if (typeM === "isNot") {
        while (howManyTimes > 0) {
          fName = prompt("Input first name")!;
          lName = prompt("Input last name")!;
          date = prompt("Input birth date in mm/dd/yyyy form")!;
          this.studentState.push(
            new Student(randomId(), fName, lName, getDate(date), 0, [], [])
          );
          howManyTimes--;
        }
      }
    }

    if (typeM === "is") {
      this.studentState.push(
        new Student(
          mK!.id,
          mK!.firstName,
          mK!.lastName,
          mK!.dateOfBirth,
          0,
          [],
          []
        )
      );
    }
  }

  assignPerCourse() {
    const course = prompt("Which do you want to look up");
    const courseExists = this.courseState.find((crs) => crs.title === course);
    if (courseExists)
      return this.assignmentState.filter(
        (assign) => assign.partOfCourse === course
      );
    alert("No such course exists");
  }
  showStudentsPerCourse() {
    let studentsPerCourse = {};
    const courses = this.courseState.map((course) => course.stream);
    courses.forEach((course) => {
      studentsPerCourse = groupBy(this.studentState, course);
    });
    console.log(studentsPerCourse);
    return studentsPerCourse;
  }
  takePartOnCourseSt() {
    const title = prompt("In which course do you want to take part");
    const studentN = prompt("In which course do you want to take part");

    const courseExists = this.courseState.find(
      (course) => course.title === title
    );

    const studentExists = this.studentState.find(
      (student) => student.firstName === studentN
    );

    if (courseExists && studentExists) {
      studentExists.tuitionFees += courseExists.cost;
      courseExists.students.push(studentExists);
    } else alert("Not such course or student");
  }
  addAssignmentToStudent() {
    const title = prompt("Give the title of the assignment");
    const name = prompt("Give the name of the student")!;
    const assign = this.assignmentState.find((item) => item.title !== title)!;
    const st = this.studentState.find((item) => item.firstName !== name)!;
    if (assign && st) {
      st.assignments.push(assign);
    } else alert("No such student exists");
  }
  addTrainerInCourse() {
    const title = prompt("Give the title of the course");
    const name = prompt("Give the name of the trainer");

    const courses = this.courseState.filter(
      (assign) => assign.title === title
    )[0];
    const trainers = this.trainerState.filter(
      (trainer) => trainer.firstName === name
    )[0];

    if (courses && trainers) {
      this.courseState.forEach((el) => {
        if (el.title === courses.title) {
          el.trainers.push({
            firstName: trainers.firstName,
            lastName: trainers.lastName,
          });
          console.log({ ...el });
        }
      });
    } else alert("No such trainer or course exists");
  }
  showStudentsWithAssign() {
    console.log(
      this.studentState.filter((student) => student.assignments.length > 0)
    );
  }

  // takePartOnCourseTr() {
  //   const title = prompt("In which course do you want to take part");
  //   const trainerN = prompt("In which course do you want to take part");
  //
  //   const courseExists = this.courseState.find(
  //     (course) => course.title === title
  //   );
  //
  //   const trainerExists = this.trainerState.find(
  //     (trainer) => trainer.firstName === trainerN
  //   );
  //
  //   if (courseExists && trainerExists) {
  //     courseExists.trainers.push(trainerExists);
  //   } else alert("Not such course or trainer");
  // }
}
