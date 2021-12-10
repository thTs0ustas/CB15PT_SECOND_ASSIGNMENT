interface AssignInterface {
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
    public oralMark: number,
    public totalMark: number
  ) {}
}
