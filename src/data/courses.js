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
];

export default COURSES;

export function getCourseById(id) {
  return COURSES.find((c) => c.id === id);
}
