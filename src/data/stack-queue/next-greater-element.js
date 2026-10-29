export default {
  id: "next-greater-element",
  name: "Next Greater Element (Variants)",
  category: "stack-queue",
  description:
    "Classic monotonic stack problem with variations: circular arrays, next smaller, and brute-force comparison.",
  story: "Pop smaller while scanning; current becomes their next greater.",
  difficulty: "medium",
  keywords: ["next greater", "next smaller", "circular", "monotonic"],
  triggers: ["next greater", "next smaller", "circular next greater"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  patterns: ["decreasing stack", "increasing stack", "circular via 2n"],
  notes: [
    "Circular: iterate 2n times with i % n",
    "Next smaller: pop while top > current",
    "Brute force O(n²) only for comparison"
  ],
  programs: [
    {
      id: "next-greater-circular",
      title: "Circular Next Greater",
      description: "Next greater in a circular array (LeetCode 503).",
      language: "javascript",
      approach: "2n loop",
      code: `function nextGreaterCircular(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * n; i++) {
    const cur = nums[i % n];
    while (stack.length && nums[stack[stack.length - 1]] < cur) {
      const idx = stack.pop();
      result[idx] = cur;
    }
    if (i < n) stack.push(i);
  }
  return result;
}`,
      example: {
        input: "[1,2,1]",
        output: "[2,-1,2]"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["circular", "next greater", "leetcode-503"]
    },
    {
      id: "next-smaller",
      title: "Next Smaller Element",
      description: "Pop while top > current; current becomes their next smaller.",
      language: "javascript",
      approach: "increasing stack",
      code: `function nextSmallerElement(nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      const idx = stack.pop();
      result[idx] = nums[i];
    }
    stack.push(i);
  }
  return result;
}`,
      example: {
        input: "[5,3,4,2]",
        output: "[3,2,2,-1]"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["next smaller", "increasing stack"]
    },
    {
      id: "nge-brute",
      title: "Next Greater (Brute Force)",
      description: "O(n²) reference for comparison.",
      language: "javascript",
      approach: "nested loops",
      code: `function nextGreaterBrute(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let next = -1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        next = nums[j];
        break;
      }
    }
    result.push(next);
  }
  return result;
}`,
      example: {
        input: "[2,1,3]",
        output: "[3,3,-1]"
      },
      complexity: { time: "O(n²)", space: "O(1)" },
      tags: ["brute force", "comparison"]
    }
  ],
  relatedAlgorithms: ["monotonic-stack", "largest-rectangle"],
  leetcodeTags: ["monotonic-stack"],
  order: 5
};