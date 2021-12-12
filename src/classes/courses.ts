class Courses {
  constructor(
    public title: string,
    public stream: string,
    public type: string,
    public startDate: string,
    public endDate: string
  ) {}
}

export class Course extends Courses {
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
