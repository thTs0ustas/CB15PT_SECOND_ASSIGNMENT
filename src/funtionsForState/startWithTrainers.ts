import { Trainer } from "../classes";
import { trainerState } from "../state/state";

export let startAddingTrainers = (howManyTimes: number) => {
  while (howManyTimes > 0) {
    if (howManyTimes === 0) return;
    const fName: string = prompt("Input first name")!;
    const lName: string = prompt("Input last name")!;
    const subject: string = prompt("Input type of subject")!;

    const trainer = new Trainer(fName, lName, subject);
    trainerState.push(trainer);
    howManyTimes--;
  }
  document.getElementsByClassName("trainerState")[0].innerHTML = /*HTML*/ `<div>
  ${trainerState
    .map(
      (trainer: Trainer) => /*HTML*/ `
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
};
