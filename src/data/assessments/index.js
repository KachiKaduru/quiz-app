import {ASSESSMENTS as ASSESSMENTS_WEEK_4} from "./week-4";
import {ASSESSMENTS as ASSESSMENTS_WEEK_5} from "./week-5";
import {ASSESSMENTS as ASSESSMENTS_WEEK_6} from "./week-6";
import {ASSESSMENTS as ASSESSMENTS_WEEK_7} from "./week-7";

// Add new assessments here as new weeks/courses are introduced.
const ASSESSMENTS = [
  // week 4
  ...ASSESSMENTS_WEEK_4,
  // week 5
  ...ASSESSMENTS_WEEK_5,
  // week 6
  ...ASSESSMENTS_WEEK_6,
  // week 7
  ...ASSESSMENTS_WEEK_7,
];

export default ASSESSMENTS;

export function getAssessmentById(id) {
  return ASSESSMENTS.find((a) => a.id === id);
}

export function getAssessmentsByCourse(weekId, courseId) {
  return ASSESSMENTS.filter((a) => a.weekId === weekId && a.courseId === courseId);
}
