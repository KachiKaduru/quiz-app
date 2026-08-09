import {Link} from "react-router-dom";
import {getName} from "../lib/storage";

export default function Header() {
  const name = getName();

  return (
    <div className="brand">
      <Link to="/weeks" className="brand-title">
        GT<span className="stamp-dot">Assessments</span>
      </Link>
      {name && (
        <div className="brand-user">
          Welcome back, <b>{name}</b>
        </div>
      )}
    </div>
  );
}
