// Courses are shared "subjects" across all weeks. A course only shows up
// under a week if there's at least one assessment for that (weekId, courseId) pair.

import {COURSES as COURSES_WEEK_4} from "./assessments/week-4";
import {COURSES as COURSES_WEEK_5} from "./assessments/week-5";
import {COURSES as COURSES_WEEK_6} from "./assessments/week-6";
import {COURSES as COURSES_WEEK_7} from "./assessments/week-7";

const ALL_COURSES = [
  ...COURSES_WEEK_4,
  // week 5
  ...COURSES_WEEK_5,
  // week 6
  ...COURSES_WEEK_6,
  // week 7
  ...COURSES_WEEK_7,
];

export default ALL_COURSES;

export function getCourseById(id) {
  return ALL_COURSES.find((c) => c.id === id);
}
