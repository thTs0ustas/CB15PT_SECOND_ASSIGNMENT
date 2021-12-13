import { Course, Trainer } from "../classes";
import { courseState } from "../state/state";
import { getDate } from "../index";

export let startAddingCourses = (howManyTimes: number) => {
  while (howManyTimes > 0) {
    if (howManyTimes === 0) return;
    const title: string = prompt("Input courses title")!;
    const steam: string = prompt("Input steam")!;
    const type: string = prompt("Input type of course")!;
    const startDate: string = prompt(
      "Input start date of course in mm/dd/yyyy"
    )!;
    const endDate: string = prompt("Input end date of course in mm/dd/yyyy")!;

    const course = new Course(
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

  document.getElementsByClassName("courseState")[0].innerHTML = courseState
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
          (trainer: Trainer) =>
            `<li>Trainer:${trainer.firstName} ${trainer.lastName}</li>`
        )}
        </ul>
      </div>
      <hr/>
      `
    )
    .join("");
};
