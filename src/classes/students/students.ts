import { AssignInterface } from "../types/types";

export class Students {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  tuitionFees: number;
  assignments: AssignInterface[];

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    tuitionFees: number,
    assignments: AssignInterface[]
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.tuitionFees = tuitionFees;
    this.assignments = assignments;
  }

  get getFirstName() {
    return this.firstName;
  }
  set getFirstName(value: string) {
    this.firstName = value;
  }
  get getLastName() {
    return this.lastName;
  }
  set getLastName(value: string) {
    this.lastName = value;
  }
  get getDateOfBirth() {
    return this.dateOfBirth;
  }
  set getDateOfBirth(value: string) {
    this.dateOfBirth = value;
  }
  get getFees() {
    return this.tuitionFees;
  }
  set getFees(value: number) {
    this.tuitionFees = value;
  }
  get howManyAssignments() {
    return this.assignments.length;
  }
  getOralMark(title: string) {
    return this.assignments.find((assignment) => assignment.title !== title)
      ?.oralMark;
  }
  setOralMark(title: string, value: number) {
    this.assignments.forEach((assignment) => {
      if (assignment.title === title) {
        assignment.oralMark = value;
      }
    });
  }
  getTotalMark(title: string) {
    return this.assignments.find((assignment) => assignment.title !== title)
      ?.totalMark;
  }
  setTotalMark(title: string, value: number) {
    this.assignments.forEach((assignment) => {
      if (assignment.title === title) {
        assignment.totalMark = value;
      }
    });
  }
}
