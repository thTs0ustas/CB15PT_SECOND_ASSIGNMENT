import { projectState } from "./state/state";

export let getDate = (date: string) =>
  new Date(date).toISOString().split("T")[0];

export const randomId = () => {
  const hashId = [];
  const char =
    "abcdefghijklmnABCDEFGHIJKLMNOPQRSTUVWXYZopqrstuvwxyz1234567890".split("");
  while (hashId.length <= 5) {
    hashId.push(char[Math.floor(Math.random() * char.length)]);
  }
  return hashId.join("");
};

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
  .addEventListener("click", () => {
    projectState.addNewStudent(howManyTimesToAddStudents);
    howManyTimesToAddStudents = 0;
  });
document
  .getElementsByClassName("add-trainers")[0]
  .addEventListener("click", () => {
    projectState.addNewTrainer(howManyTimesToAddTrainers);
    howManyTimesToAddTrainers = 0;
  });
document
  .getElementsByClassName("add-courses")[0]
  .addEventListener("click", () => {
    projectState.addNewCourse(howManyTimesToAddCourses);
    howManyTimesToAddCourses = 0;
  });
document
  .getElementsByClassName("add-assignment")[0]
  .addEventListener("click", () => {
    projectState.addNewAssignment(howManyTimesToAddAssignments);
    howManyTimesToAddAssignments = 0;
  });
document
  .getElementById("studentState")!
  .addEventListener("click", () =>
    console.log("Students", projectState.studentState)
  );
document
  .getElementById("trainerState")!
  .addEventListener("click", () =>
    console.log("Trainer", projectState.trainerState)
  );
document
  .getElementById("courseState")!
  .addEventListener("click", () =>
    console.log("Courses", projectState.courseState)
  );
document
  .getElementById("assignmentState")!
  .addEventListener("click", () =>
    console.log("Assignments", projectState.assignmentState)
  );
