# 📚 DSA Playbook — JavaScript

> A curated, interactive collection of data structures and algorithms in JavaScript — organized by pattern, with runnable code, complexity analysis, and real-world examples.

/**
 * 
 *
 * Author: Muthulakshmi [(https://github.com/Muthulakshmisankar)]
 * **🌐 Live Demo:** [javascriptdsaplaybook.netlify.app](https://javascriptdsaplaybook.netlify.app/)

 *
 * 
 */
---

## ✨ Features

- 📖 **67 algorithms** across **14 categories** — from Two Pointers to Bitmask DP
- 💻 **158 runnable programs** with syntax highlighting and copy-to-clipboard
- 🔍 **Live search** across algorithm names, keywords, triggers, and program titles
- 🎯 **Pattern-based organization** — organized by *when to use*, not just alphabetically
- 📊 **Complexity pills** on every program (time + space)
- 🔗 **Related algorithm** cross-links for connected learning
- 🏷️ **Difficulty badges** — easy / medium / hard
- 📱 **Fully responsive** — works great on mobile and desktop
- 🌙 **Dark theme** by default — easy on the eyes for long coding sessions

---

## 🗂️ Categories Covered

| # | Category | Algorithms | Topics |
|---|----------|-----------|--------|
| 1 | 📊 **Arrays & Strings** | 4 | Two Pointers, Sliding Window, Prefix Sum, Kadane |
| 2 | 🔍 **Searching** | 3 | Binary Search, Ternary, Exponential |
| 3 | 🔀 **Sorting** | 8 | Bubble, Selection, Insertion, Merge, Quick, Heap, Counting, Radix |
| 4 | #️⃣ **Hashing** | 4 | Frequency, Seen Tracking, Complement Lookup, Grouping |
| 5 | 🔁 **Recursion & Backtracking** | 6 | Basics, Subsets, Permutations, Combinations, N-Queens, Sudoku |
| 6 | 🔗 **Linked Lists** | 4 | Basics, Reverse, Floyd's Cycle, Merge |
| 7 | 📚 **Stack & Queue** | 6 | Stack, Queue, Monotonic Stack, Valid Parentheses, NGE, Largest Rectangle |
| 8 | 🌳 **Trees** | 5 | Traversals, BST, Height/Diameter, LCA, Trie |
| 9 | ⛰️ **Heaps** | 4 | Heap Basics, K-Largest, Top-K Frequent, Task Scheduler |
| 10 | 🧩 **Dynamic Programming** | 8 | Climbing Stairs, House Robber, Coin Change, Knapsack, LCS, Edit Distance, Unique Paths, Partition |
| 11 | 🎯 **Greedy** | 5 | Activity Selection, Fractional Knapsack, Jump Game, Huffman, Job Scheduling |
| 12 | 🕸️ **Graphs** | 4 | BFS, DFS, Topological Sort, Dijkstra |
| 13 | 📅 **Intervals** | 2 | Merge, Insert |
| 14 | 🔢 **Bit Manipulation** | 4 | Basics, Single Number, Subsets via Bitmask, Bitmask DP |

**Total: 67 algorithms · 158 programs**

---

## 🚀 Tech Stack

- **⚛️ React 18** — UI library
- **⚡ Vite** — Lightning-fast build tool & dev server
- **🧭 React Router v6** — Client-side routing
- **🎨 React Syntax Highlighter** — Code display with Prism
- **🎨 Vanilla CSS** — No framework, just clean scoped styles
- **☁️ Netlify** — Deployment

---

## 🏃 Run Locally

### Prerequisites

