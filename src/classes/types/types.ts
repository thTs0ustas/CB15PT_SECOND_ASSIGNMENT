export type PartOfCourse = "Java" | "C++" | "Javascript" | "Python";

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
}

// type ListenerFnS = (items: StudentInterface[]) => void;
// type ListenerFnT = (items: TrainersInterface[]) => void;
// type ListenerFnA = (items: AssignInterface[]) => void;
// type ListenerFnC = (items: CourseInterface[]) => void;

type mockup = "is" | "isNot";

export {
  mockup,
  // ListenerFnT,
  // ListenerFnS,
  // ListenerFnA,
  // ListenerFnC,
  AssignInterface,
  TrainersInterface,
  StudentInterface,
  CourseInterface,
};
