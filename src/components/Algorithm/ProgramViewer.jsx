import { useEffect, useState } from "react";
import CodeBlock from "../UI/CodeBlock";

export default function ProgramViewer({ programs , algoId }) {
  const [active, setActive] = useState(0);
  const prog = programs[active];
  useEffect(()=>{
    setActive(0)
  },[algoId])
  return (
    <div className="program-viewer">
      <div className="tabs">
        {programs.map((p, i) => (
          <button
            key={p.id}
            className={i === active ? "tab active" : "tab"}
            onClick={() => setActive(i)}
          >
            {p.title}
          </button>
        ))}
      </div>

      <div className="panel">
        <p className="program-desc">{prog.description}</p>
        <CodeBlock code={prog.code} language={prog.language} />

        <div className="prog-meta">
          <span className="meta-pill">⏱ {prog.complexity.time}</span>
          <span className="meta-pill">💾 {prog.complexity.space}</span>
          {prog.tags?.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        {prog.example && (
          <div className="example">
            <strong>Example</strong>
            <pre>
              <code>
                Input:  {prog.example.input}
                {"\n"}
                Output: {prog.example.output}
                {prog.example.explanation && `\n${prog.example.explanation}`}
              </code>
            </pre>
          </div>
        )}

        {prog.notes && <p className="program-notes">💡 {prog.notes}</p>}

        {prog.variations?.length > 0 && (
          <div className="variations">
            <strong>Variations:</strong>{" "}
            {prog.variations.map((v) => (
              <span key={v} className="tag">
                {v}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}