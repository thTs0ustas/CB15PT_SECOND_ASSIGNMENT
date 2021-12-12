import { getDate } from "..";
import { Assignment } from "../classes/assingments";
import { assignmentState } from "../state/state";

export let startAddingAssignments = (howManyTimes: number) => {
  alert(howManyTimes);
  while (howManyTimes > 0) {
    if (howManyTimes === 0) return;
    let title: string = prompt("Input assignment title")!;
    let description: string = prompt("Input assignment description")!;
    let submissionDate: string = prompt(
      "Input tsubmission date in mm/dd/yyyy"
    )!;

    let assignment = new Assignment(
      title,
      description,
      getDate(submissionDate)
    );
    assignmentState.push(assignment);
    howManyTimes--;
  }

  document.getElementsByClassName("assignmentState")[0].innerHTML =
    assignmentState
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
};
