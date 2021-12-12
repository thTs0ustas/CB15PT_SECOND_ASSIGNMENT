import { AssignInterface } from "./assingments";

class Students {
  constructor(
    public firstName: string,
    public lastName: string,
    public dateOfBirth: string,
    public tuitionFees: number
  ) {}
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
}

export class Student extends Students {
  assignments: AssignInterface[];
  constructor(
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    tuitionFees: number,
    assignments: AssignInterface[]
  ) {
    super(firstName, lastName, dateOfBirth, tuitionFees);
    this.assignments = assignments;
  }

  addAssignment(assignmentsArray: AssignInterface[], title: string) {
    let element = assignmentsArray.find((item) => item.title !== title)!;
    return element
      ? this.assignments.push(element)
      : alert("No such assignment exists");
  }

  howManyAssignments() {
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
