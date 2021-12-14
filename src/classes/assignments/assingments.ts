export class Assignments {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public subDateTime: string,
    public oralMark: number,
    public totalMark: number
  ) {}

  get getTitle() {
    return `Assignment's title: ${this.title}`;
  }
  set setTitle(newTitle: string) {
    this.title = newTitle;
  }
  get getDescription() {
    return `Assignment's description: ${this.description}`;
  }
  set setDescription(newDesc: string) {
    this.description = newDesc;
  }
  get getSubDate() {
    return `Assignment's submission date: ${this.subDateTime}`;
  }
  set setSubDate(newSubDate: string) {
    this.subDateTime = newSubDate;
  }
  get getOralMark() {
    return this.oralMark;
  }
  set setOralMark(updatedOralMark: number) {
    this.oralMark = updatedOralMark;
  }
  get getTotalMark() {
    return this.totalMark;
  }
  set setTotalMark(updatedTotalMark: number) {
    this.totalMark = updatedTotalMark;
  }
}
