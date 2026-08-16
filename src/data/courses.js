// Courses are shared "subjects" across all weeks. A course only shows up
// under a week if there's at least one assessment for that (weekId, courseId) pair.
const COURSES = [
  {
    id: "project-management",
    label: "Project Management",
    emoji: "🗂️",
    description: "Portfolios, programs, risk, stakeholders & PM tools.",
  },
  {
    id: "banking-business",
    label: "Banking Business",
    emoji: "🏦",
    description: "Credit, deposits, unit vs branch banking, bank income.",
  },
  {
    id: "domestic-banking",
    label: "Domestic Banking",
    emoji: "🏛️",
    description: "Branch operations, vaults, clearing systems & banker's duty.",
  },
  {
    id: "effective-selling",
    label: "Effective Selling",
    emoji: "🤝",
    description: "Consultative selling, objection handling & client value.",
  },
  // week 5
  {
    id: "fraud-controls-compliance",
    label: "Fraud, Controls, AML & Legal Issues",
    emoji: "🕵️‍♂️",
    description:
      "Identifying and mitigating fraud risks, compliance requirements, and legal considerations.",
  },
  {
    id: "credit-analysis",
    label: "Credit Analysis",
    emoji: "📊",
    description: "Risk assessment, creditworthiness evaluation & loan structuring.",
  },
];

export default COURSES;

export function getCourseById(id) {
  return COURSES.find((c) => c.id === id);
}
