export default {
  id: "kadane",
  name: "Kadane's Algorithm",
  category: "arrays",
  description:
    "Find the maximum sum contiguous subarray in O(n) using dynamic programming.",
  story: "Extend the previous subarray — or start fresh from the current element.",
  difficulty: "medium",
  keywords: [
    "maximum subarray",
    "contiguous",
    "sum",
    "kadane",
    "dp"
  ],
  triggers: ["maximum sum", "contiguous subarray", "subarray sum", "profit"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(1)",
  patterns: ["local vs global", "extend or restart"],
  notes: [
    "Never init max to 0 if all numbers can be negative",
    "Order matters — do NOT sort",
    "currentSum = max(num, currentSum + num)"
  ],
  programs: [
    {
      id: "max-subarray-sum",
      title: "Maximum Sum Contiguous Subarray",
      description:
        "Classic Kadane with start/end index tracking.",
      language: "javascript",
      approach: "kadane",
      code: `function maxSubarraySum(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  let start = 0, end = 0, tempStart = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      tempStart = i;
    } else {
      currentSum = currentSum + nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  return { maxSum, subarray: nums.slice(start, end + 1), start, end };
}`,
      example: {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "{ maxSum: 6, subarray: [4,-1,2,1] }",
        explanation: "Indices 3..6 sum to 6"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["kadane", "max subarray"]
    },
    {
      id: "max-profit",
      title: "Maximum Profit (Stock Prices)",
      description: "Kadane applied to price differences.",
      language: "javascript",
      approach: "kadane on diffs",
      code: `function maxProfitContinuous(prices) {
  if (prices.length < 2) return 0;

  let currentSum = 0;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1];
    currentSum = Math.max(diff, currentSum + diff);
    maxProfit = Math.max(maxProfit, currentSum);
  }
  return maxProfit;
}`,
      example: {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "buy 1, sell 6"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["kadane", "stock"]
    },
    {
      id: "all-negative",
      title: "All Negative Numbers",
      description: "Edge case — max must not default to 0.",
      language: "javascript",
      approach: "kadane",
      code: `function maxSubarrayAllNegative(nums) {
  if (nums.length === 0) return null;

  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}`,
      example: {
        input: "nums = [-5,-2,-8,-1,-4]",
        output: "-1"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["kadane", "edge case"]
    }
  ],
  relatedAlgorithms: ["prefix-sum", "sliding-window"],
  leetcodeTags: ["kadane", "dynamic-programming"],
  order: 4
};