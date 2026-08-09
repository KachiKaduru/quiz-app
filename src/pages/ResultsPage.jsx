import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { getAssessmentById } from "../data/assessments";
import { getCourseById } from "../data/courses";
import { getWeekById } from "../data/weeks";
import { getAssessmentProgress, getName, resetAssessmentProgress } from "../lib/storage";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

function verdict(pct) {
  if (pct >= 90) return "Outstanding — that's mastery.";
  if (pct >= 70) return "Solid work. A little more review and you're set.";
  if (pct >= 50) return "Halfway there. Worth another pass.";
  return "Rough one — go through the review below.";
}

export default function ResultsPage() {
  const { assessmentId } = useParams();
  const navigate = useNavigate();
  const assessment = getAssessmentById(assessmentId);
  const progress = getAssessmentProgress(assessmentId);
  const name = getName();

  if (!assessment || !progress || progress.status !== "completed") {
    return (
      <div className="page">
        <Header />
        <div className="empty-state">
          No results yet for this assessment.{" "}
          <Link to={`/quiz/${assessmentId}`} style={{ color: "var(--accent)" }}>
            Take it now
          </Link>
        </div>
      </div>
    );
  }

  const week = getWeekById(assessment.weekId);
  const course = getCourseById(assessment.courseId);
  const { score, total, answers } = progress;
  const pct = Math.round((score / total) * 100);

  function retake() {
    resetAssessmentProgress(assessmentId);
    navigate(`/quiz/${assessmentId}`);
  }

  return (
    <div className="page">
      <Header />
      <div className="crumbs">
        <Link to="/weeks">Weeks</Link>
        <span className="sep">/</span>
        {week && <Link to={`/weeks/${week.id}`}>{week.label}</Link>}
        <span className="sep">/</span>
        {course && (
          <Link to={`/weeks/${week.id}/${course.id}`}>{course.label}</Link>
        )}
        <span className="sep">/</span>
        <span>{assessment.title} results</span>
      </div>

      <div className="results-hero">
        <div className="score-stamp">
          <div className="num">{score}/{total}</div>
          <div className="denom">{pct}%</div>
        </div>
        <div className="results-verdict">
          {name ? `${name}, here's how you did.` : "Here's how you did."}
        </div>
        <div className="results-sub">{verdict(pct)}</div>
      </div>

      <div className="results-actions">
        <button className="btn primary" onClick={retake}>
          Retake assessment
        </button>
        {course && week && (
          <Link className="btn" to={`/weeks/${week.id}/${course.id}`}>
            Back to {course.label}
          </Link>
        )}
        <Link className="btn ghost" to="/weeks">
          All weeks
        </Link>
      </div>

      <h2 style={{ fontFamily: "var(--display)", fontSize: 17, margin: "36px 0 14px" }}>
        Review
      </h2>

      {assessment.questions.map((q, i) => {
        const userAnswer = answers[i];
        const isCorrect = userAnswer === q.correctIndex;
        return (
          <div key={i} className="review-item">
            <div className="review-q">
              {i + 1}. {q.text}
            </div>
            <div className={`review-answer ${isCorrect ? "correct" : "incorrect"}`}>
              <span>{isCorrect ? "✓" : "✕"}</span>
              <span>
                Your answer:{" "}
                {userAnswer !== undefined
                  ? `${LETTERS[userAnswer]}. ${q.options[userAnswer]}`
                  : "— not answered"}
              </span>
            </div>
            {!isCorrect && (
              <div className="review-answer correct">
                <span>✓</span>
                <span>
                  Correct answer: {LETTERS[q.correctIndex]}. {q.options[q.correctIndex]}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
