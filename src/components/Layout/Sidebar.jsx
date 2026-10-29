import { NavLink } from "react-router-dom";
import { categories, getAlgorithm } from "../../data";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        {categories.map((cat) => {
          const algos = cat.algorithms.map(getAlgorithm).filter(Boolean);
          if (!algos.length) return null;
          return (
            <div key={cat.id} className="sidebar-group">
              <NavLink
                to={`/category/${cat.id}`}
                className="sidebar-group-title"
                style={{ color: cat.color }}
                onClick={onClose}
              >
                <span className="icon">{cat.icon}</span>
                {cat.name}
              </NavLink>
              <ul className="sidebar-items">
                {algos.map((a) => (
                  <li key={a.id}>
                    <NavLink
                      to={`/algorithm/${a.id}`}
                      onClick={onClose}
                      className={({ isActive }) =>
                        isActive ? "sidebar-item active" : "sidebar-item"
                      }
                    >
                      {a.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </aside>
    </>
  );
}