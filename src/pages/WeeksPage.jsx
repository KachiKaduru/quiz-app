import {Link} from "react-router-dom";
import Header from "../components/Header";
import WEEKS from "../data/weeks";
import COURSES from "../data/courses";
import ASSESSMENTS from "../data/assessments";
import {getAllProgressMap} from "../lib/storage";

export default function WeeksPage() {
  const progress = getAllProgressMap();

  return (
    <div className="page">
      <Header />
      <h1 className="title">Choose a week</h1>
      <p className="subtitle">
        Assessments are grouped by week. Pick a week to see the courses and tests available under
        it.
      </p>

      <div className="grid">
        {WEEKS.map((week) => {
          const weekAssessments = ASSESSMENTS.filter((a) => a.weekId === week.id);
          const coursesInWeek = COURSES.filter((c) =>
            weekAssessments.some((a) => a.courseId === c.id),
          );
          const completed = weekAssessments.filter(
            (a) => progress[a.id]?.status === "completed",
          ).length;

          return (
            <Link key={week.id} to={`/weeks/${week.id}`} className="card">
              {week.latest && <div className="latest-ribbon">Latest</div>}
              <div className="card-emoji">🗓️</div>
              <div className="card-label">{week.label}</div>
              <div className="card-desc">{week.description}</div>
              <div className="card-meta">
                <span>
                  {coursesInWeek.length} courses · {weekAssessments.length} assessments
                </span>
                <span>
                  {completed}/{weekAssessments.length} done
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
