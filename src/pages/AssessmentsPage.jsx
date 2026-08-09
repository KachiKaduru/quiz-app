import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import { getWeekById } from "../data/weeks";
import { getCourseById } from "../data/courses";
import { getAssessmentsByCourse } from "../data/assessments";
import { getAllProgressMap } from "../lib/storage";

export default function AssessmentsPage() {
  const { weekId, courseId } = useParams();
  const week = getWeekById(weekId);
  const course = getCourseById(courseId);
  const assessments = getAssessmentsByCourse(weekId, courseId);
  const progress = getAllProgressMap();

  if (!week || !course) {
    return (
      <div className="page">
        <Header />
        <div className="empty-state">
          Couldn't find that course.{" "}
          <Link to="/weeks" style={{ color: "var(--accent)" }}>
            Go back to weeks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <Header />
      <div className="crumbs">
        <Link to="/weeks">Weeks</Link>
        <span className="sep">/</span>
        <Link to={`/weeks/${weekId}`}>{week.label}</Link>
        <span className="sep">/</span>
        <span>{course.label}</span>
      </div>
      <h1 className="title">{course.label}</h1>
      <p className="subtitle">{course.description}</p>

      {assessments.length === 0 ? (
        <div className="empty-state">No assessments added for this course yet.</div>
      ) : (
        <div className="grid">
          {assessments.map((a) => {
            const p = progress[a.id];
            const status = p?.status;
            const fraction = p
              ? status === "completed"
                ? 1
                : (p.currentIndex ?? 0) / a.questions.length
              : 0;

            return (
              <Link key={a.id} to={`/quiz/${a.id}`} className="card">
                <div className="card-label">{a.title}</div>
                <div className="card-desc">{a.description}</div>
                <ProgressBar fraction={fraction} done={status === "completed"} />
                <div className="card-meta">
                  <span>{a.questions.length} questions</span>
                  {status === "completed" ? (
                    <span className="pill completed">
                      {p.score}/{p.total} scored
                    </span>
                  ) : status === "in-progress" ? (
                    <span className="pill in-progress">in progress</span>
                  ) : (
                    <span className="pill">not started</span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
