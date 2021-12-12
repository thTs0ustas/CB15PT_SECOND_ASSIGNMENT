import { startAddingAssignments } from "./funtionsForState/startWithAssignments";
import { startAddingCourses } from "./funtionsForState/startWithCourses";
import { startAddingStudents } from "./funtionsForState/startWithStudents";
import { startAddingTrainers } from "./funtionsForState/startWithTrainers";

export let getDate = (date: string) =>
  new Date(date).toISOString().split("T")[0];

let howManyTimesToAddStudents: number;
let howManyTimesToAddTrainers: number;
let howManyTimesToAddCourses: number;
let howManyTimesToAddAssignments: number;

document.getElementById("howManyStudents")?.addEventListener("click", () => {
  howManyTimesToAddStudents = +prompt("How many students do you want to add?")!;
});
document.getElementById("howManyTrainers")?.addEventListener("click", () => {
  howManyTimesToAddTrainers = +prompt("How many trainers do you want to add?")!;
});
document.getElementById("howManyCourses")?.addEventListener("click", () => {
  howManyTimesToAddCourses = +prompt("How many courses do you want to add?")!;
});
document.getElementById("howManyAssignments")?.addEventListener("click", () => {
  howManyTimesToAddAssignments = +prompt(
    "How many assignments do you want to add?"
  )!;
});

document
  .getElementsByClassName("add-students")[0]
  .addEventListener("click", () =>
    startAddingStudents(howManyTimesToAddStudents)
  );
document
  .getElementsByClassName("add-trainers")[0]
  .addEventListener("click", () =>
    startAddingTrainers(howManyTimesToAddTrainers)
  );
document
  .getElementsByClassName("add-assignment")[0]
  .addEventListener("click", () =>
    startAddingAssignments(howManyTimesToAddAssignments)
  );
document
  .getElementsByClassName("add-courses")[0]
  .addEventListener("click", () =>
    startAddingCourses(howManyTimesToAddCourses)
  );

//
