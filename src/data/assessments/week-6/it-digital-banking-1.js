export default {
  id: "it-digital-banking-1",
  title: "IT, Digital Banking & Operational Risk — Practice Questions (Set 1)",
  weekId: "week-6",
  courseId: "it-digital-banking",
  description:
    "Concept-distinction questions built around the facilitator's 'Assessment Lens' guidance — covering Systems, How Customers Bank, Information Security, Enterprise Risk, Layers of Control and Data.",
  questions: [
    {
      text: "A customer initiates a transfer in the mobile app. The app shows an error, but the customer sees no debit on their account. Following the Assessment Lens guidance on this exact scenario, what should you NOT assume?",
      options: [
        "That the customer's phone has no internet connection",
        "That the core banking system has failed, simply because the mobile app showed an error",
        "That the transaction may need to be reversed",
        "That the customer should be advised to check their balance",
      ],
      correctIndex: 1,
    },
    {
      text: "In the technology stack of a modern bank, if a customer complains that the mobile app 'looks broken' but transactions are still processing and recording correctly, this MOST likely points to an issue at which layer?",
      options: [
        "Core banking",
        "Digital channels/interface layer",
        "Data and analytics layer",
        "Infrastructure (cloud/servers/networks)",
      ],
      correctIndex: 1,
    },
    {
      text: "Why does the manual caution against treating a 'technically impressive app' as sufficient evidence of banking reliability?",
      options: [
        "Because apps are always less secure than core banking systems",
        "Because the customer-facing interface can look polished while the underlying transaction-processing engine remains the true determinant of reliability",
        "Because mobile apps do not require any testing",
        "Because core banking systems no longer need governance once an app exists",
      ],
      correctIndex: 1,
    },
    {
      text: "A fintech asks a bank for access to a specific service via an API. Which response best reflects the 'controlled doorway' principle taught?",
      options: [
        "Grant full access to the bank's internal environment since the fintech is a partner",
        "Refuse all access since APIs cannot be trusted",
        "Expose only the specific data/service required, under defined rules, to the specific party, rather than open internal access",
        "Grant access only if the fintech is a competitor bank",
      ],
      correctIndex: 2,
    },
    {
      text: "A trainee claims: 'Open banking means any third party can freely pull any customer's data once the bank goes live with APIs.' Which correction reflects the Assessment Lens on this topic?",
      options: [
        "This is correct — that is the entire purpose of open banking",
        "Open banking still requires consent, security, governance and applicable regulatory requirements; 'open' does not mean 'unrestricted'",
        "Open banking only applies to corporate customers, not retail",
        "Open banking eliminates the need for any API controls",
      ],
      correctIndex: 1,
    },
    {
      text: "Which of the following is the clearest example of embedded finance, as distinct from a bank simply offering a new digital channel?",
      options: [
        "A bank launches a redesigned internet banking portal",
        "A bank introduces USSD banking for feature phones",
        "A financing option appears at the checkout of an e-commerce site, powered by a bank in the background",
        "A bank opens a new digital-only branch",
      ],
      correctIndex: 2,
    },
    {
      text: "A trainee argues that 'moving workloads to the cloud automatically improves the bank's security posture.' What is the flaw in this reasoning per the Assessment Lens?",
      options: [
        "Cloud computing cannot be used by regulated banks at all",
        "Cloud changes the risk profile (introducing considerations like vendor risk and compliance) but does not eliminate the need for governance and security",
        "Cloud only affects cost, never risk",
        "Cloud eliminates the need for encryption",
      ],
      correctIndex: 1,
    },
    {
      text: "A bank converts its paper account-opening form into a fillable PDF that customers can email in. According to the distinction drawn in the manual, this is best classified as:",
      options: [
        "Digital transformation, since it involves technology",
        "Digitisation — converting a process element into digital form, without redesigning the underlying process",
        "Online banking",
        "Embedded finance",
      ],
      correctIndex: 1,
    },
    {
      text: "Which statement correctly distinguishes 'online banking' from 'digital banking' as tested in the Assessment Lens?",
      options: [
        "They are identical terms used interchangeably",
        "Online banking is one channel (internet access to services); digital banking is a broader operating model spanning products, processes, operations, data and experience",
        "Online banking includes AI; digital banking does not",
        "Digital banking refers only to mobile apps",
      ],
      correctIndex: 1,
    },
    {
      text: "A bank integrates with several fintechs, cloud providers and payment networks to enrich its customer offering. What is the key risk trade-off the manual highlights about this kind of ecosystem connectivity?",
      options: [
        "There is no trade-off — connectivity is purely beneficial",
        "Connectivity creates innovation opportunities but also introduces third-party, cyber, data, operational and resilience risk",
        "Ecosystem connectivity eliminates the need for internal risk management",
        "Only the fintech partner bears any risk from the integration",
      ],
      correctIndex: 1,
    },
    {
      text: "A customer successfully logs into the mobile app using their fingerprint, but is then blocked from approving a large international transfer without an additional One-Time PIN. This sequence best illustrates:",
      options: [
        "Authentication only, with no authorisation involved",
        "Authorisation only, with no authentication involved",
        "Successful authentication (fingerprint) followed by an authorisation check (permission for this specific higher-risk action)",
        "A system malfunction, since one login should cover all actions",
      ],
      correctIndex: 2,
    },
    {
      text: "An employee's account balance is altered without proper authorisation due to a system error, but no one outside the bank ever views the account. Which leg of the CIA triad is most directly compromised?",
      options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
      correctIndex: 1,
    },
    {
      text: "A core banking outage prevents customers from checking balances for two hours, though no data was viewed or altered by unauthorised parties. This scenario primarily concerns:",
      options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
      correctIndex: 2,
    },
    {
      text: "Why does the manual advise against choosing an answer that presents a single control (e.g., 'MFA alone') as a complete solution to security risk?",
      options: [
        "Because MFA is outdated technology",
        "Because banks rely on layered defences (defence in depth) so that failure of one control does not create unrestricted exposure",
        "Because single controls are always cheaper to bypass than layered ones",
        "Because regulators have banned single-factor controls entirely",
      ],
      correctIndex: 1,
    },
    {
      text: "A caller pressures an employee by claiming to be a senior manager and insists the request must be actioned 'right now.' According to the Assessment Lens on social engineering, why is urgency treated as a red flag rather than a reason to comply faster?",
      options: [
        "Urgency is never actually used by genuine bank staff",
        "Urgency and authority are classic psychological triggers used to bypass normal verification and controls",
        "Urgent requests are always from IT and should be trusted",
        "Urgency only matters for external customers, not internal callers",
      ],
      correctIndex: 1,
    },
    {
      text: "An employee accidentally emails a customer's statement to the wrong recipient. Per the guidance that 'technology risk is everyone's responsibility,' which framing is most accurate?",
      options: [
        "This is solely an IT security failure and the employee bears no responsibility",
        "This reflects how people, process and technology together shape risk — individual employee behaviour is part of the control environment, not separate from it",
        "This cannot be classified as a risk event since no system was hacked",
        "Only customers can create this type of risk, not staff",
      ],
      correctIndex: 1,
    },
    {
      text: "A digital service outage is later found to involve a system bug, a rushed change-approval process, and a telecom provider failure, all contributing together. How should this be classified using the operational risk model taught?",
      options: [
        "It must be forced into a single category, most likely 'Systems'",
        "It can and should be recognised as spanning multiple faces — Systems, Process, and External Events — simultaneously",
        "It is only an External Events issue since the telecom failure was outside the bank's control",
        "Operational risk classification does not apply to technology outages",
      ],
      correctIndex: 1,
    },
    {
      text: "A large transfer occurs from a new device, an unfamiliar location, and a new beneficiary — each individually plausible. What does the Assessment Lens suggest is the strongest fraud-control response?",
      options: [
        "Ignore each factor since none alone is proof of fraud",
        "Automatically approve since the customer authenticated successfully",
        "Consider the combination of signals together against the customer's behavioural baseline, since multiple weak signals combined can indicate stronger risk",
        "Immediately and permanently close the account",
      ],
      correctIndex: 2,
    },
    {
      text: "A bank has a well-written information security policy, but staff routinely bypass it to save time, and this is widely tolerated by supervisors. What does the manual say this demonstrates?",
      options: [
        "The policy itself must be poorly written",
        "Effective governance requires more than a policy document — a policy that is routinely bypassed does not create effective control",
        "This is acceptable as long as no incident has occurred yet",
        "Daily controls are irrelevant once a policy exists",
      ],
      correctIndex: 1,
    },
    {
      text: "A team wants to build an AI model using as much customer data as possible, reasoning that 'more data always means better AI.' What is the flaw the Assessment Lens specifically warns against here?",
      options: [
        "There is no flaw — more data is always strictly better",
        "Data volume alone is not sufficient; data must also be accurate, secure, governed and responsibly used to create real value",
        "AI models cannot use customer data under any circumstances",
        "Data quality only matters for fraud detection, not other AI use cases",
      ],
      correctIndex: 1,
    },
  ],
};
