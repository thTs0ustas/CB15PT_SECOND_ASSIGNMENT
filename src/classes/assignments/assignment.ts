import { AssignInterface } from "../types/types";
import { Assignments } from "./assingments";
import { projectState } from "../../state/stateManager";

export class Assignment extends Assignments implements AssignInterface {
  constructor(
    id: string,
    title: string,
    description: string,
    subDateTime: string,
    oralMark: number,
    totalMark: number
  ) {
    super(id, title, description, subDateTime, oralMark, totalMark);
    let assignments: AssignInterface[] = [];

    projectState?.addListenersToAssign((items) => {
      assignments = items;
      console.log(assignments);
    });
  }
}
