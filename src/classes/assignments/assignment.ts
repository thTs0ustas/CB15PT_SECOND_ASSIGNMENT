import { AssignInterface, PartOfCourse } from "../types/types";
import { Assignments } from "./assingments";

export class Assignment extends Assignments implements AssignInterface {
  constructor(
    id: string,
    title: string,
    partOfCourse: PartOfCourse,
    description: string,
    subDateTime: string,
    oralMark: number,
    totalMark: number
  ) {
    super(
      id,
      title,
      partOfCourse,
      description,
      subDateTime,
      oralMark,
      totalMark
    );
  }
}
