let startAddingCourses = (howManyTimes: number) => {
  alert(howManyTimes);
  while (howManyTimes > 0) {
    if (howManyTimes === 0) return;
    let fName: string = prompt("Input first name")!;
    let lName: string = prompt("Input last name")!;
    let subject: string = prompt("Input type of subject")!;

    // let course = new Course(fName, lName, subject);
    // assignmentState.push(course);
    howManyTimes--;
  }
  console.log(studentState);
  document.getElementsByClassName("coursesState")[0].innerHTML = courseState
    .map(
      (course) => /*HTML*/ `
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
