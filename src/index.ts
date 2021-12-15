import { projectState } from "./state/state";

let howManyTimesToAddStudents: number;
let howManyTimesToAddTrainers: number;
let howManyTimesToAddCourses: number;
let howManyTimesToAddAssignments: number;

class Events {
  private static instance: Events;
  private constructor() {
    document
      .getElementById("howManyStudents")
      ?.addEventListener("click", () => {
        howManyTimesToAddStudents = +prompt(
          "How many students do you want to add?"
        )!;
      });
    document
      .getElementById("howManyTrainers")
      ?.addEventListener("click", () => {
        howManyTimesToAddTrainers = +prompt(
          "How many trainers do you want to add?"
        )!;
      });
    document.getElementById("howManyCourses")?.addEventListener("click", () => {
      howManyTimesToAddCourses = +prompt(
        "How many courses do you want to add?"
      )!;
    });
    document
      .getElementById("howManyAssignments")
      ?.addEventListener("click", () => {
        howManyTimesToAddAssignments = +prompt(
          "How many assignments do you want to add?"
        )!;
      });

    document
      .getElementsByClassName("add-students")[0]
      .addEventListener("click", () => {
        projectState.addNewStudent(howManyTimesToAddStudents, "isNot");
        howManyTimesToAddStudents = 0;
      });
    document
      .getElementsByClassName("add-trainers")[0]
      .addEventListener("click", () => {
        projectState.addNewTrainer(howManyTimesToAddTrainers, "isNot");
        howManyTimesToAddTrainers = 0;
      });
    document
      .getElementsByClassName("add-courses")[0]
      .addEventListener("click", () => {
        projectState.addNewCourse(howManyTimesToAddCourses, "isNot");
        howManyTimesToAddCourses = 0;
      });
    document
      .getElementsByClassName("add-assignment")[0]
      .addEventListener("click", () => {
        projectState.addNewAssignment(howManyTimesToAddAssignments, "isNot");
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
  }

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new Events();
    return this.instance;
  }
}

Events.getInstance();
