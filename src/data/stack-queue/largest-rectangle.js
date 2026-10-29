export default {
  id: "largest-rectangle",
  name: "Largest Rectangle in Histogram",
  category: "stack-queue",
  description:
    "Find the largest rectangular area in a histogram. Monotonic increasing stack with sentinel trick achieves O(n).",
  story: "Pop taller bars; their height × width = candidate area.",
  difficulty: "hard",
  keywords: ["largest rectangle", "histogram", "monotonic stack", "area"],
  triggers: ["largest area", "histogram", "max rectangle"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  patterns: ["increasing stack", "sentinel 0", "width via stack"],
  notes: [
    "Iterate 0 to n (inclusive) with a sentinel height 0 to flush the stack",
    "Width = i - stackTop - 1 (or i if stack empty)",
    "Brute force O(n²) compares all pairs"
  ],
  programs: [
    {
      id: "largest-rectangle-stack",
      title: "Largest Rectangle (Monotonic Stack)",
      description: "Optimal O(n) solution.",
      language: "javascript",
      approach: "increasing stack",
      code: `function largestRectangleArea(heights) {
  const stack = []; // indices, heights increasing
  let maxArea = 0;
  const n = heights.length;

  for (let i = 0; i <= n; i++) {
    const curHeight = i === n ? 0 : heights[i];

    while (stack.length && curHeight < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()];
      const width = stack.length === 0
        ? i
        : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  return maxArea;
}`,
      example: {
        input: "[2,1,5,6,2,3]",
        output: "10",
        explanation: "Rectangle 5×2 = 10"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["histogram", "monotonic", "leetcode-84"]
    },
    {
      id: "largest-rectangle-brute",
      title: "Largest Rectangle (Brute Force)",
      description: "O(n²) reference — for comparison.",
      language: "javascript",
      approach: "nested loops",
      code: `function largestRectangleAreaBrute(heights) {
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let minH = Infinity;
    for (let j = i; j < heights.length; j++) {
      minH = Math.min(minH, heights[j]);
      maxArea = Math.max(maxArea, minH * (j - i + 1));
    }
  }
  return maxArea;
}`,
      example: {
        input: "[2,1,5,6,2,3]",
        output: "10"
      },
      complexity: { time: "O(n²)", space: "O(1)" },
      tags: ["brute force", "histogram"]
    },
    {
      id: "maximal-rectangle-2d",
      title: "Maximal Rectangle in Binary Matrix",
      description:
        "LeetCode 85 — extend each row as a histogram, run largest-rectangle.",
      language: "javascript",
      approach: "row-by-row histograms",
      code: `function maximalRectangle(matrix) {
  if (!matrix.length) return 0;

  const cols = matrix[0].length;
  const heights = new Array(cols).fill(0);
  let maxArea = 0;

  for (const row of matrix) {
    for (let c = 0; c < cols; c++) {
      heights[c] = row[c] === "1" ? heights[c] + 1 : 0;
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }
  return maxArea;
}`,
      example: {
        input: 'matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"]]',
        output: "6"
      },
      complexity: { time: "O(rows × cols)", space: "O(cols)" },
      tags: ["histogram", "2D", "leetcode-85"]
    }
  ],
  relatedAlgorithms: ["monotonic-stack", "next-greater-element"],
  leetcodeTags: ["monotonic-stack", "histogram"],
  order: 6
};