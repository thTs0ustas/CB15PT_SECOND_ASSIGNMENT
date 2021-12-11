let startAddingAssignments = (howManyTimes: number) => {
  alert(howManyTimes);
  while (howManyTimes > 0) {
    if (howManyTimes === 0) return;
    let title: string = prompt("Input first name")!;
    let description: string = prompt("Input last name")!;
    let submissionDate: string = prompt("Input type of subject")!;

    let assignment = new Assignment(
      title,
      description,
      getDate(submissionDate)
    );
    assignmentState.push(assignment);
    howManyTimes--;
  }
  console.log(assignmentState);
  document.getElementsByClassName("assignmentState")[0].innerHTML =
    assignmentState
      .map(
        (assignment) => /*HTML*/ `
      <div>
        <p>Title: ${assignment.title}</p>
        <p>Decriptions: ${assignment.description}</p>
        <p>Submission date: ${assignment.subDateTime}</p>
      </div>
      <hr/> 
      `
      )
      .join("");
};
