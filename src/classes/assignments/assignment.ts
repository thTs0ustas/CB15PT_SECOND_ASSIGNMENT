import {AssignInterface} from "../types/types";
import {Assignments} from "./assingments";

export class Assignment extends Assignments implements AssignInterface {
    constructor(title: string, description: string, subDateTime: string) {
        super(title, description, subDateTime);
    }
}
