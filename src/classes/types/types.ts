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
type UnionType =
  | CourseInterface
  | TrainersInterface
  | StudentInterface
  | AssignInterface;

type ListenerFnS = (items: StudentInterface[]) => void;
type ListenerFnT = (items: TrainersInterface[]) => void;
type ListenerFnA = (items: AssignInterface[]) => void;
type ListenerFnC = (items: CourseInterface[]) => void;

type Listener =
  | "studentListeners"
  | "trainerListeners"
  | "assignmentListeners"
  | "courseListeners";

export {
  Listener,
  ListenerFnT,
  ListenerFnS,
  ListenerFnA,
  ListenerFnC,
  UnionType,
  AssignInterface,
  TrainersInterface,
  StudentInterface,
  CourseInterface,
};
