
export class Students {
  constructor(
    public firstName: string,
    public lastName: string,
    public dateOfBirth: string,
    public tuitionFees: number
  ) {}
  get getFirstName() {
    return this.firstName;
  }
  set getFirstName(value: string) {
    this.firstName = value;
  }
  get getLastName() {
    return this.lastName;
  }
  set getLastName(value: string) {
    this.lastName = value;
  }
  get getDateOfBirth() {
    return this.dateOfBirth;
  }
  set getDateOfBirth(value: string) {
    this.dateOfBirth = value;
  }
  get getFees() {
    return this.tuitionFees;
  }
  set getFees(value: number) {
    this.tuitionFees = value;
  }
}

