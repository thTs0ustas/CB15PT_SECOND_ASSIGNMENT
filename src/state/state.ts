import { getDate } from "..";
import { Assignment, Student } from "../classes";
import {
  AssignInterface,
  CourseInterface,
  Listener,
  ListenerFnA,
  ListenerFnC,
  ListenerFnS,
  ListenerFnT,
  StudentInterface,
  TrainersInterface,
  UnionType,
} from "../classes/types/types";
import { Trainer } from "../classes/trainers";
import { Course } from "../classes/courses";

class StateManagement {
  private studentListeners: ListenerFnS[] = [];
  private trainerListeners: ListenerFnT[] = [];
  private assignmentListeners: ListenerFnA[] = [];
  private courseListeners: ListenerFnC[] = [];

  private studentState: StudentInterface[] = [];
  private trainerState: TrainersInterface[] = [];
  private assignmentState: AssignInterface[] = [];
  private courseState: CourseInterface[] = [];

  // singleton
  private static instance: StateManagement;

  private constructor() {}

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new StateManagement();
    return this.instance;
  }

  addListenersToStudent(listener: Listener, listenerFn: ListenerFnS) {
    this.studentListeners.push(listenerFn);
  }
  addListenersToTrainer(listener: Listener, listenerFn: ListenerFnT) {
    this.trainerListeners.push(listenerFn);
  }
  addListenersToCourse(listener: Listener, listenerFn: ListenerFnC) {
    this.courseListeners.push(listenerFn);
  }
  addListenersToAssign(listener: Listener, listenerFn: ListenerFnA) {
    this.assignmentListeners.push(listenerFn);
  }

  addNewStudent(howManyTimes: number) {
    while (howManyTimes > 0) {
      if (howManyTimes === 0) return;
      const fName: string = prompt("Input first name")!;
      const lName: string = prompt("Input last name")!;
      const date: string = prompt("Input birth date in mm/dd/yyyy form")!;

      const newStudent = new Student(fName, lName, getDate(date), 0, []);
      this.studentState.push(newStudent);

      for (const listenerFn of this.studentListeners) {
        listenerFn(this.studentState.slice());
      }

      howManyTimes--;
    }
  }

  addNewTrainer(howManyTimes: number) {
    while (howManyTimes > 0) {
      if (howManyTimes === 0) return;
      const fName: string = prompt("Input first name")!;
      const lName: string = prompt("Input last name")!;
      const subject: string = prompt("Input type of subject")!;

      const newTrainer = new Trainer(fName, lName, subject);
      this.trainerState.push(newTrainer);

      for (const listenerFn of this.trainerListeners) {
        listenerFn(this.trainerState.slice());
      }

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
        title,
        description,
        getDate(submissionDate)
      );
      this.assignmentState.push(newAssignment);

      for (const listenerFn of this.assignmentListeners) {
        listenerFn(this.assignmentState.slice());
      }

      howManyTimes--;
    }
  }
}

export const projectState = StateManagement.getInstance();
