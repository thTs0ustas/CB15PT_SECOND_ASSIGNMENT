import { getDate, randomId } from "..";
import { Assignment, Student, Trainer, Course } from "../classes";
import {
  AssignInterface,
  CourseInterface,
  ListenerFnA,
  ListenerFnC,
  ListenerFnS,
  ListenerFnT,
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

  studentState: StudentInterface[] = studentMockup.map(
    (mockup) =>
      new Student(
        mockup.id,
        mockup.firstName,
        mockup.lastName,
        mockup.dateOfBirth,
        mockup.tuitionFees,
        mockup.assignments
      )
  );
  trainerState: TrainersInterface[] = trainerMockup.map(
    (mockup) =>
      new Trainer(mockup.id, mockup.firstName, mockup.lastName, mockup.subject)
  );
  assignmentState: AssignInterface[] = assignMockup.map(
    (mockup) =>
      new Assignment(
        mockup.id,
        mockup.title,
        mockup.description,
        mockup.subDateTime,
        mockup.oralMark,
        mockup.totalMark
      )
  );
  courseState: CourseInterface[] = courseMockup.map(
    (mockup) =>
      new Course(
        mockup.id,
        mockup.title,
        mockup.stream,
        mockup.type,
        mockup.startDate,
        mockup.endDate
      )
  );

  // singleton
  private static instance: StateManagement;

  private constructor() {
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

  addNewStudent(howManyTimes: number) {
    while (howManyTimes > 0) {
      if (howManyTimes === 0) return;
      const fName: string = prompt("Input first name")!;
      const lName: string = prompt("Input last name")!;
      const date: string = prompt("Input birth date in mm/dd/yyyy form")!;

      const newStudent = new Student(
        randomId(),
        fName,
        lName,
        getDate(date),
        0,
        []
      );

      this.studentState.push(newStudent);

      this.studentListeners.forEach((listenerFn) =>
        listenerFn(this.studentState.slice())
      );

      this.assignmentListeners.forEach((fn) =>
        fn(this.assignmentState.slice())
      );

      howManyTimes--;
    }
  }

  addNewTrainer(howManyTimes: number) {
    while (howManyTimes > 0) {
      if (howManyTimes === 0) return;
      const fName: string = prompt("Input first name")!;
      const lName: string = prompt("Input last name")!;
      const subject: string = prompt("Input type of subject")!;

      const newTrainer = new Trainer(randomId(), fName, lName, subject);
      this.trainerState.push(newTrainer);

      this.trainerListeners.forEach((listenerFn) =>
        listenerFn(this.trainerState.slice())
      );

      howManyTimes--;
    }
  }

  addNewCourse(howManyTimes: number) {
    while (howManyTimes > 0) {
      if (howManyTimes === 0) return;
      const title: string = prompt("Input courses title")!;
      const steam: string = prompt("Input steam")!;
      const type: string = prompt("Input type of course")!;
      const startDate: string = prompt(
        "Input start date of course in mm/dd/yyyy"
      )!;
      const endDate: string = prompt("Input end date of course in mm/dd/yyyy")!;

      const newCourse = new Course(
        randomId(),
        title,
        steam,
        type,
        getDate(startDate),
        getDate(endDate),
        []
      );
      this.courseState.push(newCourse);

      for (const listenerFn of this.courseListeners) {
        listenerFn(this.courseState.slice());
      }

      howManyTimes--;
    }
  }

  addNewAssignment(howManyTimes: number) {
    while (howManyTimes > 0) {
      if (howManyTimes === 0) return;
      const title: string = prompt("Input assignment title")!;
      const description: string = prompt("Input assignment description")!;
      const submissionDate: string = prompt(
        "Input submission date in mm/dd/yyyy"
      )!;

      const newAssignment = new Assignment(
        randomId(),
        title,
        description,
        getDate(submissionDate),
        0,
        0
      );
      this.assignmentState.push(newAssignment);

      for (const listenerFn of this.assignmentListeners) {
        listenerFn(this.assignmentState.slice());
      }

      howManyTimes--;
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
}

export const projectState = StateManagement.getInstance();
