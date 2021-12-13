import {CourseInterface} from "../types/types";
import {Courses} from "./courses";

export class Course extends Courses implements CourseInterface {
    constructor(
        title: string,
        stream: string,
        type: string,
        startDate: string,
        endDate: string,
        public trainers: { firstName: string; lastName: string }[]
    ) {
        super(title, stream, type, startDate, endDate);
    }
}
