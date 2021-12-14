import { TrainersInterface } from "../types/types";

import { Trainers } from "./trainers";
import { projectState } from "../../state/state";

export class Trainer extends Trainers implements TrainersInterface {
  private trainers: TrainersInterface[];
  constructor(firstName: string, lastName: string, subject: string) {
    super(firstName, lastName, subject);

    this.trainers = [];

    projectState.addListenersToTrainer("studentListeners", (items) => {
      this.trainers = items;
      this.renderTrainers();
    });
  }

  private renderTrainers() {
    document.getElementsByClassName("trainerState")[0].innerHTML =
      /*HTML*/
      `<div>
        ${this.trainers
          .map(
            (trainer: TrainersInterface) => /*HTML*/ `
            <div>
            <p>First name: ${trainer.firstName}</p>
            <p>Last name: ${trainer.lastName}</p>
            <p>Subject: ${trainer.subject}</p>
            </div>
            `
          )
          .join("")}
      <hr/>
    </div>`;
  }
}
// takePartOnCourse(title: string) {
//     courseState.forEach((course) => {
//         // tslint:disable-next-line:no-unused-expression
//         course.title !== title||
//         course.trainers.push({
//             firstName: this.firstName,
//             lastName: this.lastName,
//         });
//     });
// }
