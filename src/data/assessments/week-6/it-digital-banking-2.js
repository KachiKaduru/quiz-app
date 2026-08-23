export default {
  id: "it-digital-banking-2",
  title: "IT, Digital Banking & Operational Risk — Practice Questions (Set 2)",
  weekId: "week-6",
  courseId: "it-digital-banking",
  description:
    "Scenario and case-based questions modelled on the facilitator's five practice cases and Detect & Respond / AI content — testing applied judgment rather than recall.",
  questions: [
    {
      text: "Referring to 'The Failed Transfer' case: before concluding the core banking system is down, which approach does the manual recommend?",
      options: [
        "Immediately inform the customer that core banking has failed",
        "Investigate each technology layer (device, network, app, authentication, processing, database, notification) since a failure could originate at any single layer",
        "Assume the mobile app itself is always at fault and restart it",
        "Escalate directly to the Board without any initial investigation",
      ],
      correctIndex: 1,
    },
    {
      text: "In 'The Failed Transfer' case, the customer reports an error message but no actual debit occurred. What does this detail suggest about where the process most likely stalled?",
      options: [
        "It proves the customer's device has malware",
        "It suggests the failure likely occurred before the transaction was fully committed at the processing/database stage, rather than after funds were actually moved",
        "It proves the bank's core banking system has been permanently compromised",
        "It has no bearing on which layer failed",
      ],
      correctIndex: 1,
    },
    {
      text: "In 'The New Device' case, a customer who normally makes small transactions suddenly attempts a very large transfer from an unfamiliar device to a new beneficiary. Which combination of concepts should shape the appropriate response?",
      options: [
        "Behavioural baseline plus device intelligence — recognising that this activity deviates from the customer's normal pattern and warrants additional verification",
        "Immediate account closure, since large transfers from new devices are always fraudulent",
        "No action, since the customer successfully logged in with valid credentials",
        "Only the transaction amount matters; device and beneficiary details are irrelevant",
      ],
      correctIndex: 0,
    },
    {
      text: "Still on 'The New Device' case — which control response is most consistent with the risk-based approach taught, rather than an extreme response?",
      options: [
        "Blocking the customer's account permanently without further verification",
        "Approving the transaction automatically since blocking legitimate customers harms experience",
        "Applying step-up verification or risk scoring/alerting proportional to the elevated signals, before allowing the transfer to proceed",
        "Ignoring the new device and new beneficiary since the amount is what matters most",
      ],
      correctIndex: 2,
    },
    {
      text: "In 'The AI Summary' case, a trainee wants to paste confidential customer information into an external GenAI tool to get a quick summary. What is the PRIMARY risk being tested here?",
      options: [
        "The AI tool might take too long to generate the summary",
        "Confidentiality risk — sensitive information could be exposed through an unauthorised external tool or workflow lacking appropriate controls",
        "The AI tool might use overly formal language",
        "There is no meaningful risk since GenAI tools are inherently secure",
      ],
      correctIndex: 1,
    },
    {
      text: "Following the reasoning in 'The AI Summary' case, what should the trainee consider BEFORE using any GenAI tool for this task?",
      options: [
        "Only whether the summary will be well-written",
        "Whether the task and tool are approved for this use, what information may be used, what human review is required, and what controls apply",
        "Whether their manager personally likes AI tools",
        "Nothing — GenAI use requires no prior consideration since it is just a productivity tool",
      ],
      correctIndex: 1,
    },
    {
      text: "In 'The Outage' case, a digital banking service becomes unavailable during peak hours. Using the People/Process/Systems/External Events model, which statement best reflects the intended analysis?",
      options: [
        "The cause must be narrowed to exactly one category before any action is taken",
        "An outage can plausibly involve more than one face simultaneously (e.g., a systems bug combined with a weak change-management process), and the analysis should consider all four",
        "Outages are always purely External Events and never involve internal process or systems issues",
        "Only the Systems face is ever relevant to a digital service outage",
      ],
      correctIndex: 1,
    },
    {
      text: "Still on 'The Outage' case, what should be the FIRST incident-response action once the anomaly is identified?",
      options: [
        "Wait until the root cause is fully confirmed before doing anything",
        "Detect and promptly move to contain/escalate according to procedure, rather than delaying for full certainty",
        "Immediately announce full details of the outage publicly before any internal review",
        "Assign blame to a specific team before taking any technical action",
      ],
      correctIndex: 1,
    },
    {
      text: "In 'The Urgent Caller' case, a caller claiming to be from Head Office asks for an OTP, citing urgency and a waiting manager. Which psychological triggers are most clearly being used?",
      options: [
        "Boredom and indifference",
        "Urgency and authority",
        "Curiosity and greed only",
        "No psychological trigger is present — this is a routine IT request",
      ],
      correctIndex: 1,
    },
    {
      text: "What is the correct FIRST response in 'The Urgent Caller' scenario, according to the manual's guidance?",
      options: [
        "Read out the OTP quickly since a manager is reportedly waiting",
        "Never disclose the OTP, verify the caller's identity through a known/approved channel, and escalate/report the attempt",
        "Ask the caller to call back in an hour",
        "Transfer the call to a colleague without saying anything about the request",
      ],
      correctIndex: 1,
    },
    {
      text: "In the incident response flow, what is the key distinction between 'Contain' and 'Eradicate'?",
      options: [
        "They are the same step described with two different words",
        "Contain isolates or limits the affected system/activity to stop the impact from spreading, while Eradicate removes the underlying root cause",
        "Contain happens after the incident is fully resolved, while Eradicate happens first",
        "Eradicate refers only to customer communication, while Contain refers only to technical fixes",
      ],
      correctIndex: 1,
    },
    {
      text: "An employee notices unusual account activity but is not 100% certain it represents an actual security incident. What does the manual say the employee should do?",
      options: [
        "Wait until they are completely certain before reporting, to avoid raising a false alarm",
        "Investigate the issue personally and thoroughly before telling anyone",
        "Escalate/report promptly through approved channels even without full certainty, since early escalation matters more than waiting for proof",
        "Ignore it, since uncertain observations are not worth reporting",
      ],
      correctIndex: 2,
    },
    {
      text: "A department wants to deploy an AI tool simply because 'competitors are already using AI.' What does the Assessment Lens say is missing from this justification?",
      options: [
        "Nothing is missing — competitive pressure alone justifies any AI deployment",
        "A clearly defined business/customer problem should come first, with technology, data, and controls considered afterward — not the reverse",
        "The tool should be deployed immediately without any data considerations",
        "AI projects never need controls once approved by any single manager",
      ],
      correctIndex: 1,
    },
    {
      text: "A GenAI tool produces a confident, well-written summary of a loan applicant's finances, but several figures turn out to be fabricated and unsupported by the source documents. This is best described as:",
      options: [
        "A confidentiality breach",
        "Hallucination — plausible-sounding but inaccurate or unsupported AI output",
        "An authorisation failure",
        "A concentration risk event",
      ],
      correctIndex: 1,
    },
    {
      text: "Why does the manual caution against employees freely pasting confidential customer information into any external AI tool, even when the underlying task itself seems harmless?",
      options: [
        "Because AI tools are always slower than manual work",
        "Because sensitive information used with an unauthorised tool or workflow can create confidentiality and governance risk, regardless of the task's apparent simplicity",
        "Because external AI tools cannot process banking terminology",
        "Because this is only a concern for customer-facing roles, not back-office staff",
      ],
      correctIndex: 1,
    },
    {
      text: "A bank is deciding whether to build a new fraud-detection capability internally, buy an existing solution, or partner with a specialist fintech. According to the Build/Buy/Partner/Integrate framing, what should primarily guide this decision?",
      options: [
        "Whichever option is cheapest in the first year, regardless of other factors",
        "Which capabilities are core to the bank, where specialised partners are better positioned, and how appropriate governance and accountability can be retained",
        "Always build internally, since partnering is inherently riskier",
        "Always partner, since fintechs are always more capable than banks",
      ],
      correctIndex: 1,
    },
    {
      text: "Which pairing correctly distinguishes 'intelligent' banking from 'predictive' banking, as used in the Future of Banking material?",
      options: [
        "Intelligent means data and AI support decisions; predictive means the system anticipates customer needs before they are expressed",
        "Intelligent and predictive are identical concepts with no meaningful difference",
        "Intelligent refers only to chatbots; predictive refers only to fraud detection",
        "Predictive banking has no relationship to data or AI",
      ],
      correctIndex: 0,
    },
    {
      text: "A scenario involves a phishing email that leads to a compromised employee credential, which is then used to attempt an unauthorised transfer, escalated per bank procedure. Which SHIELD elements does this scenario most clearly draw on together?",
      options: [
        "Only Systems (S)",
        "Only How Customers Bank (H)",
        "Information Security (I), Enterprise Risk (E), and Detect & Respond (D) together",
        "Only Layers of Control (L), with no relevance to Information Security",
      ],
      correctIndex: 2,
    },
    {
      text: "During digital onboarding, a bank uses facial verification against a government ID, followed by automated KYC screening. This combination primarily supports which two functions from the Digital Identity content?",
      options: [
        "Marketing and pricing",
        "Identity verification and KYC/fraud prevention",
        "Loan disbursement and collections",
        "Cloud computing and API management",
      ],
      correctIndex: 1,
    },
    {
      text: "Behavioural analytics in fraud detection relies on which underlying concept?",
      options: [
        "A fixed rule that blocks all transactions above a certain amount regardless of customer history",
        "A baseline of a customer's normal activity, against which abnormal or deviating behaviour can be identified",
        "Random sampling of unrelated customer accounts",
        "Manual review of every single transaction without any automated signals",
      ],
      correctIndex: 1,
    },
  ],
};
