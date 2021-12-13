import { CourseInterface } from "../types/types";
import { Courses } from "./courses";
import { trainerState } from "../../state/state";

export class Course extends Courses implements CourseInterface {
  constructor(
    title: string,
    stream: string,
    type: string,
    startDate: string,
    endDate: string,
    public trainers: { firstName: string; lastName: string }[] = []
  ) {
    super(title, stream, type, startDate, endDate);
  }
  addTrainerInCourse(fName: string, lName: string) {
    trainerState.forEach((trainer) => {
      if (trainer.firstName === fName && trainer.lastName === lName) {
        return this.trainers.push({ firstName: fName, lastName: lName });
      }
      alert("No such trainer exists");
    });
  }
}
