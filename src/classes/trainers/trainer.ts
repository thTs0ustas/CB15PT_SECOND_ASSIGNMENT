import { TrainersInterface } from "../types/types";

import { Trainers } from "./trainers";

export class Trainer extends Trainers implements TrainersInterface {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    subject: string
  ) {
    super(id, firstName, lastName, subject);
  }
}
