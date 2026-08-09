const NAME_KEY = "quizhub:name";
const NAME_SET_KEY = "quizhub:nameSet"; // distinguishes "skipped" from "never asked"
const PROGRESS_KEY = "quizhub:progress";

function safeParse(json, fallback) {
  try {
    const parsed = JSON.parse(json);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

export function getName() {
  return localStorage.getItem(NAME_KEY) || "";
}

export function hasSetName() {
  return localStorage.getItem(NAME_SET_KEY) === "1";
}

export function setName(name) {
  localStorage.setItem(NAME_KEY, name || "");
  localStorage.setItem(NAME_SET_KEY, "1");
}

function getAllProgress() {
  return safeParse(localStorage.getItem(PROGRESS_KEY), {});
}

function saveAllProgress(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

// Progress entry shape:
// {
//   status: "in-progress" | "completed",
//   currentIndex: number,
//   answers: { [questionIndex]: selectedOptionIndex },
//   score: number | null,
//   total: number,
//   updatedAt: string
// }

export function getAssessmentProgress(assessmentId) {
  const all = getAllProgress();
  return all[assessmentId] || null;
}

export function saveAssessmentProgress(assessmentId, data) {
  const all = getAllProgress();
  all[assessmentId] = {
    ...all[assessmentId],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  saveAllProgress(all);
  return all[assessmentId];
}

export function resetAssessmentProgress(assessmentId) {
  const all = getAllProgress();
  delete all[assessmentId];
  saveAllProgress(all);
}

export function getAllProgressMap() {
  return getAllProgress();
}
