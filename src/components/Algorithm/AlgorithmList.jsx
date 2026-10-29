import { useParams, useLocation } from "react-router-dom";
import {
  getAlgorithmsByCategory,
  categories,
  searchAlgorithms,
  getAllAlgorithms
} from "../../data";
import AlgorithmCard from "./AlgorithmCard";

export default function AlgorithmList() {
  const { categoryId } = useParams();
  const location = useLocation();

  let title, description, algorithms, color;

  if (categoryId) {
    const cat = categories.find((c) => c.id === categoryId);
    title = cat?.name || "Unknown";
    description = cat?.description || "";
    color = cat?.color;
    algorithms = getAlgorithmsByCategory(categoryId);
  } else if (location.pathname === "/search") {
    const q = new URLSearchParams(location.search).get("q") || "";
    title = `Search: "${q}"`;
    algorithms = q ? searchAlgorithms(q) : [];
    description = `${algorithms.length} result(s)`;
  } else {
    title = "All Algorithms";
    algorithms = getAllAlgorithms();
  }

  return (
    <div className="algo-list-page">
      <header className="algo-list-header">
        <h1 style={{ color }}>{title}</h1>
        {description && <p>{description}</p>}
        <span className="count">{algorithms.length} algorithm(s)</span>
      </header>

      {algorithms.length === 0 ? (
        <div className="empty-state">
          <p>🔍 No results found.</p>
        </div>
      ) : (
        <div className="algo-grid">
          {algorithms.map((a) => (
            <AlgorithmCard key={a.id} algo={a} />
          ))}
        </div>
      )}
    </div>
  );
}