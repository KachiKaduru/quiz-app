import {useState} from "react";
import {hasSetName, setName} from "../lib/storage";

export default function NameGate({onDone}) {
  const [value, setValue] = useState("");

  if (hasSetName()) return null;

  function submit(name) {
    setName(name.trim());
    onDone();
  }

  return (
    <div className="center-screen">
      <div className="name-card">
        <div className="stamp">A</div>
        <h1>Welcome to your Assessment Center</h1>
        <p>
          What should we call you? It'll show up on your dashboard and results — purely optional,
          nothing breaks without it.
        </p>
        <input
          className="name-input"
          placeholder="Your name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && value.trim()) submit(value);
          }}
          autoFocus
        />
        <div className="name-actions">
          <button className="btn ghost" onClick={() => submit("")}>
            Skip
          </button>
          <button className="btn primary" disabled={!value.trim()} onClick={() => submit(value)}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
