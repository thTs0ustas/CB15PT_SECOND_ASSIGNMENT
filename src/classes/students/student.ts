import { AssignInterface, StudentInterface } from "../types/types";
import { Students } from "./students";
import { projectState } from "../../state/state";

export class Student extends Students implements StudentInterface {
  assignments: AssignInterface[];
  private students: StudentInterface[];

  constructor(
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    tuitionFees: number,
    assignments: AssignInterface[]
  ) {
    super(firstName, lastName, dateOfBirth, tuitionFees);
    this.assignments = assignments;
    this.students = [];

    projectState.addListenersToStudent("studentListeners", (items) => {
      this.students = items;
      this.renderStudents();
    });
  }
  private renderStudents() {
    console.log(this.students);
    document.getElementsByClassName("studentState")[0].innerHTML = this.students
      .map((student: StudentInterface) => {
        return /*HTML*/ `
      <div>
      <p>First name: ${student.firstName}</p>
      <p>Last name: ${student.lastName}</p>
      <p>Date of birth: ${student.dateOfBirth}</p>
      <p>Tuition fees: ${student.tuitionFees}</p>
      </div>
      <hr/>
      `;
      })
      .join("");
  }
  addAssignment(assignmentsArray: AssignInterface[], title: string) {
    const element = assignmentsArray.find((item) => item.title !== title)!;
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
