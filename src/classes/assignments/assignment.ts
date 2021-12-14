import { AssignInterface } from "../types/types";
import { Assignments } from "./assingments";
import { projectState } from "../../state/state";

export class Assignment extends Assignments implements AssignInterface {
  private assignments: AssignInterface[];

  constructor(title: string, description: string, subDateTime: string) {
    super(title, description, subDateTime);
    this.assignments = [];

    projectState.addListenersToAssign("assignmentListeners", (items) => {
      this.assignments = items;
      this.renderAssignments();
    });
  }
  renderAssignments() {
    document.getElementsByClassName("assignmentState")[0].innerHTML =
      this.assignments
        .map(
          (assignment) => /*HTML*/ `
      <div>
        <p>Title: ${assignment.title}</p>
        <p>Decriptions: ${assignment.description}</p>
        <p>Submission date: ${assignment.subDateTime}</p>
      </div>
      <hr/>
      `
        )
        .join("");
  }
}
