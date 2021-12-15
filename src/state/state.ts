import { getDate, randomId } from "../customFunctions/customFunctions";
import { Assignment, Course, Student, Trainer } from "../classes";
import {
  AssignInterface,
  CourseInterface,
  ListenerFnA,
  ListenerFnC,
  ListenerFnS,
  ListenerFnT,
  mockup,
  StudentInterface,
  TrainersInterface,
} from "../classes/types/types";
import { studentMockup } from "../mockups/studentMockup";
import { trainerMockup } from "../mockups/trainerMockup";
import { assignMockup } from "../mockups/assignMockup";
import { courseMockup } from "../mockups/courseMockup";

class StateManagement {
  private studentListeners: ListenerFnS[] = [];
  private trainerListeners: ListenerFnT[] = [];
  private assignmentListeners: ListenerFnA[] = [];
  private courseListeners: ListenerFnC[] = [];

  studentState: StudentInterface[] = [];
  trainerState: TrainersInterface[] = [];
  courseState: CourseInterface[] = [];
  assignmentState: AssignInterface[] = [];

  // singleton
  private static instance: StateManagement;

  private constructor() {
    studentMockup.forEach((mk) => this.addNewStudent(0, "is", mk));
    trainerMockup.forEach((mk) => this.addNewTrainer(0, "is", mk));
    courseMockup.forEach((mk) => this.addNewCourse(0, "is", mk));
    assignMockup.forEach((mk) => this.addNewAssignment(0, "is", mk));

    document
      .getElementById("studentWithAssign")!
      .addEventListener("click", () => this.showStudentsWithAssign());
    document
      .getElementById("studentAssign")!
      .addEventListener("click", () => this.addAssignmentToStudent());
    document
      .getElementById("courseTrainers")!
      .addEventListener("click", () => this.addTrainerInCourse());
  }

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new StateManagement();
    return this.instance;
  }

  addListenersToStudent(listenerFn: ListenerFnS) {
    this.studentListeners.push(listenerFn);
  }

  addListenersToTrainer(listenerFn: ListenerFnT) {
    this.trainerListeners.push(listenerFn);
  }

  addListenersToCourse(listenerFn: ListenerFnC) {
    this.courseListeners.push(listenerFn);
  }

  addListenersToAssign(listenerFn: ListenerFnA) {
    this.assignmentListeners.push(listenerFn);
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
            new Student(randomId(), fName, lName, getDate(date), 0, [])
          );
        }
        howManyTimes--;
      }
    }
    if (typeM === "is") {
      this.studentState.push(
        new Student(
          mK!.id,
          mK!.firstName,
          mK!.lastName,
          mK!.dateOfBirth,
          mK!.tuitionFees,
          []
        )
      );
    }
    this.studentListeners.forEach((listenerFn) =>
      listenerFn(this.studentState.slice())
    );

    this.assignmentListeners.forEach((fn) => fn(this.assignmentState.slice()));
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
        }
        howManyTimes--;
      }
    }
    if (typeM === "is") {
      this.trainerState.push(
        new Trainer(mk!.id, mk!.firstName, mk!.lastName, mk!.subject)
      );
    }

    this.trainerListeners.forEach((listenerFn) =>
      listenerFn(this.trainerState.slice())
    );
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
              getDate(endDate),
              []
            )
          );
        }
        howManyTimes--;
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

    for (const listenerFn of this.courseListeners) {
      listenerFn(this.courseState.slice());
    }
  }

  addNewAssignment(howManyTimes: number, typeM: mockup, mk?: AssignInterface) {
    if (howManyTimes) {
      let title: string;
      let description: string;
      let submissionDate: string;

      if (typeM === "isNot") {
        while (howManyTimes > 0) {
          title = prompt("Input assignment title")!;
          description = prompt("Input assignment description")!;
          submissionDate = prompt("Input submission date in mm/dd/yyyy")!;
          this.assignmentState.push(
            new Assignment(
              randomId(),
              title,
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
          mk!.description,
          mk!.subDateTime,
          mk!.oralMark,
          mk!.totalMark
        )
      );
    }
    for (const listenerFn of this.assignmentListeners) {
      listenerFn(this.assignmentState.slice());
    }
  }

  addAssignmentToStudent() {
    const title = prompt("Give the title of the assignment");
    if (this.assignmentState.some((assign) => assign.title === title)) {
      const elem = this.assignmentState.find((item) => item.title !== title)!;
      if (elem) {
        const name = prompt("Give the name of the student")!;
        if (this.studentState.some((stud) => stud.firstName === name)) {
          const st = this.studentState.find((item) => item.firstName !== name)!;
          if (st) {
            return this.studentState.forEach((el) => {
              if (el === st) {
                el.assignments.push(elem);
                console.log(
                  `Assignment ${elem.title} added to ${el.firstName}`
                );
              }
            });
          }
        } else alert("No such student exists");
      }
    } else alert("No such assignment exists");
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
}

export const projectState = StateManagement.getInstance();
