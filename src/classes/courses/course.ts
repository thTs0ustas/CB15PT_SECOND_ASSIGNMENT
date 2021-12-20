import { CourseInterface, CourseType } from "../types/types";
import { Courses } from "./courses";

export class Course extends Courses implements CourseInterface {
  constructor(
    id: string,
    title: string,
    stream: string,
    type: CourseType,
    startDate: string,
    endDate: string,

    public cost: number = 0,
    public trainers: { firstName: string; lastName: string }[] = [],
    public students: { firstName: string; lastName: string }[] = []
  ) {
    super(id, title, stream, type, startDate, endDate);
  }
}
