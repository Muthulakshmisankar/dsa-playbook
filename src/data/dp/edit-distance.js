export default {
  id: "edit-distance",
  name: "Edit Distance",
  category: "dp",
  description:
    "Min operations (insert, delete, replace) to transform one string into another. Classic 2D DP — foundation of spell-checkers and diff tools.",
  story: "Match → no cost; mismatch → 1 + min(insert, delete, replace).",
  difficulty: "hard",
  keywords: ["edit distance", "levenshtein", "insert delete replace", "two strings"],
  triggers: ["minimum operations", "transform string", "spell check"],
  timeComplexity: "O(mn)",
  spaceComplexity: "O(mn) → O(n) optimized",
  patterns: ["2D DP", "three-way min"],
  notes: [
    "Match: dp[i][j] = dp[i-1][j-1]",
    "Mismatch: 1 + min of three neighbors",
    "delete: dp[i-1][j], insert: dp[i][j-1], replace: dp[i-1][j-1]",
    "Base: dp[i][0] = i, dp[0][j] = j"
  ],
  programs: [
    {
      id: "edit-distance-basic",
      title: "Edit Distance (2D DP)",
      description: "Classic LeetCode 72.",
      language: "javascript",
      approach: "2D DP",
      code: `function editDistance(s1, s2) {
  const m = s1.length, n = s2.length;
  const dp = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0)
  );

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],     // delete
          dp[i][j - 1],     // insert
          dp[i - 1][j - 1]  // replace
        );
      }
    }
  }
  return dp[m][n];
}`,
      example: {
        input: 's1 = "horse", s2 = "ros"',
        output: "3",
        explanation: "horse → rorse → rose → ros"
      },
      complexity: { time: "O(mn)", space: "O(mn)" },
      tags: ["edit distance", "levenshtein", "leetcode-72"]
    }
  ],
  relatedAlgorithms: ["lcs"],
  leetcodeTags: ["dp", "strings"],
  order: 6
};