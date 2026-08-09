import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import { getAssessmentById } from "../data/assessments";
import { getCourseById } from "../data/courses";
import { getWeekById } from "../data/weeks";
import { getAssessmentProgress, saveAssessmentProgress } from "../lib/storage";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

export default function QuizPage() {
  const { assessmentId } = useParams();
  const navigate = useNavigate();
  const assessment = getAssessmentById(assessmentId);

  const existing = getAssessmentProgress(assessmentId);
  const [index, setIndex] = useState(existing?.currentIndex ?? 0);
  const [answers, setAnswers] = useState(existing?.answers ?? {});

  useEffect(() => {
    if (!assessment) return;
    if (existing?.status === "completed") {
      navigate(`/quiz/${assessmentId}/results`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!assessment) {
    return (
      <div className="page">
        <Header />
        <div className="empty-state">
          Assessment not found.{" "}
          <Link to="/weeks" style={{ color: "var(--accent)" }}>
            Go back
          </Link>
        </div>
      </div>
    );
  }

  const week = getWeekById(assessment.weekId);
  const course = getCourseById(assessment.courseId);
  const question = assessment.questions[index];
  const total = assessment.questions.length;
  const selected = answers[index];

  function persist(nextAnswers, nextIndex) {
    saveAssessmentProgress(assessmentId, {
      status: "in-progress",
      currentIndex: nextIndex,
      answers: nextAnswers,
      total,
    });
  }

  function selectOption(optionIndex) {
    const nextAnswers = { ...answers, [index]: optionIndex };
    setAnswers(nextAnswers);
    persist(nextAnswers, index);
  }

  function goNext() {
    if (index < total - 1) {
      const nextIndex = index + 1;
      setIndex(nextIndex);
      persist(answers, nextIndex);
    } else {
      finish();
    }
  }

  function goPrev() {
    if (index > 0) {
      const prevIndex = index - 1;
      setIndex(prevIndex);
      persist(answers, prevIndex);
    }
  }

  function finish() {
    let score = 0;
    assessment.questions.forEach((q, i) => {
      if (answers[i] === q.correctIndex) score += 1;
    });
    saveAssessmentProgress(assessmentId, {
      status: "completed",
      currentIndex: total - 1,
      answers,
      score,
      total,
    });
    navigate(`/quiz/${assessmentId}/results`);
  }

  const answeredCount = Object.keys(answers).length;

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
        <span>{assessment.title}</span>
      </div>

      <div className="quiz-progress-wrap">
        <div className="quiz-head">
          <span>Question {index + 1} of {total}</span>
          <span>{answeredCount}/{total} answered</span>
        </div>
        <ProgressBar fraction={(index + 1) / total} />
      </div>

      <div className="question-text">{question.text}</div>

      <div className="options">
        {question.options.map((opt, i) => (
          <button
            key={i}
            className={`option${selected === i ? " selected" : ""}`}
            onClick={() => selectOption(i)}
          >
            <span className="option-letter">{LETTERS[i]}</span>
            <span>{opt}</span>
          </button>
        ))}
      </div>

      <div className="quiz-nav">
        <button className="btn ghost" onClick={goPrev} disabled={index === 0}>
          ← Previous
        </button>
        <button
          className="btn primary"
          onClick={goNext}
          disabled={selected === undefined}
        >
          {index === total - 1 ? "Finish & see score" : "Next →"}
        </button>
      </div>
    </div>
  );
}
