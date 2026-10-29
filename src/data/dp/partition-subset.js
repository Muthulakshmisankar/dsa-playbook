export default {
  id: "partition-subset",
  name: "Partition Equal Subset Sum",
  category: "dp",
  description:
    "Can the array be split into two subsets with equal sum? Reduces to subset sum DP — a 0/1 knapsack variant.",
  story: "If total is odd, impossible; else can we reach total/2?",
  difficulty: "medium",
  keywords: ["partition", "subset sum", "equal sum", "boolean dp"],
  triggers: ["partition equal", "subset sum target", "can we make target"],
  timeComplexity: "O(n × target)",
  spaceComplexity: "O(target)",
  patterns: ["subset sum DP", "boolean knapsack"],
  notes: [
    "If total is odd → return false",
    "Target = total / 2",
    "dp[s] = true if sum s is reachable",
    "Iterate s BACKWARDS to avoid reusing the same number"
  ],
  programs: [
    {
      id: "can-partition",
      title: "Partition Equal Subset Sum",
      description: "LeetCode 416.",
      language: "javascript",
      approach: "boolean subset DP",
      code: `function canPartition(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return false;

  const target = total / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let s = target; s >= num; s--) {
      dp[s] = dp[s] || dp[s - num];
    }
  }
  return dp[target];
}`,
      example: {
        input: "[1,5,11,5]",
        output: "true",
        explanation: "[1,5,5] and [11]"
      },
      complexity: { time: "O(n × target)", space: "O(target)" },
      tags: ["partition", "subset sum", "leetcode-416"]
    },
    {
      id: "subset-sum-target",
      title: "Subset Sum to Target",
      description: "Can any subset sum to target?",
      language: "javascript",
      approach: "boolean subset DP",
      code: `function subsetSum(nums, target) {
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let s = target; s >= num; s--) {
      dp[s] = dp[s] || dp[s - num];
    }
  }
  return dp[target];
}`,
      example: {
        input: "nums = [3,34,4,12,5,2], target = 9",
        output: "true",
        explanation: "4 + 5 = 9"
      },
      complexity: { time: "O(n × target)", space: "O(target)" },
      tags: ["subset sum", "target"]
    }
  ],
  relatedAlgorithms: ["knapsack", "coin-change"],
  leetcodeTags: ["dp", "subset-sum"],
  order: 8
};