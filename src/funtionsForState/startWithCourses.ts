let startAddingCourses = (howManyTimes: number) => {
  while (howManyTimes > 0) {
    if (howManyTimes === 0) return;
    let title: string = prompt("Input courses title")!;
    let steam: string = prompt("Input steam")!;
    let type: string = prompt("Input type of course")!;
    let startDate: string = prompt("Input start date of course in mm/dd/yyyy")!;
    let endDate: string = prompt("Input end date of course in mm/dd/yyyy")!;

    let course = new Course(
      title,
      steam,
      type,
      getDate(startDate),
      getDate(endDate),
      []
    );
    courseState.push(course);
    howManyTimes--;
  }

  document.getElementsByClassName("coursesState")[0].innerHTML = courseState
    .map(
      (course) => /*HTML*/ `
      <div>
        <p>Title: ${course.title}</p>
        <p>Stream: ${course.stream}</p>
        <p>Type: ${course.type}</p>
        <p>Start Date: ${course.startDate}</p>
        <p>End Date: ${course.endDate}</p>
        <ul>
        ${course.trainers.map(
          (trainer) =>
            `<li>Trainer:${trainer.firstName} ${trainer.lastName}</li>`
        )}
        </ul>
      </div>
      <hr/> 
      `
    )
    .join("");
};
