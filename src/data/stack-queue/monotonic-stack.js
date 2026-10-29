export default {
  id: "monotonic-stack",
  name: "Monotonic Stack",
  category: "stack-queue",
  description:
    "Maintain a strictly increasing or decreasing stack while scanning. Answers 'next/previous greater/smaller' problems in O(n).",
  story: "Pop while the top is smaller (or larger) than the current.",
  difficulty: "medium",
  keywords: ["monotonic", "next greater", "next smaller", "stack", "greedy"],
  triggers: ["next greater element", "previous smaller", "span", "largest rectangle"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  patterns: ["decreasing stack → greater", "increasing stack → smaller"],
  notes: [
    "Store INDICES, not values — needed for distance/width",
    "Each element pushed once, popped at most once → O(n) amortized",
    "Decreasing stack = find greater; increasing stack = find smaller"
  ],
  programs: [
    {
      id: "next-greater-basic",
      title: "Next Greater Element",
      description: "For each element, find the next greater to its right.",
      language: "javascript",
      approach: "decreasing stack",
      code: `function nextGreaterElement(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = []; // indices, values decrease

  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      const idx = stack.pop();
      result[idx] = nums[i];
    }
    stack.push(i);
  }
  return result;
}`,
      example: {
        input: "[2,1,3]",
        output: "[3,3,-1]"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["monotonic", "next greater"]
    },
    {
      id: "daily-temperatures",
      title: "Daily Temperatures",
      description: "Days until warmer day (LeetCode 739).",
      language: "javascript",
      approach: "decreasing stack",
      code: `function dailyTemperatures(temps) {
  const n = temps.length;
  const result = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }
  return result;
}`,
      example: {
        input: "[73,74,75,71,69,72,76,73]",
        output: "[1,1,4,2,1,1,0,0]"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["monotonic", "temperatures", "leetcode-739"]
    },
    {
      id: "previous-greater",
      title: "Previous Greater Element",
      description: "Find nearest greater element to the LEFT.",
      language: "javascript",
      approach: "decreasing stack",
      code: `function previousGreaterElement(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop();
    }
    result[i] = stack.length ? nums[stack[stack.length - 1]] : -1;
    stack.push(i);
  }
  return result;
}`,
      example: {
        input: "[4,5,2,10]",
        output: "[-1,-1,5,-1]"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["monotonic", "previous greater"]
    }
  ],
  relatedAlgorithms: ["next-greater-element", "largest-rectangle"],
  leetcodeTags: ["monotonic-stack"],
  order: 3
};