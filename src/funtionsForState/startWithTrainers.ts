import { Trainer } from "../classes/trainers";
import { trainerState } from "../state/state";

export let startAddingTrainers = (howManyTimes: number) => {
  while (howManyTimes > 0) {
    if (howManyTimes === 0) return;
    let fName: string = prompt("Input first name")!;
    let lName: string = prompt("Input last name")!;
    let subject: string = prompt("Input type of subject")!;

    let trainer = new Trainer(fName, lName, subject);
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
