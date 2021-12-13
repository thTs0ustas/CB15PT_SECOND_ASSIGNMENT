import {TrainersInterface} from "../types/types";
import {courseState} from "../../state/state";
import {Trainers} from "./trainers";

export class Trainer extends Trainers implements TrainersInterface {
    constructor(firstName: string, lastName: string, subject: string) {
        super(firstName, lastName, subject);
    }
    takePartOnCourse(title: string) {
        courseState.forEach((course) => {
            // tslint:disable-next-line:no-unused-expression
            course.title !== title||
            course.trainers.push({
                firstName: this.firstName,
                lastName: this.lastName,
            });
        });
    }
}
