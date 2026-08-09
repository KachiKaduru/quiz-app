export default function ProgressBar({ fraction, done }) {
  const pct = Math.max(0, Math.min(1, fraction)) * 100;
  return (
    <div className="progress-track">
      <div
        className={`progress-fill${done ? " done" : ""}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
