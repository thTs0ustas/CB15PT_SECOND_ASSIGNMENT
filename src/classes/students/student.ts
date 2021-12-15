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
      console.log(assignStudents);
    });

    projectState?.addListenersToAssign((assign) => {
      console.log(assign);
    });
  }
}
