export interface AssignInterface {
  title: string;
  description: string;
  subDateTime: string;
  oralMark: number;
  totalMark: number;
}

class Assignments implements AssignInterface {
  constructor(
    public title: string,
    public description: string,
    public subDateTime: string,
    public oralMark: number = 0,
    public totalMark: number = 0
  ) {}
  // getters and setters

  get getTitle() {
    return `Assignment's title: ${this.title}`;
  }
  set getTitle(newTitle) {
    this.title = newTitle;
  }
  get getDescription() {
    return `Assignment's description: ${this.description}`;
  }
  set getDescription(newDesc) {
    this.description = newDesc;
  }
  get getSubDate() {
    return `Assignment's submission date: ${this.description}`;
  }
  set getSubDate(newSubDate) {
    this.subDateTime = newSubDate;
  }
  get getOralMark() {
    return this.oralMark;
  }
  set getOralMark(updatedOralMark: number) {
    this.oralMark = updatedOralMark;
  }
  get getTotalMark() {
    return this.totalMark;
  }
  set getTotalMark(updatedtotalMark: number) {
    this.totalMark = updatedtotalMark;
  }
}

export class Assignment extends Assignments {
  constructor(title: string, description: string, subDateTime: string) {
    super(title, description, subDateTime);
  }
}
