import pmEssentials from "./pm-essentials";
import pmEssentialsAdvanced from "./pm-essentials-advanced";
import bankingBusiness1 from "./banking-business-1";
import bankingBusiness2 from "./banking-business-2";
import domesticBanking1 from "./domestic-banking-1";
import domesticBanking2 from "./domestic-banking-2";
import effectiveSelling from "./effective-selling";

export const ASSESSMENTS = [
  pmEssentials,
  pmEssentialsAdvanced,
  bankingBusiness1,
  bankingBusiness2,
  domesticBanking1,
  domesticBanking2,
  effectiveSelling,
];

export const COURSES = [
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
