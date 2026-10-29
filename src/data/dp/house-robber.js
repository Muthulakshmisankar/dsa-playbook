export default {
  id: "house-robber",
  name: "House Robber",
  category: "dp",
  description:
    "Max money robbing houses without robbing two adjacent. Classic choose/skip DP — same pattern as knapsack.",
  story: "dp[i] = max(dp[i-1], dp[i-2] + nums[i]) — skip or rob.",
  difficulty: "medium",
  keywords: ["house robber", "choose skip", "adjacent", "maximum", "dp"],
  triggers: ["max money", "no adjacent", "choose/skip"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(1)",
  patterns: ["1D DP", "choose or skip"],
  notes: [
    "dp[i] = max(dp[i-1], dp[i-2] + nums[i])",
    "Space-optimize to two variables",
    "House Robber II (circular) needs two passes: exclude first OR exclude last"
  ],
  programs: [
    {
      id: "house-robber-basic",
      title: "House Robber (DP)",
      description: "Standard 1D DP with array.",
      language: "javascript",
      approach: "1D DP",
      code: `function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
}`,
      example: {
        input: "[2,7,9,3,1]",
        output: "12",
        explanation: "Rob houses 0, 2, 4 → 2+9+1 = 12"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["dp", "house robber"]
    },
    {
      id: "house-robber-optimized",
      title: "House Robber (O(1) Space)",
      description: "Two rolling variables.",
      language: "javascript",
      approach: "rolling",
      code: `function robOptimized(nums) {
  let prev2 = 0, prev1 = 0;
  for (const money of nums) {
    const curr = Math.max(prev1, prev2 + money);
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}`,
      example: {
        input: "[2,7,9,3,1]",
        output: "12"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["dp", "space-optimized"]
    },
    {
      id: "house-robber-circular",
      title: "House Robber II (Circular)",
      description: "First and last houses are adjacent (LeetCode 213).",
      language: "javascript",
      approach: "two linear passes",
      code: `function robCircular(nums) {
  if (nums.length === 1) return nums[0];

  function robRange(start, end) {
    let prev2 = 0, prev1 = 0;
    for (let i = start; i < end; i++) {
      const curr = Math.max(prev1, prev2 + nums[i]);
      prev2 = prev1;
      prev1 = curr;
    }
    return prev1;
  }

  return Math.max(
    robRange(0, nums.length - 1),
    robRange(1, nums.length)
  );
}`,
      example: {
        input: "[2,3,2]",
        output: "3"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["circular", "leetcode-213"]
    }
  ],
  relatedAlgorithms: ["climbing-stairs", "knapsack"],
  leetcodeTags: ["dp"],
  order: 2
};