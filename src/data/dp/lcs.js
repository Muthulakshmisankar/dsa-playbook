export default {
  id: "lcs",
  name: "Longest Common Subsequence",
  category: "dp",
  description:
    "Longest common subsequence between two strings. 2D DP — foundation of diff tools, DNA analysis, and edit distance.",
  story: "Match → extend; mismatch → take max of skipping either.",
  difficulty: "medium",
  keywords: ["lcs", "longest common subsequence", "two strings", "2D DP"],
  triggers: ["longest common", "two strings", "subsequence"],
  timeComplexity: "O(mn)",
  spaceComplexity: "O(mn) → O(n) optimized",
  patterns: ["2D DP", "two-string grid"],
  notes: [
    "Match: dp[i][j] = dp[i-1][j-1] + 1",
    "Mismatch: max(dp[i-1][j], dp[i][j-1])",
    "Subsequence ≠ substring — characters don't need to be contiguous"
  ],
  programs: [
    {
      id: "lcs-basic",
      title: "LCS (2D DP)",
      description: "Classic O(mn) DP.",
      language: "javascript",
      approach: "2D DP",
      code: `function longestCommonSubsequence(s1, s2) {
  const m = s1.length, n = s2.length;
  const dp = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}`,
      example: {
        input: 's1 = "abcde", s2 = "ace"',
        output: "3",
        explanation: '"ace"'
      },
      complexity: { time: "O(mn)", space: "O(mn)" },
      tags: ["lcs", "2D"]
    },
    {
      id: "lcs-space",
      title: "LCS (Space-Optimized)",
      description: "Two rolling rows → O(n) space.",
      language: "javascript",
      approach: "rolling rows",
      code: `function lcsOptimized(s1, s2) {
  const m = s1.length, n = s2.length;
  let prev = new Array(n + 1).fill(0);

  for (let i = 1; i <= m; i++) {
    const curr = new Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) curr[j] = prev[j - 1] + 1;
      else curr[j] = Math.max(prev[j], curr[j - 1]);
    }
    prev = curr;
  }
  return prev[n];
}`,
      example: {
        input: 's1 = "abcde", s2 = "ace"',
        output: "3"
      },
      complexity: { time: "O(mn)", space: "O(n)" },
      tags: ["lcs", "space-optimized"]
    }
  ],
  relatedAlgorithms: ["edit-distance"],
  leetcodeTags: ["dp", "strings"],
  order: 5
};