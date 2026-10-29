export default {
  id: "coin-change",
  name: "Coin Change",
  category: "dp",
  description:
    "Min coins to make amount. Unbounded knapsack variant — each coin can be reused. dp[a] = min coins to make amount a.",
  story: "For each amount, try each coin — take min.",
  difficulty: "medium",
  keywords: ["coin change", "minimum coins", "unbounded", "amount", "dp"],
  triggers: ["minimum coins", "fewest coins", "how many ways", "unbounded"],
  timeComplexity: "O(amount × coins)",
  spaceComplexity: "O(amount)",
  patterns: ["unbounded knapsack", "bottom-up DP"],
  notes: [
    "dp[a] = min(dp[a-coin] + 1) over all coins",
    "Init dp[0] = 0, all others Infinity",
    "Return -1 if dp[amount] still Infinity",
    "Counting ways: dp[a] += dp[a-coin] (order matters vs not)"
  ],
  programs: [
    {
      id: "coin-change-min",
      title: "Minimum Coins",
      description: "Fewest coins to make amount (LeetCode 322).",
      language: "javascript",
      approach: "unbounded knapsack",
      code: `function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let a = 1; a <= amount; a++) {
    for (const coin of coins) {
      if (coin <= a) {
        dp[a] = Math.min(dp[a], dp[a - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}`,
      example: {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
        explanation: "5+5+1 = 11"
      },
      complexity: { time: "O(amount × coins)", space: "O(amount)" },
      tags: ["unbounded", "min coins", "leetcode-322"]
    },
    {
      id: "coin-change-ways",
      title: "Number of Ways to Make Amount",
      description: "LeetCode 518 — count combinations (order doesn't matter).",
      language: "javascript",
      approach: "unbounded knapsack",
      code: `function changeWays(amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins) {
    for (let a = coin; a <= amount; a++) {
      dp[a] += dp[a - coin];
    }
  }
  return dp[amount];
}`,
      example: {
        input: "amount = 5, coins = [1,2,5]",
        output: "4",
        explanation: "5=5; 2+2+1; 2+1+1+1; 1×5"
      },
      complexity: { time: "O(amount × coins)", space: "O(amount)" },
      tags: ["ways", "combinations", "leetcode-518"]
    }
  ],
  relatedAlgorithms: ["knapsack", "partition-subset"],
  leetcodeTags: ["dp"],
  order: 3
};