export default {
  id: "knapsack",
  name: "0/1 Knapsack",
  category: "dp",
  description:
    "Max value with items (weight, value) and capacity W, each item used at most once. Foundation of many optimization DP problems.",
  story: "dp[i][w] = max(skip item i, take item i if it fits).",
  difficulty: "medium",
  keywords: ["knapsack", "0/1", "capacity", "weight", "value", "subsets"],
  triggers: ["items with weight and value", "capacity", "choose items once"],
  timeComplexity: "O(n × W)",
  spaceComplexity: "O(n × W) → O(W) optimized",
  patterns: ["2D DP", "1D space-optimized", "iterate backwards for 1D"],
  notes: [
    "2D: dp[i][w] = max skip vs take",
    "1D: iterate w BACKWARDS to avoid reusing item",
    "Unbounded (item reused): iterate w forwards",
    "Subset sum: values = weights, ask dp[target] > 0"
  ],
  programs: [
    {
      id: "knapsack-2d",
      title: "Knapsack (2D DP)",
      description: "Standard 2D DP — clearest version.",
      language: "javascript",
      approach: "2D DP",
      code: `function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () =>
    new Array(capacity + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      dp[i][w] = dp[i - 1][w]; // skip
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      }
    }
  }
  return dp[n][capacity];
}`,
      example: {
        input: "weights=[1,3,4,5], values=[1,4,5,7], capacity=7",
        output: "9"
      },
      complexity: { time: "O(nW)", space: "O(nW)" },
      tags: ["knapsack", "2D"]
    },
    {
      id: "knapsack-1d",
      title: "Knapsack (1D Optimized)",
      description: "O(W) space — iterate w BACKWARDS.",
      language: "javascript",
      approach: "1D DP backwards",
      code: `function knapsack1D(weights, values, capacity) {
  const dp = new Array(capacity + 1).fill(0);

  for (let i = 0; i < weights.length; i++) {
    for (let w = capacity; w >= weights[i]; w--) {
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
    }
  }
  return dp[capacity];
}`,
      example: {
        input: "weights=[1,3,4,5], values=[1,4,5,7], capacity=7",
        output: "9"
      },
      complexity: { time: "O(nW)", space: "O(W)" },
      tags: ["knapsack", "1D", "space-optimized"]
    },
    {
      id: "unbounded-knapsack",
      title: "Unbounded Knapsack",
      description: "Same as 0/1 but iterate w FORWARDS (reuse items).",
      language: "javascript",
      approach: "1D forwards",
      code: `function unboundedKnapsack(weights, values, capacity) {
  const dp = new Array(capacity + 1).fill(0);

  for (let w = 1; w <= capacity; w++) {
    for (let i = 0; i < weights.length; i++) {
      if (weights[i] <= w) {
        dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
      }
    }
  }
  return dp[capacity];
}`,
      example: {
        input: "weights=[1,3,4,5], values=[10,40,50,70], capacity=8",
        output: "80",
        explanation: "Two weight-4 items → 50+50 = 100 (or fewer)"
      },
      complexity: { time: "O(nW)", space: "O(W)" },
      tags: ["unbounded", "knapsack"]
    }
  ],
  relatedAlgorithms: ["coin-change", "partition-subset"],
  leetcodeTags: ["dp", "knapsack"],
  order: 4
};