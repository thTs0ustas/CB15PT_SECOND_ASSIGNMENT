import { TrainersInterface } from "../types/types";

import { Trainers } from "./trainers";
import { projectState } from "../../state/stateManager";

export class Trainer extends Trainers implements TrainersInterface {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    subject: string
  ) {
    super(id, firstName, lastName, subject);

    let trainers: TrainersInterface[] = [];

    projectState?.addListenersToTrainer((items) => {
      trainers = items;
      console.log(trainers);
    });
  }

  takePartOnCourse() {
    const title = prompt("In which course do you want to take part");
    const exists = projectState.courseState.some(
      (course) => course.title === title
    );
    if (exists) {
      projectState.courseState.forEach((course) => {
        // tslint:disable-next-line:no-unused-expression
        course.title !== title ||
          course.trainers.push({
            firstName: this.firstName,
            lastName: this.lastName,
          });
      });
    } else alert("Not such course");
  }
}
