interface AssignInterface {
  title: string;
  description: string;
  subDateTime: string;
  oralMark: number;
  totalMark: number;
}

type TrainersInCourses = { firstName: string; lastName: string }[];

interface CourseInterface {
  title: string;
  stream: string;
  type: string;
  startDate: string;
  endDate: string;
  trainers: TrainersInCourses;
}

interface TrainersInterface {
  firstName: string;
  lastName: string;
  subject: string;
}
interface StudentInterface {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  tuitionFees: number;
  assignments: AssignInterface[];
}

export {
  AssignInterface,
  TrainersInterface,
  StudentInterface,
  CourseInterface,
};
