// src/components/Layout/Footer.jsx
//
// Reusable site footer — shows on every page via <Layout />.
// Update AUTHOR and links below to reflect your info.

import { Link } from "react-router-dom";

// 🔧 CONFIGURE YOUR INFO HERE
const AUTHOR = {
  name: "Muthulakshmi",
  github: "https://github.com/Muthulakshmisankar",
  linkedin: "https://linkedin.com/in/muthulakshmisivasankarasubramanian",
};

const REPO_URL = "https://github.com/yourusername/dsa-playbook";
const LICENSE_URL = `${REPO_URL}/blob/main/LICENSE`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-divider" />

      <div className="footer-content">
        <span>
          Built with <span className="footer-heart">❤️</span> by{" "}
          <a
            href={AUTHOR.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            {AUTHOR.name}
          </a>
        </span>

        <span className="footer-sep">·</span>

        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          View Source
        </a>

        <span className="footer-sep">·</span>

        <a
          href={LICENSE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          MIT License
        </a>

        <span className="footer-sep">·</span>

        <Link to="/about" className="footer-link">
          About
        </Link>
      </div>

      <div className="footer-copyright">
        © {year} {AUTHOR.name}. All code is MIT-licensed.
      </div>
    </footer>
  );
}