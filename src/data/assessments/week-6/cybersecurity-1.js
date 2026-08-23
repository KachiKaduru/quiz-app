export default {
  id: "cybersecurity-1",
  title: "Cybersecurity — Practice Questions (Set 1: Foundations & Risk)",
  weekId: "week-6",
  courseId: "cybersecurity",
  description:
    "Scenario-based questions on cybersecurity fundamentals, the banking threat landscape, cyber risk concepts, CIA triad, identity & access, and human risk — drawing on and extending the Day 1 practice tests.",
  questions: [
    {
      text: "Which CIA principle is most directly affected when customer data is disclosed to an unauthorised person?",
      options: ["Availability", "Integrity", "Confidentiality", "Authentication"],
      correctIndex: 2,
    },
    {
      text: "A user logs in correctly but cannot approve a payment because their role does not permit it. Which concept applies?",
      options: ["Authentication", "Authorisation", "Availability", "Hashing"],
      correctIndex: 1,
    },
    {
      text: "A weakness in a system that can be exploited is best classified as a:",
      options: ["Threat", "Vulnerability", "Incident", "Breach"],
      correctIndex: 1,
    },
    {
      text: "An employee has excessive privileges beyond what their role requires. An attacker steals the employee's credentials and accesses customer data. What is the vulnerability in this scenario?",
      options: [
        "The attacker themselves",
        "The excessive privilege / weak access control",
        "The customer whose data was accessed",
        "The bank's marketing strategy",
      ],
      correctIndex: 1,
    },
    {
      text: "A staff member reuses their password across systems, and attackers are actively phishing bank staff. If compromised, the account can approve payments. Using the Threat × Vulnerability × Impact framing, this scenario should be treated as:",
      options: [
        "Low risk, since no breach has occurred yet",
        "High risk, because a real threat, an exploitable vulnerability, and high potential impact are all present simultaneously",
        "Irrelevant to risk assessment until a payment is actually approved fraudulently",
        "A vulnerability only, with no associated risk",
      ],
      correctIndex: 1,
    },
    {
      text: "A fraudster changes a beneficiary account number on a pending transaction without authorisation. Which CIA principle is primarily affected?",
      options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
      correctIndex: 1,
    },
    {
      text: "A denial-of-service attack prevents customers from accessing online banking for several hours, though no data is viewed or altered. Which CIA principle is primarily affected?",
      options: ["Confidentiality", "Integrity", "Availability", "Authorisation"],
      correctIndex: 2,
    },
    {
      text: "Why does the material caution that 'one incident can affect all three CIA principles at once,' using ransomware as the example?",
      options: [
        "Because ransomware only ever affects availability",
        "Because ransomware can simultaneously make systems unavailable, expose information, and alter or corrupt data — CIA principles do not operate in isolation",
        "Because ransomware is not actually a cybersecurity concern",
        "Because CIA principles apply only to insider threats",
      ],
      correctIndex: 1,
    },
    {
      text: "Correct authentication of a user does NOT automatically mean:",
      options: [
        "That the user has been identified",
        "That the user is authorised to perform every action within the system",
        "That MFA was used",
        "That the login was logged",
      ],
      correctIndex: 1,
    },
    {
      text: "In a maker-checker payment process, one officer initiates a transaction and a different, authorised officer must independently approve it. This illustrates:",
      options: [
        "Least privilege only",
        "Segregation of duties, ensuring no single person can both initiate and approve a critical transaction alone",
        "Non-repudiation",
        "A Zero Trust violation",
      ],
      correctIndex: 1,
    },
    {
      text: "A targeted phishing attack specifically aimed at a senior executive, researched in advance using details about their role and colleagues, is commonly called:",
      options: ["Whaling", "Encoding", "Hashing", "Segmentation"],
      correctIndex: 0,
    },
    {
      text: "An employee receives a message: 'IT Support: we detected unusual activity, please send the MFA code you just received so we can secure your account.' What combination of red flags does this message primarily rely on?",
      options: [
        "A legitimate internal process combined with routine timing",
        "Authority (posing as IT Support) and urgency, while asking for something a legitimate IT team would never need — an MFA code",
        "A correctly formatted email signature with no other issues",
        "A request that has already been independently verified",
      ],
      correctIndex: 1,
    },
    {
      text: "Business Email Compromise (BEC) most commonly involves:",
      options: [
        "Exploiting an unpatched server vulnerability",
        "Impersonating or compromising a trusted email account to manipulate a payment, beneficiary, or business-process decision",
        "Installing ransomware directly via a USB device",
        "A denial-of-service attack against a mail server",
      ],
      correctIndex: 1,
    },
    {
      text: "You receive repeated MFA prompts that you did not initiate. What is the safest mindset, per the material?",
      options: [
        "Approve one prompt to make them stop",
        "Treat it as suspicious, do not approve it, and follow the approved reporting process",
        "Ignore it since MFA prompts cannot be exploited",
        "Change your password only after approving the next prompt",
      ],
      correctIndex: 1,
    },
    {
      text: "Which of the following is a detective control, as opposed to a preventive or corrective one?",
      options: ["MFA", "Security monitoring and alerts", "Password policy", "Access restriction"],
      correctIndex: 1,
    },
    {
      text: "A high-risk beneficiary-change request comes through email, apparently from a senior manager who says they cannot be called because they are 'in a confidential meeting.' The generally correct response is to:",
      options: [
        "Process it urgently, given the seniority of the requester",
        "Independently verify the request through a separate, approved channel before acting",
        "Ignore the request permanently",
        "Forward the request publicly to the whole department for visibility",
      ],
      correctIndex: 1,
    },
    {
      text: "Why is defence in depth used rather than relying on one strong control?",
      options: [
        "To guarantee that zero attacks will ever succeed",
        "To create multiple layers of protection so that the failure of a single control does not automatically result in compromise",
        "To eliminate the need for any monitoring",
        "To remove the need for governance policies",
      ],
      correctIndex: 1,
    },
    {
      text: "Zero Trust principles state that being 'inside' the corporate network:",
      options: [
        "Automatically grants a device or user full trust",
        "Does not automatically grant trust — every user and device should be verified continuously, not just at the network boundary",
        "Removes the need for authentication entirely",
        "Applies only to external vendors, not internal staff",
      ],
      correctIndex: 1,
    },
    {
      text: "Which statement BEST describes cybersecurity responsibility within a bank?",
      options: [
        "It belongs exclusively to the IT department",
        "It belongs exclusively to the CISO",
        "It is primarily an external vendor's responsibility",
        "Everyone has a role, with responsibilities appropriately assigned across governance, security functions, employees, and third parties",
      ],
      correctIndex: 3,
    },
    {
      text: "An employee notices a suspicious email requesting urgent action but is not fully certain it's malicious. According to STOP → CHECK → REPORT, the correct sequence is to:",
      options: [
        "Click the link first to confirm suspicion, then report if it looks harmful",
        "Stop acting on the message, independently verify through a known channel, then report through the approved process",
        "Report it only if a colleague confirms the same email",
        "Forward it to as many colleagues as possible for a second opinion before doing anything else",
      ],
      correctIndex: 1,
    },
  ],
};
