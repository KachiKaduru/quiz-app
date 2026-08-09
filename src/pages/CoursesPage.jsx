import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import WEEKS, { getWeekById } from "../data/weeks";
import COURSES from "../data/courses";
import ASSESSMENTS from "../data/assessments";
import { getAllProgressMap } from "../lib/storage";

export default function CoursesPage() {
  const { weekId } = useParams();
  const week = getWeekById(weekId);
  const progress = getAllProgressMap();

  if (!week) {
    return (
      <div className="page">
        <Header />
        <div className="empty-state">
          Couldn't find that week.{" "}
          <Link to="/weeks" style={{ color: "var(--accent)" }}>
            Go back to weeks
          </Link>
        </div>
      </div>
    );
  }

  const weekAssessments = ASSESSMENTS.filter((a) => a.weekId === weekId);
  const coursesInWeek = COURSES.filter((c) =>
    weekAssessments.some((a) => a.courseId === c.id)
  );

  return (
    <div className="page">
      <Header />
      <div className="crumbs">
        <Link to="/weeks">Weeks</Link>
        <span className="sep">/</span>
        <span>{week.label}</span>
      </div>
      <h1 className="title">{week.label}</h1>
      <p className="subtitle">{week.description} Pick a course to see its assessments.</p>

      {coursesInWeek.length === 0 ? (
        <div className="empty-state">No courses added for this week yet.</div>
      ) : (
        <div className="grid">
          {coursesInWeek.map((course) => {
            const courseAssessments = weekAssessments.filter(
              (a) => a.courseId === course.id
            );
            const completed = courseAssessments.filter(
              (a) => progress[a.id]?.status === "completed"
            ).length;

            return (
              <Link
                key={course.id}
                to={`/weeks/${weekId}/${course.id}`}
                className="card"
              >
                <div className="card-emoji">{course.emoji}</div>
                <div className="card-label">{course.label}</div>
                <div className="card-desc">{course.description}</div>
                <div className="card-meta">
                  <span>{courseAssessments.length} assessments</span>
                  <span>{completed}/{courseAssessments.length} done</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
