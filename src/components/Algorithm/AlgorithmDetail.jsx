import { useParams, Link } from "react-router-dom";
import { getAlgorithm, algorithms } from "../../data";
import ProgramViewer from "./ProgramViewer";
import SEO from 'metaforge-seo';

export default function AlgorithmDetail() {
  const { algoId } = useParams();
  const algo = getAlgorithm(algoId);

  if (!algo) {
    return (
      <div className="empty-state">
        <h2>Algorithm not found</h2>
        <Link to="/">← Back to home</Link>
      </div>
    );
  }

  return (
    <>
    <SEO 
        title={`${algo.name} | DSA Playbook`}
        description={algo.description}
        ogTitle={algo.name}
        ogDescription={algo.description}
        ogUrl={`https://javascriptdsaplaybook.netlify.app/algorithm/${algo.id}`}></SEO>
  
    <article className="algo-detail">
      <header className="algo-detail-header">
        <div className="breadcrumb">
          <Link to="/">Home</Link> /{" "}
          <Link to={`/category/${algo.category}`}>{algo.category}</Link>
        </div>
        <h1>{algo.name}</h1>
        <p className="algo-detail-desc">{algo.description}</p>

        <div className="meta-row">
          <span className="meta-pill">⏱ {algo.timeComplexity}</span>
          <span className="meta-pill">💾 {algo.spaceComplexity}</span>
          <span className={`difficulty ${algo.difficulty}`}>
            {algo.difficulty}
          </span>
        </div>

        {algo.story && <blockquote className="story">💡 {algo.story}</blockquote>}
      </header>

      <section className="section">
        <h2>🎯 When to use</h2>
        <ul className="trigger-list">
          {algo.triggers.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      {algo.notes?.length > 0 && (
        <section className="section">
          <h2>📌 Key Notes</h2>
          <ul className="note-list">
            {algo.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="section">
        <h2>💻 Programs ({algo.programs.length})</h2>
        <ProgramViewer programs={algo.programs}   algoId={algo.id} / >
      </section>

      {algo.relatedAlgorithms?.length > 0 && (
        <section className="section">
          <h2>🔗 Related Algorithms</h2>
          <div className="related-list">
            {algo.relatedAlgorithms
              .map((id) => algorithms[id])
              .filter(Boolean)
              .map((r) => (
                <Link key={r.id} to={`/algorithm/${r.id}`} className="related-link">
                  {r.name} →
                </Link>
              ))}
          </div>
        </section>
      )}
    </article>
      </>
  );
}