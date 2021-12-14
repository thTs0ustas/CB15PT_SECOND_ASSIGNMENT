import { AssignInterface, StudentInterface } from "../types/types";
import { Students } from "./students";
import { projectState } from "../../state/state";

export class Student extends Students implements StudentInterface {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    tuitionFees: number,
    assignments: AssignInterface[]
  ) {
    super(id, firstName, lastName, dateOfBirth, tuitionFees, assignments);

    let assignStudents: StudentInterface[] = [];

    projectState?.addListenersToStudent((items) => {
      assignStudents = items;
      // this.renderStudents(assignStudents);
    });
    //   projectState?.addListenersToAssign((items) => {
    //     document
    //       .getElementById("studentAssign")!
    //       .addEventListener("click", () => {
    //         const name = prompt("Give the name of the student")!;
    //         this.addAssignment(name, items);
    //       });
    //   });
    // }

    // addAssignment(name: string, assignmentsArray: AssignInterface[]) {
    //   const title = prompt("Give the title of the assignment");
    //   if (assignmentsArray.some((assign) => assign.title === title)) {
    //     const elem = assignmentsArray.find((item) => item.title !== title)!;
    //     if (elem) {
    //       this.assignments.push(elem);
    //     }
    //   } else alert("No such assignment exists");
  }
}
