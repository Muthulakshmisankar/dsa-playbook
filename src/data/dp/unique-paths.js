export default {
  id: "unique-paths",
  name: "Unique Paths",
  category: "dp",
  description:
    "Count paths from top-left to bottom-right in a grid moving only right/down. Grid DP: each cell = sum of top + left.",
  story: "Each cell = paths from top + paths from left.",
  difficulty: "medium",
  keywords: ["unique paths", "grid", "matrix", "number of ways", "robot"],
  triggers: ["grid paths", "right or down", "number of ways in grid"],
  timeComplexity: "O(mn)",
  spaceComplexity: "O(mn) → O(n) optimized",
  patterns: ["grid DP", "1D rolling row"],
  notes: [
    "First row and first column = 1 (only one way)",
    "dp[r][c] = dp[r-1][c] + dp[r][c-1]",
    "Obstacles version (LC 63): set dp[r][c] = 0 at obstacle",
    "1D: dp[c] = dp[c] + dp[c-1] (dp[c] is top, dp[c-1] is left)"
  ],
  programs: [
    {
      id: "unique-paths-2d",
      title: "Unique Paths (2D DP)",
      description: "Standard grid DP.",
      language: "javascript",
      approach: "2D DP",
      code: `function uniquePaths(rows, cols) {
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(1));

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
    }
  }
  return dp[rows - 1][cols - 1];
}`,
      example: {
        input: "rows = 3, cols = 7",
        output: "28"
      },
      complexity: { time: "O(mn)", space: "O(mn)" },
      tags: ["grid", "unique paths", "leetcode-62"]
    },
    {
      id: "unique-paths-1d",
      title: "Unique Paths (1D Optimized)",
      description: "Single array — O(n) space.",
      language: "javascript",
      approach: "1D DP",
      code: `function uniquePaths1D(rows, cols) {
  const dp = new Array(cols).fill(1);

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      dp[c] = dp[c] + dp[c - 1];
    }
  }
  return dp[cols - 1];
}`,
      example: {
        input: "rows = 3, cols = 7",
        output: "28"
      },
      complexity: { time: "O(mn)", space: "O(n)" },
      tags: ["grid", "space-optimized"]
    },
    {
      id: "unique-paths-obstacles",
      title: "Unique Paths II (Obstacles)",
      description: "LeetCode 63 — obstacles block movement.",
      language: "javascript",
      approach: "grid DP",
      code: `function uniquePathsWithObstacles(grid) {
  const m = grid.length, n = grid[0].length;
  if (grid[0][0] === 1) return 0;

  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  dp[0][0] = 1;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1) {
        dp[r][c] = 0;
      } else if (r > 0 || c > 0) {
        const fromTop = r > 0 ? dp[r - 1][c] : 0;
        const fromLeft = c > 0 ? dp[r][c - 1] : 0;
        dp[r][c] = fromTop + fromLeft;
      }
    }
  }
  return dp[m - 1][n - 1];
}`,
      example: {
        input: "grid = [[0,0,0],[0,1,0],[0,0,0]]",
        output: "2"
      },
      complexity: { time: "O(mn)", space: "O(mn)" },
      tags: ["obstacles", "leetcode-63"]
    }
  ],
  relatedAlgorithms: ["climbing-stairs", "knapsack"],
  leetcodeTags: ["dp", "grid"],
  order: 7
};