import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NameGate from "./components/NameGate";
import { hasSetName } from "./lib/storage";
import WeeksPage from "./pages/WeeksPage";
import CoursesPage from "./pages/CoursesPage";
import AssessmentsPage from "./pages/AssessmentsPage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";

export default function App() {
  const [nameReady, setNameReady] = useState(hasSetName());

  if (!nameReady) {
    return <NameGate onDone={() => setNameReady(true)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/weeks" replace />} />
      <Route path="/weeks" element={<WeeksPage />} />
      <Route path="/weeks/:weekId" element={<CoursesPage />} />
      <Route path="/weeks/:weekId/:courseId" element={<AssessmentsPage />} />
      <Route path="/quiz/:assessmentId" element={<QuizPage />} />
      <Route path="/quiz/:assessmentId/results" element={<ResultsPage />} />
      <Route path="*" element={<Navigate to="/weeks" replace />} />
    </Routes>
  );
}
