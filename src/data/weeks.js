// Add a new entry here whenever a new week's assessments are added.
// Everything else (course lists, assessment lists) derives automatically
// from what's registered in src/data/assessments/index.js.
const WEEKS = [
  {
    id: "week-4",
    label: "Week 4",
    description: "Practice assessments for Week 4.",
  },
];

export default WEEKS;

export function getWeekById(id) {
  return WEEKS.find((w) => w.id === id);
}
