interface TrainersInt {
  firstName: string;
  lastName: string;
  subject: string;
}

class Trainers implements TrainersInt {
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

class Trainer extends Trainers {
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
