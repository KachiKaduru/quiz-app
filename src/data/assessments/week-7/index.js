import fintechTrends1 from "./fintech-trends-1";
import fintechTrends2 from "./fintech-trends-2";
import fintechTrends3 from "./fintech-trends-3";
import fintechTrends4 from "./fintech-trends-4";
import foreignOps1 from "./foreign-ops-1";
import foreignOps2 from "./foreign-ops-2";
import leadership1 from "./leadership-1";
import leadership2 from "./leadership-2";

export const ASSESSMENTS = [
  fintechTrends3,
  fintechTrends4,
  fintechTrends1,
  fintechTrends2,
  foreignOps1,
  foreignOps2,
  leadership1,
  leadership2,
];

export const COURSES = [
  {
    id: "fintech-trends",
    label: "Fintech Trends",
    emoji: "🚀",
    description: "Exploring the latest trends and innovations in the fintech industry.",
  },
  {
    id: "foreign-ops",
    label: "Foreign Operations",
    emoji: "🌐",
    description:
      "Understanding and managing international business operations. Please answer the both parts of the assessment (Part 1 and Part 2) to complete the course.",
  },
  {
    id: "leadership",
    label: "Effective Leadership",
    emoji: "🧭",
    description: "Developing essential leadership skills for the modern workplace.",
  },
];
