import { CourseInterface } from "../types/types";
import { Courses } from "./courses";
import { projectState } from "../../state/stateManager";

export class Course extends Courses implements CourseInterface {
  constructor(
    id: string,
    title: string,
    stream: string,
    type: string,
    startDate: string,
    endDate: string,
    public trainers: { firstName: string; lastName: string }[] = []
  ) {
    super(id, title, stream, type, startDate, endDate);

    let courses: CourseInterface[] = [];

    projectState?.addListener((items: CourseInterface[]) => {
      courses = items;
      console.log(courses);
    });
  }
}
