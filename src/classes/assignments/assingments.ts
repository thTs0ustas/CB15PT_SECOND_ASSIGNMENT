export class Assignments {
  constructor(
    public title: string,
    public description: string,
    public subDateTime: string,
    public oralMark: number = 0,
    public totalMark: number = 0
  ) {}

  getTitle() {
    return `Assignment's title: ${this.title}`;
  }
  setTitle(newTitle: string) {
    this.title = newTitle;
  }
  getDescription() {
    return `Assignment's description: ${this.description}`;
  }
  setDescription(newDesc: string) {
    this.description = newDesc;
  }
  getSubDate() {
    return `Assignment's submission date: ${this.description}`;
  }
  setSubDate(newSubDate: string) {
    this.subDateTime = newSubDate;
  }
  getOralMark() {
    return this.oralMark;
  }
  setOralMark(updatedOralMark: number) {
    this.oralMark = updatedOralMark;
  }
  getTotalMark() {
    return this.totalMark;
  }
  setTotalMark(updatedTotalMark: number) {
    this.totalMark = updatedTotalMark;
  }
}
