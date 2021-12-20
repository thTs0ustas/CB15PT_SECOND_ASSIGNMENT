import { CourseType } from "../types/types";

export class Courses {
  public id: string;
  public title: string;
  public stream: string;
  public type: CourseType;
  public startDate: string;
  public endDate: string;
  constructor(
    id: string,
    title: string,
    stream: string,
    type: CourseType,
    startDate: string,
    endDate: string
  ) {
    this.id = id;
    this.title = title;
    this.stream = stream;
    this.type = type;
    this.startDate = startDate;
    this.endDate = endDate;
  }
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
