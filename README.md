# QuizHub

A single-page app for weekly training assessments, grouped by Week → Course →
Assessment. Built with Vite + React + React Router. All progress and
scores persist in `localStorage` — no backend.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub, import into Vercel, done. `vercel.json` handles SPA routing
so refreshing on a deep link (e.g. `/weeks/week-4/banking-business`) doesn't 404.

## Adding a new week

1. Add a new entry to `src/data/weeks.js`:
   ```js
   { id: "week-5", label: "Week 5", description: "Practice assessments for Week 5." }
   ```
2. Create assessment files for that week under `src/data/assessments/`
   (copy the shape of an existing one — see below).
3. Register each new assessment in `src/data/assessments/index.js`.

That's it — the Weeks/Courses/Assessments pages all derive their lists
automatically from what's registered, so nothing else needs to change.

## Adding a new assessment

Create a file like `src/data/assessments/my-new-assessment.js`:

```js
export default {
  id: "my-new-assessment",       // unique, used in the URL
  title: "My New Assessment",
  weekId: "week-5",              // must match an id in weeks.js
  courseId: "project-management",// must match an id in courses.js
  description: "One line describing what this covers.",
  questions: [
    {
      text: "Question text?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctIndex: 1, // 0-based index into options
    },
    // ...
  ],
};
```

Then add the import + entry to `src/data/assessments/index.js`.

## Adding a new course

Add an entry to `src/data/courses.js` with a unique `id`, `label`, `emoji`,
and `description`. It'll only appear under a week once at least one
assessment references that `courseId` for that `weekId`.

## Data model

```
weeks.js        → list of weeks (id, label, description)
courses.js      → list of courses/subjects (id, label, emoji, description)
assessments/*   → one file per assessment, tagged with weekId + courseId
```

## Progress persistence

`src/lib/storage.js` wraps all `localStorage` reads/writes:

- `quizhub:name` — the user's optional display name
- `quizhub:progress` — a map of `assessmentId → { status, currentIndex, answers, score, total }`

Progress is saved after every answer, so closing the tab mid-quiz and coming
back resumes exactly where they left off. Anyone can hit "Retake assessment"
on the results page to clear that entry and start over.
