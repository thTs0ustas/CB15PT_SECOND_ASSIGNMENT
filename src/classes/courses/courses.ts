export class Courses {
  constructor(
    public id: string,
    public title: string,
    public stream: string,
    public type: string,
    public startDate: string,
    public endDate: string
  ) {}
  get getId() {
    return this.id;
  }
  get getTitle() {
    return this.title;
  }
  get getStream() {
    return this.stream;
  }
  get getType() {
    return this.type;
  }
  get getStartDate() {
    return this.startDate;
  }
  get getEndDate() {
    return this.endDate;
  }
}
