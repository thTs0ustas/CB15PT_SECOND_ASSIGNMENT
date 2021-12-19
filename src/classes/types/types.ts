type PartOfCourse = "Java" | "C++" | "Javascript" | "Python";

interface AssignInterface {
  id: string;
  title: string;
  partOfCourse: PartOfCourse;
  description: string;
  subDateTime: string;
  oralMark: number;
  totalMark: number;
}

type TrainersInCourses = { firstName: string; lastName: string }[];

interface CourseInterface {
  id: string;
  title: string;
  stream: string;
  type: string;
  startDate: string;
  endDate: string;
  cost: number;
  trainers: TrainersInCourses;
  students: TrainersInCourses;
}

interface TrainersInterface {
  id: string;
  firstName: string;
  lastName: string;
  subject: string;
}
interface StudentInterface {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  tuitionFees: number;
  assignments: AssignInterface[];
  course: CourseInterface[];
}

type mockup = "is" | "isNot";

export {
  PartOfCourse,
  mockup,
  AssignInterface,
  TrainersInterface,
  StudentInterface,
  CourseInterface,
};
