import {
  AssignInterface,
  CourseInterface,
  StudentInterface,
} from "../types/types";
import { Students } from "./students";

export class Student extends Students implements StudentInterface {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    tuitionFees: number,
    assignments: AssignInterface[],
    public course: CourseInterface[]
  ) {
    super(id, firstName, lastName, dateOfBirth, tuitionFees, assignments);
  }
}
