// week 4
import pmEssentials from "./week-4/pm-essentials";
import pmEssentialsAdvanced from "./week-4/pm-essentials-advanced";
import bankingBusiness1 from "./week-4/banking-business-1";
import bankingBusiness2 from "./week-4/banking-business-2";
import domesticBanking1 from "./week-4/domestic-banking-1";
import domesticBanking2 from "./week-4/domestic-banking-2";
import effectiveSelling from "./week-4/effective-selling";
// week 5
import fraudControlsCompliance1 from "./week-5/fraud-controls-compliance-1";
import fraudControlsCompliance2 from "./week-5/fraud-controls-compliance-2";
import creditAnalysis1 from "./week-5/credit-analysis-1";
import creditAnalysis2 from "./week-5/credit-analysis-2";
// week 6
import itDigitalBanking1 from "./week-6/it-digital-banking-1";
import itDigitalBanking2 from "./week-6/it-digital-banking-2";
import cybersecurity1 from "./week-6/cybersecurity-1";
import cybersecurity2 from "./week-6/cybersecurity-2";
import cybersecurity3 from "./week-6/cybersecurity-3";

// Add new assessments here as new weeks/courses are introduced.
const ASSESSMENTS = [
  pmEssentials,
  pmEssentialsAdvanced,
  bankingBusiness1,
  bankingBusiness2,
  domesticBanking1,
  domesticBanking2,
  effectiveSelling,
  // week 5
  fraudControlsCompliance1,
  fraudControlsCompliance2,
  creditAnalysis1,
  creditAnalysis2,
  // week 6
  itDigitalBanking1,
  itDigitalBanking2,
  cybersecurity1,
  cybersecurity2,
  cybersecurity3,
];

export default ASSESSMENTS;

export function getAssessmentById(id) {
  return ASSESSMENTS.find((a) => a.id === id);
}

export function getAssessmentsByCourse(weekId, courseId) {
  return ASSESSMENTS.filter((a) => a.weekId === weekId && a.courseId === courseId);
}
