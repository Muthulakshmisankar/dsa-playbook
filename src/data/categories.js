export const categories = [
  {
    id: "arrays",
    name: "Arrays & Strings",
    icon: "📊",
    description: "Fundamental array and string manipulation techniques",
    color: "#3b82f6",
    algorithms: ["two-pointers", "sliding-window", "prefix-sum", "kadane"]
  },
  {
    id: "searching",
    name: "Searching",
    icon: "🔍",
    description: "Binary search and its variants",
    color: "#8b5cf6",
    algorithms: ["binary-search", "ternary-search", "exponential-search"]
  },
  {
    id: "sorting",
    name: "Sorting",
    icon: "🔀",
    description: "Comparison and non-comparison sorting algorithms",
    color: "#ec4899",
    algorithms: [
      "bubble-sort",
      "selection-sort",
      "insertion-sort",
      "merge-sort",
      "quick-sort",
      "heap-sort",
      "counting-sort",
      "radix-sort"
    ]
  },
  {
    id: "hashing",
    name: "Hashing",
    icon: "#️⃣",
    description: "HashMap & HashSet patterns — frequency, lookup, grouping",
    color: "#f59e0b",
    algorithms: [
      "frequency-counting",
      "seen-tracking",
      "complement-lookup",
      "grouping"
    ]
  },
  {
    id: "recursion",
    name: "Recursion & Backtracking",
    icon: "🔁",
    description: "Recursive problem solving and state-space search",
    color: "#10b981",
    algorithms: [
      "recursion-basics",
      "subsets",
      "permutations",
      "combinations",
      "n-queens",
      "sudoku-solver"
    ]
  },
  {
    id: "linked-list",
    name: "Linked Lists",
    icon: "🔗",
    description: "Singly, doubly, and circular linked lists",
    color: "#6366f1",
    algorithms: [
      "linked-list-basics",
      "reverse-list",
      "floyd-cycle",
      "merge-sorted-lists"
    ]
  },
  {
    id: "stack-queue",
    name: "Stack & Queue",
    icon: "📚",
    description: "LIFO/FIFO structures and monotonic stacks",
    color: "#f97316",
    algorithms: [
      "stack-basics",
      "queue-basics",
      "monotonic-stack",
      "valid-parentheses",
      "next-greater-element",
      "largest-rectangle"
    ]
  },
  {
    id: "trees",
    name: "Trees",
    icon: "🌳",
    description: "Binary trees, BSTs, and traversals",
    color: "#22c55e",
    algorithms: [
      "tree-traversal",
      "bst-operations",
      "tree-height",
      "lowest-common-ancestor",
      "trie"
    ]
  },
  {
    id: "heaps",
    name: "Heaps / Priority Queue",
    icon: "⛰️",
    description: "Min-heap, max-heap, and top-K problems",
    color: "#a855f7",
    algorithms: [
      "heap-basics",
      "k-largest",
      "top-k-frequent",
      "task-scheduler"
    ]
  },
  {
    id: "dp",
    name: "Dynamic Programming",
    icon: "🧩",
    description: "Optimal substructure + overlapping subproblems",
    color: "#eab308",
    algorithms: [
      "climbing-stairs",
      "house-robber",
      "coin-change",
      "knapsack",
      "lcs",
      "edit-distance",
      "unique-paths",
      "partition-subset"
    ]
  },
  {
    id: "greedy",
    name: "Greedy",
    icon: "🎯",
    description: "Locally optimal choices leading to global optimum",
    color: "#ef4444",
    algorithms: [
      "activity-selection",
      "fractional-knapsack",
      "jump-game",
      "huffman-coding",
      "job-scheduling"
    ]
  },
  {
    id: "graphs",
    name: "Graphs",
    icon: "🕸️",
    description: "BFS, DFS, topological sort, shortest paths",
    color: "#0ea5e9",
    algorithms: ["graph-bfs", "graph-dfs", "topological-sort", "dijkstra"]
  },
  {
    id: "intervals",
    name: "Intervals",
    icon: "📅",
    description: "Merging, inserting, and overlapping intervals",
    color: "#d946ef",
    algorithms: ["merge-intervals", "insert-interval"]
  },
  {
    id: "bit-manipulation",
    name: "Bit Manipulation",
    icon: "🔢",
    description: "Bitwise operations, XOR tricks, and bitmask DP",
    color: "#64748b",
    algorithms: [
      "bit-basics",
      "single-number",
      "subsets-bitmask",
      "bitmask-dp"
    ]
  }
];

export default categories;