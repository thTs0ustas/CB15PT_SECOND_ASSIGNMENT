import { CourseInterface } from "../types/types";
import { Courses } from "./courses";
import { projectState } from "../../state/state";

export class Course extends Courses implements CourseInterface {
  private courses: CourseInterface[] = [];
  constructor(
    title: string,
    stream: string,
    type: string,
    startDate: string,
    endDate: string,
    public trainers: { firstName: string; lastName: string }[] = []
  ) {
    super(title, stream, type, startDate, endDate);

    projectState.addListenersToCourse("courseListeners", (items) => {
      this.courses = items;
      this.renderCourses();
    });
  }
  private renderCourses() {
    document.getElementsByClassName("courseState")[0].innerHTML = this.courses
      .map(
        (course) => /*HTML*/ `
      <div>
        <p>Title: ${course.title}</p>
        <p>Stream: ${course.stream}</p>
        <p>Type: ${course.type}</p>
        <p>Start Date: ${course.startDate}</p>
        <p>End Date: ${course.endDate}</p>
        <ul>
        ${this.trainers.map(
          (trainer): string =>
            `<li>Trainer:${trainer.firstName} ${trainer.lastName}</li>`
        )}
        </ul>
      </div>
      <hr/>
      `
      )
      .join("");
  }
  // addTrainerInCourse(fName: string, lName: string) {
  //   trainerState.forEach((trainer) => {
  //     if (trainer.firstName === fName && trainer.lastName === lName) {
  //       return this.trainers.push({ firstName: fName, lastName: lName });
  //     }
  //     alert("No such trainer exists");
  //   });
  // }
}
