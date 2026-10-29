export default {
  id: "ternary-search",
  name: "Ternary Search",
  category: "searching",
  description:
    "Divides the search space into three parts. Used for finding extrema of unimodal functions in O(log₃ n).",
  story: "Divide into thirds to find peaks and valleys.",
  difficulty: "medium",
  keywords: ["ternary", "unimodal", "peak", "extrema"],
  triggers: ["unimodal function", "find maximum", "find minimum in convex function"],
  timeComplexity: "O(log₃ n)",
  spaceComplexity: "O(1)",
  patterns: ["three-way split", "unimodal optimization"],
  notes: [
    "Works on unimodal functions (increase then decrease, or vice versa)",
    "Less common than binary search but useful for optimization",
    "Binary search is faster for searching; ternary for finding extrema"
  ],
  programs: [
    {
      id: "ternary-max",
      title: "Find Maximum of Unimodal Function",
      description:
        "Find the maximum value of a function that increases then decreases.",
      language: "javascript",
      approach: "ternary",
      code: `function ternaryMax(low, high, f, iterations = 200) {
  let l = low, r = high;
  for (let i = 0; i < iterations; i++) {
    const m1 = l + (r - l) / 3;
    const m2 = r - (r - l) / 3;
    if (f(m1) < f(m2)) l = m1;
    else r = m2;
  }
  return (l + r) / 2;
}

// Example: f(x) = -(x-3)^2 + 10 → max at x = 3
const peak = ternaryMax(-10, 10, (x) => -(x - 3) ** 2 + 10);
console.log(peak); // ≈ 3`,
      example: {
        input: "f(x) = -(x-3)² + 10, range [-10, 10]",
        output: "≈ 3",
        explanation: "Maximum occurs at x = 3"
      },
      complexity: { time: "O(log₃ n)", space: "O(1)" },
      tags: ["ternary", "optimization", "unimodal"]
    },
    {
      id: "ternary-integer",
      title: "Integer Ternary Search",
      description: "Find peak index in a unimodal integer array.",
      language: "javascript",
      approach: "ternary on integers",
      code: `function findPeak(arr) {
  let left = 0, right = arr.length - 1;

  while (right - left > 2) {
    const m1 = left + Math.floor((right - left) / 3);
    const m2 = right - Math.floor((right - left) / 3);
    if (arr[m1] < arr[m2]) left = m1;
    else right = m2;
  }

  let peakIdx = left;
  for (let i = left; i <= right; i++) {
    if (arr[i] > arr[peakIdx]) peakIdx = i;
  }
  return peakIdx;
}`,
      example: {
        input: "arr = [1,3,5,7,6,4,2]",
        output: "3",
        explanation: "Peak at index 3 (value 7)"
      },
      complexity: { time: "O(log n)", space: "O(1)" },
      tags: ["ternary", "peak", "unimodal"]
    }
  ],
  relatedAlgorithms: ["binary-search", "exponential-search"],
  leetcodeTags: ["ternary-search"],
  order: 2
};