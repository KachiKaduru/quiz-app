import pmEssentials from "./pm-essentials";
import pmEssentialsAdvanced from "./pm-essentials-advanced";
import bankingBusiness1 from "./banking-business-1";
import bankingBusiness2 from "./banking-business-2";
import domesticBanking1 from "./domestic-banking-1";
import domesticBanking2 from "./domestic-banking-2";
import effectiveSelling from "./effective-selling";

// Add new assessments here as new weeks/courses are introduced.
const ASSESSMENTS = [
  pmEssentials,
  pmEssentialsAdvanced,
  bankingBusiness1,
  bankingBusiness2,
  domesticBanking1,
  domesticBanking2,
  effectiveSelling,
];

export default ASSESSMENTS;

export function getAssessmentById(id) {
  return ASSESSMENTS.find((a) => a.id === id);
}

export function getAssessmentsByCourse(weekId, courseId) {
  return ASSESSMENTS.filter((a) => a.weekId === weekId && a.courseId === courseId);
}
