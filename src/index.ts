import { StateManagement } from "./state/stateManager";

let howManyTimesToAddStudents: number;
let howManyTimesToAddAssignments: number;
let howManyTimesToAddCourses: number;
let howManyTimesToAddTrainers: number;

class Events extends StateManagement {
  private static instance: Events;
  constructor() {
    super();
    document
      .getElementById("howManyTrainers")
      ?.addEventListener("click", () => {
        howManyTimesToAddTrainers = +prompt(
          "How many trainers do you want to add?"
        )!;
      });
    document.getElementById("add-trainers")!.addEventListener("click", () => {
      this.addNewTrainer(howManyTimesToAddTrainers, "isNot");
      howManyTimesToAddTrainers = 0;
    });
    document.getElementById("howManyCourses")?.addEventListener("click", () => {
      howManyTimesToAddCourses = +prompt(
        "How many courses do you want to add?"
      )!;
    });
    document.getElementById("add-courses")!.addEventListener("click", () => {
      this.addNewCourse(howManyTimesToAddCourses, "isNot");
      howManyTimesToAddCourses = 0;
    });
    document
      .getElementById("howManyAssignments")
      ?.addEventListener("click", () => {
        howManyTimesToAddAssignments = +prompt(
          "How many assignments do you want to add?"
        )!;
      });

    document.getElementById("add-assignment")!.addEventListener("click", () => {
      this.addNewAssignment(howManyTimesToAddAssignments, "isNot");
      howManyTimesToAddAssignments = 0;
    });
    document
      .getElementById("howManyStudents")
      ?.addEventListener("click", () => {
        howManyTimesToAddStudents = +prompt(
          "How many students do you want to add?"
        )!;
      });
    document.getElementById("add-students")!.addEventListener("click", () => {
      this.addNewStudent(howManyTimesToAddStudents, "isNot");
      howManyTimesToAddStudents = 0;
    });
    document
      .getElementById("studentState")!
      .addEventListener("click", () =>
        console.log("Students", this.studentState)
      );
    document
      .getElementById("trainerState")!
      .addEventListener("click", () =>
        console.log("Trainer", this.trainerState)
      );
    document
      .getElementById("courseState")!
      .addEventListener("click", () =>
        console.log("Courses", this.courseState)
      );
    document
      .getElementById("assignmentState")!
      .addEventListener("click", () =>
        console.log("Assignments", this.assignmentState)
      );
    document
      .getElementById("studentWithAssign")!
      .addEventListener("click", () => this.showStudentsWithAssign());
    document
      .getElementById("studentAssign")!
      .addEventListener("click", () => this.addAssignmentToStudent());
    document
      .getElementById("courseTrainers")!
      .addEventListener("click", () => this.addTrainerInCourse());
    document
      .getElementById("assignPerCourse")!
      .addEventListener("click", () => this.assignPerCourse());
    document
      .getElementById("studentPerCourse")!
      .addEventListener("click", () => this.showStudentsPerCourse());
    document
      .getElementById("stTakePart")!
      .addEventListener("click", () => this.takePartOnCourseSt());
    document
      .getElementById("trainersPerCourse")!
      .addEventListener("click", () => this.showTrainersPerCourse());
  }

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new Events();
    return this.instance;
  }
}

// tslint:disable-next-line:no-unused-expression
Events.getInstance();
