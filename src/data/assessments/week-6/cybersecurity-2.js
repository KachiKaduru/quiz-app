export default {
  id: "cybersecurity-2",
  title: "Cybersecurity — Practice Questions (Set 2: Incident Response & Security Operations)",
  weekId: "week-6",
  courseId: "cybersecurity",
  description:
    "Scenario questions on the incident response lifecycle, the SOC's role, event/alert/incident/breach distinctions, containment and recovery, and the case studies covered on Day 2.",
  questions: [
    {
      text: "What is the primary purpose of containment in the incident response lifecycle?",
      options: [
        "Assign blame for the incident",
        "Limit the spread and impact of the incident",
        "Delete all related evidence to reduce clutter",
        "Restore all systems to normal immediately, before any analysis",
      ],
      correctIndex: 1,
    },
    {
      text: "An employee logs in as expected during their normal working hours. Using the Event/Alert/Incident/Breach distinctions, this is best classified as:",
      options: [
        "An incident",
        "A breach",
        "An event — something that simply happens, without necessarily indicating a problem",
        "An alert",
      ],
      correctIndex: 2,
    },
    {
      text: "Multiple failed login attempts trigger a flag from the monitoring system, but no compromise has yet been confirmed. This is best classified as:",
      options: ["An alert", "A confirmed breach", "A closed incident", "A routine event only"],
      correctIndex: 0,
    },
    {
      text: "A compromised account is confirmed to be accessing sensitive systems, requiring a coordinated response under the bank's criteria. This is best classified as:",
      options: ["An event", "An alert", "An incident", "A vulnerability"],
      correctIndex: 2,
    },
    {
      text: "In the seven-stage Day 2 lifecycle (Detect → Analyse → Contain → Eradicate → Recover → Investigate → Learn), what is the key purpose of the 'Analyse' stage, distinct from 'Detect'?",
      options: [
        "Analyse is simply a repeat of Detect with a different name",
        "Analyse confirms that the event is real and establishes its scope, affected systems, and severity, after initial detection flags something",
        "Analyse restores systems back to normal operations",
        "Analyse removes the root cause of the incident",
      ],
      correctIndex: 1,
    },
    {
      text: "Why does the material describe 'Learn' as looping back into Day 1's prevention themes, rather than being a final, standalone step?",
      options: [
        "Because 'Learn' actually has no connection to prevention",
        "Because findings from the incident should feed back into stronger controls, training and policy, closing the loop between response and prevention",
        "Because 'Learn' only applies to legal teams",
        "Because the lifecycle is strictly linear and never revisits earlier stages",
      ],
      correctIndex: 1,
    },
    {
      text: "What is generally the SOC's role as the FIRST point of contact in the incident response lifecycle?",
      options: [
        "Approving the bank's annual cybersecurity budget",
        "Continuous monitoring and being typically the first to detect and triage unusual activity",
        "Handling all customer complaints regardless of subject matter",
        "Drafting the bank's regulatory disclosures",
      ],
      correctIndex: 1,
    },
    {
      text: "Within the Incident Response Team structure, who is primarily responsible for coordinating the overall response and priorities across all functions?",
      options: ["SOC Analyst", "Incident Commander", "Communications Lead", "IT/System Owner"],
      correctIndex: 1,
    },
    {
      text: "Why might executive management insist on being involved in a serious incident response, beyond the technical teams?",
      options: [
        "Because technical staff are not permitted to make any decisions",
        "Because executive management makes critical decisions and owns accountability for the overall response, including reputational and regulatory dimensions",
        "Because executives are always the best-qualified forensic investigators",
        "Because only executives can restart affected servers",
      ],
      correctIndex: 1,
    },
    {
      text: "A branch operations officer reports files with an unfamiliar extension and a ransom note on a desktop. Following the ransomware case study logic, what should be the VERY FIRST action?",
      options: [
        "Immediately pay the ransom to prevent further damage",
        "Detect and confirm the issue (e.g., via SOC verification of unusual encryption activity), then move promptly toward analysis and containment, rather than waiting or acting alone",
        "Wait for the end of the business day to investigate quietly",
        "Format the affected desktop immediately without notifying anyone",
      ],
      correctIndex: 1,
    },
    {
      text: "In the ransomware case study, after affected systems are isolated from the network, what is the next lifecycle stage before recovery begins?",
      options: [
        "Eradicate — remove the malware and reset compromised credentials",
        "Learn — immediately update policy documents",
        "Detect — start the entire process over from scratch",
        "Investigate only, skipping any technical remediation",
      ],
      correctIndex: 0,
    },
    {
      text: "Why does the case study emphasise restoring systems specifically from 'clean, verified backups' rather than simply restoring the most recent backup available?",
      options: [
        "Because the most recent backup could itself be compromised or encrypted, so verification is necessary before trusting it for recovery",
        "Because older backups are always safer regardless of verification",
        "Because backups are never used in ransomware recovery",
        "Because verification is only relevant to email systems",
      ],
      correctIndex: 0,
    },
    {
      text: "According to the 'Do' and 'Do Not' guidance for the first 15 minutes of a suspected incident, which pairing is correct?",
      options: [
        "Do: reformat the device immediately. Do not: document what is known",
        "Do: recognise and escalate, and preserve relevant evidence. Do not: delete logs or confront the suspected attacker",
        "Do: broadcast sensitive evidence widely. Do not: coordinate with the response team",
        "Do: assume who is responsible immediately. Do not: follow containment procedures",
      ],
      correctIndex: 1,
    },
    {
      text: "The golden rule before taking any action during a suspected incident asks several questions. Which of these is NOT one of them?",
      options: [
        "Could this destroy evidence?",
        "Could it alert the attacker?",
        "Is the action authorised?",
        "Will this action increase my personal performance bonus?",
      ],
      correctIndex: 3,
    },
    {
      text: "Why does the manual stress that 'technical expertise is necessary, but uncontrolled technical action can create additional risk'?",
      options: [
        "Because technical teams should never be involved in incident response",
        "Because well-intentioned but uncoordinated technical actions (e.g., an individual analyst acting alone) can worsen the incident, which is why incident command coordinates the overall response",
        "Because technical actions are always safe once authorised by anyone",
        "Because only non-technical staff should touch affected systems",
      ],
      correctIndex: 1,
    },
    {
      text: "Which of the following is an example of a genuine post-incident (Learn) activity, as opposed to a containment or eradication activity?",
      options: [
        "Isolating an affected server from the network",
        "Resetting compromised credentials",
        "Documenting lessons learned and updating controls, training, or policy based on the incident",
        "Blocking malicious network traffic",
      ],
      correctIndex: 2,
    },
    {
      text: "A trainee suggests confronting a colleague suspected of causing an incident before any investigation has taken place. Why is this discouraged?",
      options: [
        "Because confrontation is always illegal",
        "Because assuming responsibility before investigation risks being wrong, alerting a potential bad actor, and undermining a proper evidence-based process",
        "Because colleagues can never be involved in incidents",
        "Because only regulators are allowed to speak to staff during incidents",
      ],
      correctIndex: 1,
    },
    {
      text: "Which statement correctly reflects the relationship between Day 1 (Prevention) and Day 2 (Response) as framed in the course?",
      options: [
        "Prevention and response are unrelated disciplines handled by entirely separate industries",
        "Prevention reduces the likelihood of an incident, while response manages the impact when prevention fails — both are essential and both are everyone's responsibility",
        "Once prevention controls are in place, a formal response process is no longer necessary",
        "Response entirely replaces the need for preventive controls going forward",
      ],
      correctIndex: 1,
    },
    {
      text: "A bank wants to know 'are we safe?' immediately after containment during a live incident. What does the material suggest is needed before giving a confident answer?",
      options: [
        "A guess based on how the incident 'feels'",
        "Sufficient validated evidence and analysis confirming scope, containment effectiveness, and whether the attacker still has access",
        "A statement based purely on how quickly the incident was detected",
        "Confirmation from the customer that they are satisfied",
      ],
      correctIndex: 1,
    },
    {
      text: "Which best describes why 'Speed', 'Evidence', 'Trust' and 'Learning' are highlighted together as the stakes of incident response?",
      options: [
        "They are unrelated statistics with no shared theme",
        "They capture how fast detection/containment limits damage, how evidence handling determines recoverability, how public/technical response affects trust, and how well-handled incidents strengthen future prevention",
        "They only apply to ransomware incidents specifically",
        "They are primarily marketing terms with no operational meaning",
      ],
      correctIndex: 1,
    },
  ],
};
