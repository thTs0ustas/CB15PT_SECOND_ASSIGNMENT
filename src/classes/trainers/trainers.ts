export class Trainers {
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
