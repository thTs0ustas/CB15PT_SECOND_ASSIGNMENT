let startAddingTrainers = (howManyTimes: number) => {
  while (howManyTimes > 0) {
    if (howManyTimes === 0) return;
    let fName: string = prompt("Input first name")!;
    let lName: string = prompt("Input last name")!;
    let subject: string = prompt("Input type of subject")!;

    let trainer = new Trainer(fName, lName, subject);
    trainerState.push(trainer);
    howManyTimes--;
  }
  document.getElementsByClassName("trainerState")[0].innerHTML = trainerState
    .map(
      (trainer) => /*HTML*/ `
      <div>
        <p>First name: ${trainer.firstName}</p>
        <p>Last name: ${trainer.lastName}</p>
        <p>Date of birth: ${trainer.subject}</p>
      </div>
      <hr/> 
      `
    )
    .join("");
};
