let getDate = (date: string) => new Date(date).toISOString().split("T")[0];

let howManyTimesToAddStudents: number;
let howManyTimesToAddTrainers: number;
let howManyTimesToAddCourses: number;
let howManyTimesToAddAssignments: number;

document.getElementById("howManyStudents")?.addEventListener("click", () => {
  howManyTimesToAddStudents = +prompt(
    "How many students do you want to add?",
    "0"
  )!;
});
document.getElementById("howManyTrainers")?.addEventListener("click", () => {
  howManyTimesToAddTrainers = +prompt(
    "How many trainers do you want to add?",
    "0"
  )!;
});
document.getElementById("howManyCourses")?.addEventListener("click", () => {
  howManyTimesToAddCourses = +prompt(
    "How many courses do you want to add?",
    "0"
  )!;
});
document.getElementById("howManyAssignments")?.addEventListener("click", () => {
  howManyTimesToAddAssignments = +prompt(
    "How many assignments do you want to add?",
    "0"
  )!;
});

document
  .getElementsByClassName("add-students")[0]
  .addEventListener("click", () =>
    startAddingStudents(howManyTimesToAddStudents)
  );
