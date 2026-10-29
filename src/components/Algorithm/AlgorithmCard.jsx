import { Link } from "react-router-dom";

export default function AlgorithmCard({ algo }) {
  return (
    <Link to={`/algorithm/${algo.id}`} className="algo-card">
      <div className="algo-card-header">
        <h3>{algo.name}</h3>
        <span className={`difficulty ${algo.difficulty}`}>
          {algo.difficulty}
        </span>
      </div>
      <p className="algo-card-desc">{algo.description}</p>
      <div className="algo-card-meta">
        <span>⏱ {algo.timeComplexity}</span>
        <span>💾 {algo.spaceComplexity}</span>
        <span>📝 {algo.programs.length}</span>
      </div>
      <div className="algo-card-tags">
        {algo.keywords.slice(0, 4).map((k) => (
          <span key={k} className="tag">
            {k}
          </span>
        ))}
      </div>
    </Link>
  );
}