import { courseState } from "../state/state";
import { TrainersInterface } from "./types/types";

class Trainers {
  constructor(
    public firstName: string,
    public lastName: string,
    public subject: string
  ) {}

  get getFirstName() {
    return this.firstName;
  }
  set getFirstName(newName) {
    this.firstName = newName;
  }
  get getLastName() {
    return this.lastName;
  }
  set getLastName(newName) {
    this.lastName = newName;
  }
}

export class Trainer extends Trainers implements TrainersInterface {
  constructor(firstName: string, lastName: string, subject: string) {
    super(firstName, lastName, subject);
  }
  takePartOnCourse(title: string) {
    courseState.forEach((course) => {
      course.title !== title;
      course.trainers.push({
        firstName: this.firstName,
        lastName: this.lastName,
      });
    });
  }
}
