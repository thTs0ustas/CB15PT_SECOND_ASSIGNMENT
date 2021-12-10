let startAddingStudents = (howManyTimes: number) => {
  alert(howManyTimes);
  while (howManyTimes > 0) {
    if (howManyTimes === 0) return;
    let fName: string = prompt("Input first name")!;
    let lName: string = prompt("Input last name")!;
    let date: string = prompt("Input birth date in mm/dd/yyyy form")!;

    let student = new Student(fName, lName, getDate(date), 2000, []);
    studentState.push(student);
    howManyTimes--;
  }
  console.log(studentState);
  document.getElementsByClassName("studentState")[0].innerHTML = studentState
    .map((student) => {
      return /*HTML*/ `
      <div>
      <p>First name: ${student.firstName}</p>
      <p>Last name: ${student.lastName}</p>
      <p>Date of birth: ${student.dateOfBirth}</p>
      <p>Tuitio fees: ${student.tuitionFees}</p>
      </div>
      <hr/>
      `;
    })
    .join("");
};