- **Node.js** ≥ 18 ([download](https://nodejs.org/))
- **npm** ≥ 9 (comes with Node)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/dsa-playbook.git
cd dsa-playbook

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be available at **http://localhost:3000** (opens automatically).

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |

---

## 📁 Project Structure

```
dsa-playbook/
├── public/
├── src/
│   ├── main.jsx                   # React entry point
│   ├── App.jsx                    # Router + routes
│   ├── index.css                  # Global styles
│   │
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.jsx         # Sidebar + main wrapper
│   │   │   ├── Header.jsx         # Logo + search bar
│   │   │   └── Sidebar.jsx        # Category navigation
│   │   ├── Algorithm/
│   │   │   ├── AlgorithmList.jsx  # Grid view of algorithms
│   │   │   ├── AlgorithmCard.jsx  # Card for each algorithm
│   │   │   ├── AlgorithmDetail.jsx# Full detail page
│   │   │   └── ProgramViewer.jsx  # Tabbed code viewer
│   │   └── UI/
│   │       └── CodeBlock.jsx      # Syntax-highlighted code
│   │
│   └── data/
│       ├── index.js               # Algorithm registry + helpers
│       ├── categories.js          # Category metadata
│       ├── arrays/                # One file per algorithm
│       ├── searching/
│       ├── sorting/
│       ├── hashing/
│       ├── recursion/
│       ├── linked-list/
│       ├── stack-queue/
│       ├── trees/
│       ├── heaps/
│       ├── dp/
│       ├── greedy/
│       ├── graphs/
│       ├── intervals/
│       └── bit-manipulation/
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📐 Data Schema

Each algorithm file is a plain JS object exported as default. This makes it trivial to add new content.

```javascript
export default {
  // Identity
  id: "two-pointers",              // unique URL-safe slug
  name: "Two Pointers",            // display name
  category: "arrays",              // must match a category id
  description: "…",                // one-line summary
  story: "…",                      // mental model (optional)

  // Metadata
  difficulty: "easy",              // easy | medium | hard
  keywords: ["pair", "sorted"],    // for search
  triggers: ["sorted array"],      // "when to use"
  timeComplexity: "O(n)",
  spaceComplexity: "O(1)",
  patterns: ["move inward"],
  notes: ["Handles duplicates carefully"],

  // Programs
  programs: [
    {
      id: "find-pair-sum",
      title: "Find Pair with Target Sum",
      description: "…",
      language: "javascript",
      approach: "two-pointer",
      code: `function findPairWithSum(arr, target) { … }`,
      example: {
        input: "arr = [1,2,3,4,6], target = 6",
        output: "[2,4]",
        explanation: "2 + 4 = 6",
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["sorted array", "two sum"],
      notes: "Assumes sorted array.",
      variations: ["Three Sum", "Two Sum II"],
    },
  ],

  relatedAlgorithms: ["sliding-window", "prefix-sum"],
  leetcodeTags: ["two-pointers"],
  order: 1,                        // display order within category
};
```

---

## ➕ Adding a New Algorithm

Adding an algorithm takes **3 steps** — no build config or code changes needed.

### 1. Create the algorithm file

Create `src/data/YOUR_CATEGORY/your-algorithm.js`:

```javascript
export default {
  id: "your-algorithm",
  name: "Your Algorithm",
  category: "your-category",
  description: "What it does, in one line.",
  difficulty: "medium",
  keywords: ["keyword1", "keyword2"],
  triggers: ["when to use"],
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  programs: [
    {
      id: "your-program",
      title: "Your Program",
      description: "What this program solves.",
      language: "javascript",
      code: `function solve() { /* ... */ }`,
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["tag"],
    },
  ],
  relatedAlgorithms: [],
  order: 1,
};
```

### 2. Register it in `src/data/index.js`

```javascript
import yourAlgorithm from "./your-category/your-algorithm";

export const algorithms = {
  // ...
  "your-algorithm": yourAlgorithm,
};
```

### 3. Add it to `src/data/categories.js`

```javascript
{
  id: "your-category",
  name: "Your Category",
  icon: "🎨",
  description: "…",
  color: "#ff00aa",
  algorithms: ["your-algorithm", /* other ids */],
}
```

Restart the dev server (or Vite will hot-reload) — done! ✅

---

## 🎨 Customization

### Change Theme Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --bg: #0f172a;
  --accent: #3b82f6;
  --easy: #22c55e;
  --medium: #f59e0b;
  --hard: #ef4444;
  /* ... */
}
```

### Add a New Category

1. Create a folder under `src/data/your-category/`
2. Add algorithm files (see schema above)
3. Add the category to `src/data/categories.js`
4. Import and register algorithms in `src/data/index.js`

### Change Search Behavior

Edit `searchAlgorithms()` in `src/data/index.js` to match against different fields.

---

## 🌐 Deployment

### Netlify (current deployment)

The project is deployed at **[javascriptdsaplaybook.netlify.app](https://javascriptdsaplaybook.netlify.app/)**.

**Netlify setup:**

1. Connect your GitHub repo to Netlify
2. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Add a `public/_redirects` file for SPA routing:

```
/*    /index.html   200
```

This ensures deep links like `/algorithm/dijkstra` don't 404 on refresh.

### Vercel

```bash
npm install -g vercel
vercel
```

Vercel handles SPA routing automatically — no `_redirects` file needed.

### GitHub Pages

```bash
npm run build
# deploy dist/ to gh-pages branch
```

⚠️ Set `base: "/your-repo-name/"` in `vite.config.js` when deploying to a subpath.

---

## 🤝 Contributing

Contributions are welcome! Whether it's:

- 🐛 Bug fixes (typos, incorrect complexity, broken links)
- ✨ New algorithms or programs
- 📝 Better examples or explanations
- 🎨 UI improvements
- ⚡ Performance tweaks

### Steps

1. **Fork** the repo
2. **Create** a feature branch: `git checkout -b feature/new-algorithm`
3. **Add** your algorithm following the schema above
4. **Test** locally: `npm run dev`
5. **Commit**: `git commit -m "Add: New Algorithm"`
6. **Push**: `git push origin feature/new-algorithm`
7. **Open** a Pull Request

Please make sure each program:

- ✅ Is self-contained and runnable
- ✅ Has correct complexity annotations
- ✅ Includes an example with input / output
- ✅ Follows the style of existing files

---

## 📊 Project Stats

| Metric | Count |
|--------|-------|
| Categories | 14 |
| Algorithms | 67 |
| Programs | 158 |
| Languages | JavaScript |
| Lines of code | ~10,000+ |

---

## 🎯 Who Is This For?

- 🧑‍💻 **Interview prep** — quick reference for common DSA patterns
- 📚 **Students** learning data structures and algorithms
- 👩‍🏫 **Instructors** looking for clean reference implementations
- 🔍 **Developers** who want a searchable pattern library ("what's that sliding-window trick again?")
- 💡 **Self-learners** building from patterns, not just memorizing code

---

## 🗺️ Roadmap

- [ ] **Theme toggle** — dark/light mode persisted to localStorage
- [ ] **Bookmarks** — star algorithms, view "My Favorites"
- [ ] **Progress tracking** — mark algorithms as learned, show per-category completion
- [ ] **Random problem** button — jump to a random algorithm
- [ ] **Interactive visualizations** — animate two-pointers, sliding-window, BFS on canvas
- [ ] **In-browser code execution** — run JS programs in a sandbox
- [ ] **Practice mode** — hide solution, reveal on click
- [ ] **Deep-link to program** — `/algorithm/dijkstra?program=network-delay`
- [ ] **Keyboard shortcuts** — `/` for search, `j`/`k` for navigation

Have a feature idea? [Open an issue](../../issues)!

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

You're free to:

- ✅ Use this project for personal or commercial purposes
- ✅ Modify the content
- ✅ Distribute your modified version
- ✅ Use programs in your own projects

Just include a copy of the license and credit the original.

---

## 🙏 Acknowledgments

- **Problem sources** — [LeetCode](https://leetcode.com/), [GeeksforGeeks](https://www.geeksforgeeks.org/), classic algorithm textbooks
- **Design inspiration** — [NeetCode](https://neetcode.io/), [CP-Algorithms](https://cp-algorithms.com/)
- **JS ecosystem** — React, Vite, and the open-source community
- **Icons** — Emoji (universal, dependency-free)

---

## 📬 Contact

- 🌐 **Live app:** [javascriptdsaplaybook.netlify.app](https://javascriptdsaplaybook.netlify.app/)
- 🐛 **Bug reports:** [Open an issue](../../issues)
- 💬 **Discussions:** [Start a discussion](../../discussions)

---

## ⭐ Show Your Support

If this project helped you prepare for an interview, learn a new pattern, or just made you go *"oh, THAT's how it works"* — please give it a **⭐ star** on GitHub! It helps others find it and motivates continued updates.

---

<div align="center">

**Built with ❤️ and JavaScript**

[⬆ Back to Top](#-dsa-playbook--javascript)

</div>

/**
 * 
 *
 * Author: Muthulakshmi [(https://github.com/Muthulakshmisankar)]
 * Source: https://javascriptdsaplaybook.netlify.app/
 *
 * 
 */