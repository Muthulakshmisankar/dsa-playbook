export default {
  id: "climbing-stairs",
  name: "Climbing Stairs",
  category: "dp",
  description:
    "Count ways to climb n stairs taking 1 or 2 steps. The Fibonacci pattern — the simplest introduction to DP.",
  story: "dp[i] = dp[i-1] + dp[i-2]",
  difficulty: "easy",
  keywords: ["climbing stairs", "fibonacci", "dp", "number of ways"],
  triggers: ["count ways", "1 or 2 steps", "fibonacci pattern"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(n) → O(1) optimized",
  patterns: ["1D DP", "rolling variables"],
  notes: [
    "dp[i] depends only on dp[i-1] and dp[i-2]",
    "Space-optimize to two variables",
    "Same recurrence as Fibonacci"
  ],
  programs: [
    {
      id: "climb-stairs-basic",
      title: "Climbing Stairs (DP Array)",
      description: "Standard 1D DP.",
      language: "javascript",
      approach: "1D DP",
      code: `function climbStairs(n) {
  if (n <= 2) return n;
  const dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}`,
      example: {
        input: "n = 5",
        output: "8"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["dp", "fibonacci"]
    },
    {
      id: "climb-stairs-optimized",
      title: "Climbing Stairs (O(1) Space)",
      description: "Two rolling variables.",
      language: "javascript",
      approach: "rolling variables",
      code: `function climbStairsOptimized(n) {
  if (n <= 2) return n;
  let prev2 = 1, prev1 = 2;
  for (let i = 3; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}`,
      example: {
        input: "n = 5",
        output: "8"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["dp", "space-optimized"]
    }
  ],
  relatedAlgorithms: ["house-robber", "unique-paths"],
  leetcodeTags: ["dp"],
  order: 1
};