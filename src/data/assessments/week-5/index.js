import fraudControlsCompliance1 from "./fraud-controls-compliance-1";
import fraudControlsCompliance2 from "./fraud-controls-compliance-2";
import creditAnalysis1 from "./credit-analysis-1";
import creditAnalysis2 from "./credit-analysis-2";

export const ASSESSMENTS = [
  fraudControlsCompliance1,
  fraudControlsCompliance2,
  creditAnalysis1,
  creditAnalysis2,
];

export const COURSES = [
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
