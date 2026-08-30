import itDigitalBanking1 from "./it-digital-banking-1";
import itDigitalBanking2 from "./it-digital-banking-2";
import cybersecurity1 from "./cybersecurity-1";
import cybersecurity2 from "./cybersecurity-2";
import cybersecurity3 from "./cybersecurity-3";
import bizComm1 from "./biz-comm-1";
import bizComm2 from "./biz-comm-2";
import bizComm3 from "./biz-comm-3";

export const ASSESSMENTS = [
  itDigitalBanking1,
  itDigitalBanking2,
  cybersecurity1,
  cybersecurity2,
  cybersecurity3,
  bizComm1,
  bizComm2,
  bizComm3,
];

export const COURSES = [
  // week 6
  {
    id: "it-digital-banking",
    label: "IT, Digital Banking & Operational Risk",
    emoji: "💻",
    description:
      "How a modern bank runs, connects, and protects itself digitally — core banking, APIs, cloud, digital channels, KYC, fraud controls, data, and AI, seen through the risk and governance lens a banker needs.",
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity: Prevention, Response & Forensics",
    emoji: "🛡️",
    description:
      "From threat landscape to incident response — CIA triad, identity & access, social engineering, security controls and Zero Trust, then what happens when prevention fails: containment, digital forensics, chain of custody, and investigation.",
  },
  {
    id: "biz-comm",
    label: "Business Communication (by Priscilla)",
    emoji: "📢",
    description:
      "How to communicate effectively in a business context, including writing, presentations, and interpersonal communication skills.",
  },
];
