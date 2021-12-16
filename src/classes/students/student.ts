import { AssignInterface, StudentInterface } from "../types/types";
import { Students } from "./students";
import { projectState } from "../../state/stateManager";

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

    let assignStudents: AssignInterface[] = [];

    projectState?.addListener((items: AssignInterface[]) => {
      assignStudents = items;
      console.log(assignStudents);
    });

    projectState?.addListener((assign: AssignInterface[]) => {
      console.log(assign);
    });
  }
}
