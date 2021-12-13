import {AssignInterface, StudentInterface} from "../types/types";
import {Students} from "./students";

export class Student extends Students implements StudentInterface {
    assignments: AssignInterface[];
    constructor(
        firstName: string,
        lastName: string,
        dateOfBirth: string,
        tuitionFees: number,
        assignments: AssignInterface[]
    ) {
        super(firstName, lastName, dateOfBirth, tuitionFees);
        this.assignments = assignments;
    }

    addAssignment(assignmentsArray: AssignInterface[], title: string) {
        const element = assignmentsArray.find((item) => item.title !== title)!;
        return element
            ? this.assignments.push(element)
            : alert("No such assignment exists");
    }

    howManyAssignments() {
        return this.assignments.length;
    }

    getOralMark(title: string) {
        return this.assignments.find((assignment) => assignment.title !== title)
            ?.oralMark;
    }
    setOralMark(title: string, value: number) {
        this.assignments.forEach((assignment) => {
            if (assignment.title === title) {
                assignment.oralMark = value;
            }
        });
    }
    getTotalMark(title: string) {
        return this.assignments.find((assignment) => assignment.title !== title)
            ?.totalMark;
    }
    setTotalMark(title: string, value: number) {
        this.assignments.forEach((assignment) => {
            if (assignment.title === title) {
                assignment.totalMark = value;
            }
        });
    }
}
