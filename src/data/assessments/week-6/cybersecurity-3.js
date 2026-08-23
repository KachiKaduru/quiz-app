export default {
  id: "cybersecurity-3",
  title: "Cybersecurity — Practice Questions (Set 3: Digital Forensics & Investigation)",
  weekId: "week-6",
  courseId: "cybersecurity",
  description:
    "Scenario-based questions on cyber forensics, digital evidence, chain of custody and hashing, disk/memory/email forensics, information-hiding techniques, and evidence-led investigative thinking.",
  questions: [
    {
      text: "Which evidence type is generally considered MOST volatile, and therefore should typically be collected first during an investigation?",
      options: ["Archived email", "RAM (memory)", "A stored file on disk", "A backup tape"],
      correctIndex: 1,
    },
    {
      text: "Why does the 'order of volatility' place memory and active network connections ahead of disk data during collection?",
      options: [
        "Because memory is legally more important than disk evidence",
        "Because memory and active connections are lost the instant a system is powered off, while disk data is comparatively more stable and can be imaged slightly later",
        "Because disk data is always encrypted and unusable",
        "Because memory analysis requires no specialist tools, unlike disk analysis",
      ],
      correctIndex: 1,
    },
    {
      text: "Why might immediately shutting down a compromised computer be risky from a forensic standpoint?",
      options: [
        "It may permanently damage the hard drive",
        "It may destroy volatile evidence such as running processes and active network connections that only exist in memory",
        "It increases network bandwidth usage",
        "It automatically changes all account passwords",
      ],
      correctIndex: 1,
    },
    {
      text: "What is the PRIMARY purpose of chain of custody in a digital forensics context?",
      options: [
        "To increase network bandwidth during evidence transfer",
        "To document the unbroken record of who collected, handled, transferred and stored evidence, so its integrity can be defended",
        "To prove the guilt of a suspect before any analysis is performed",
        "To remove malware from an affected device",
      ],
      correctIndex: 1,
    },
    {
      text: "A server image used to investigate a fraud case has one undocumented handoff between two investigators. What is the most accurate consequence, per the material?",
      options: [
        "This has no real consequence as long as the technical analysis is strong",
        "A single undocumented handoff is enough to break the chain of custody, meaning the findings could be successfully challenged regardless of technical quality",
        "Undocumented handoffs only matter for physical evidence, not digital evidence",
        "The evidence becomes automatically inadmissible only if the handoff exceeded 24 hours",
      ],
      correctIndex: 1,
    },
    {
      text: "What does a cryptographic hash primarily help verify?",
      options: [
        "That a file is safe and free of malware",
        "That evidence has not been altered, by allowing comparison of hash values over time",
        "The identity of the person who created the file",
        "The physical location where the file was stored",
      ],
      correctIndex: 1,
    },
    {
      text: "Why is it important to note that 'a hash helps verify integrity but does not prove the underlying file is safe or truthful'?",
      options: [
        "Because hashing is entirely unrelated to forensic work",
        "Because an unaltered file can still be malicious, false, or misleading — hashing only confirms the file hasn't changed, not that its content is benign or accurate",
        "Because hashes are always incorrect for large files",
        "Because only law enforcement can generate valid hashes",
      ],
      correctIndex: 1,
    },
    {
      text: "Disk forensics can typically reveal all of the following EXCEPT:",
      options: [
        "Deleted or hidden files that may still be recoverable",
        "File timestamps showing creation or modification times",
        "Currently running processes and active network connections at a specific moment",
        "A timeline of activity on the device",
      ],
      correctIndex: 2,
    },
    {
      text: "Why is memory (RAM) forensics considered valuable despite its volatility?",
      options: [
        "It contains a complete historical record of all past activity on the device",
        "It can reveal running processes, active network connections and activity that may never have touched the disk, showing what the system was doing at a specific moment",
        "It always identifies the attacker's real name",
        "It fully replaces the need for any disk analysis",
      ],
      correctIndex: 1,
    },
    {
      text: "A phishing investigation focuses heavily on email headers, routing information and authentication results rather than just the visible sender name. Why?",
      options: [
        "Because the visible sender name is not sufficient proof of authenticity — headers and routing can reveal a spoofed or fraudulent origin",
        "Because visible sender names are always accurate and headers are irrelevant",
        "Because email content can never be analysed for phishing indicators",
        "Because routing information is only useful for internal emails",
      ],
      correctIndex: 0,
    },
    {
      text: "Which of these is a useful artefact specifically in email forensics, as distinct from disk or memory forensics?",
      options: [
        "Running processes at the time of compromise",
        "Message headers, routing information, and authentication results",
        "RAM snapshots of active connections",
        "Deleted files recovered from a hard drive image",
      ],
      correctIndex: 1,
    },
    {
      text: "Why should investigators correlate browser history, DNS activity and network connections with other evidence, rather than relying on any single artefact alone?",
      options: [
        "Because a single artefact in isolation may be misleading or incomplete, while correlating multiple sources builds a stronger, more defensible picture of what happened",
        "Because browser history is always fabricated by attackers",
        "Because DNS logs are never admissible as evidence",
        "Because correlation is only required for ransomware cases specifically",
      ],
      correctIndex: 0,
    },
    {
      text: "Which pairing correctly distinguishes steganography from encryption?",
      options: [
        "They are identical techniques with different names",
        "Steganography hides information inside another medium (concealing its existence), while encryption cryptographically transforms content to make it unreadable without a key (without necessarily hiding its existence)",
        "Encryption hides existence, while steganography scrambles content",
        "Steganography is a legal requirement, while encryption is optional",
      ],
      correctIndex: 1,
    },
    {
      text: "An investigator finds that system logs covering a critical time window have been deleted. This is best described as an example of:",
      options: [
        "Encoding",
        "Log tampering / manipulation intended to obscure activity",
        "Steganography",
        "Hashing",
      ],
      correctIndex: 1,
    },
    {
      text: "Why does the material distinguish 'obfuscation' from 'confidentiality by itself'?",
      options: [
        "Because obfuscation makes code or data harder to understand, but this alone does not guarantee that unauthorised parties cannot access or reconstruct it",
        "Because obfuscation and confidentiality are exactly the same control",
        "Because confidentiality only applies to physical documents",
        "Because obfuscated data can never be examined by forensic tools under any circumstances",
      ],
      correctIndex: 0,
    },
    {
      text: "A user's account was confirmed to have performed a suspicious action. What does the investigative thinking framework caution against doing next?",
      options: [
        "Gathering further evidence to test explanations",
        "Immediately and automatically concluding the user acted maliciously, without considering alternatives like credential theft, a compromised device, or a stolen session",
        "Considering multiple plausible hypotheses",
        "Validating the hypothesis with additional evidence",
      ],
      correctIndex: 1,
    },
    {
      text: "In the investigative process (Evidence → Analysis → Hypothesis → Validation → Conclusion), what is the purpose of the 'Validation' step specifically?",
      options: [
        "To announce the conclusion publicly before any analysis",
        "To seek additional evidence that would specifically test whether a proposed hypothesis holds up, before reaching a conclusion",
        "To immediately discard all hypotheses without testing them",
        "To skip analysis and move straight from evidence to conclusion",
      ],
      correctIndex: 1,
    },
    {
      text: "Reviewing an incident timeline, an investigator sees: (1) unexpected MFA prompts, (2) an unusual login from an unfamiliar context, (3) a suspicious email sent from the account, (4) access to a transaction-related application. What is the primary value of constructing this kind of timeline?",
      options: [
        "It has no analytical value beyond listing times",
        "It connects separate artefacts into a coherent sequence, helping investigators test whether earlier events plausibly caused later ones",
        "It replaces the need for any evidence collection",
        "It is used only for reporting purposes after a case is fully closed",
      ],
      correctIndex: 1,
    },
    {
      text: "In the banking incident simulation involving a compromised graduate trainee account, why is it important to consider what evidence 'could be missing' rather than only what has already been observed?",
      options: [
        "Because missing evidence is never relevant to an investigation",
        "Because gaps in the record (e.g., an action that occurred but wasn't logged) can affect the completeness and reliability of conclusions drawn from the timeline",
        "Because investigators should only ever use the very first piece of evidence found",
        "Because missing evidence automatically proves the account holder's innocence",
      ],
      correctIndex: 1,
    },
    {
      text: "Which of the following best reflects sound evidence-handling principles as a whole?",
      options: [
        "Work directly on original evidence whenever convenient, and grant broad staff access to speed up analysis",
        "Preserve the original (working from copies), document every access and handoff, restrict access to authorised personnel, and verify integrity through hashing",
        "Skip documentation as long as the final report sounds credible",
        "Allow any employee to handle evidence provided they are technically skilled",
      ],
      correctIndex: 1,
    },
  ],
};
