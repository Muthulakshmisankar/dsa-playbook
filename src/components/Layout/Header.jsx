import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchAlgorithms } from "../../data";

export default function Header({ onMenuClick }) {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);
  const nav = useNavigate();

  const handleChange = (e) => {
    const val = e.target.value;
    setQ(val);
    setResults(val.trim() ? searchAlgorithms(val).slice(0, 8) : []);
  };

  const handleSelect = (id) => {
    nav(`/algorithm/${id}`);
    setQ("");
    setResults([]);
  };

  return (
    <header className="header">
      <button className="menu-btn" onClick={onMenuClick} aria-label="Menu">
        ☰
      </button>
      <Link to="/" className="logo">
        📚 DSA Playbook
      </Link>
      <div className="search-wrap">
        <input
          type="text"
          value={q}
          onChange={handleChange}
          placeholder="Search algorithms, keywords…"
          className="search-input"
        />
        {results.length > 0 && (
          <ul className="search-results">
            {results.map((r) => (
              <li key={r.id} onClick={() => handleSelect(r.id)}>
                <strong>{r.name}</strong>
                <span>{r.description.slice(0, 70)}…</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}