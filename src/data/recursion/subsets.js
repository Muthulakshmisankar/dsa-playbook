export default {
  id: "subsets",
  name: "Generate All Subsets",
  category: "recursion",
  description:
    "Power set: for n elements, generate all 2ⁿ subsets. Two styles: include/exclude (binary tree) or iterative bitmask.",
  story: "For each element: take it or skip it.",
  difficulty: "medium",
  keywords: ["subsets", "power set", "all combinations", "backtracking"],
  triggers: ["all subsets", "power set", "include or exclude"],
  timeComplexity: "O(2ⁿ · n)",
  spaceComplexity: "O(n) auxiliary",
  patterns: ["include/exclude", "bitmask enumeration"],
  notes: [
    "Every node in recursion tree is a valid subset",
    "Bitmask version is faster (no backtracking overhead)",
    "Clone path with [...path] when storing — otherwise all results share the same array"
  ],
  programs: [
    {
      id: "subsets-backtracking",
      title: "Subsets via Backtracking",
      description: "Include/exclude each element in a DFS.",
      language: "javascript",
      approach: "backtracking",
      code: `function subsets(nums) {
  const result = [];
  const path = [];

  function backtrack(index) {
    if (index === nums.length) {
      result.push([...path]);
      return;
    }

    // Exclude nums[index]
    backtrack(index + 1);

    // Include nums[index]
    path.push(nums[index]);
    backtrack(index + 1);
    path.pop();
  }

  backtrack(0);
  return result;
}`,
      example: {
        input: "[1,2,3]",
        output: "[[],[3],[2],[2,3],[1],[1,3],[1,2],[1,2,3]]"
      },
      complexity: { time: "O(2ⁿ · n)", space: "O(n)" },
      tags: ["subsets", "backtracking"]
    },
    {
      id: "subsets-bitmask",
      title: "Subsets via Bitmask",
      description: "Iterate 0 to 2ⁿ-1; bit i set means include element i.",
      language: "javascript",
      approach: "bitmask",
      code: `function allSubsets(arr) {
  const n = arr.length;
  const total = 1 << n;
  const result = [];

  for (let mask = 0; mask < total; mask++) {
    const subset = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) subset.push(arr[i]);
    }
    result.push(subset);
  }
  return result;
}`,
      example: {
        input: "['a','b','c']",
        output: "[[],['a'],['b'],['a','b'],['c'],['a','c'],['b','c'],['a','b','c']]"
      },
      complexity: { time: "O(2ⁿ · n)", space: "O(2ⁿ · n)" },
      tags: ["subsets", "bitmask"]
    }
  ],
  relatedAlgorithms: ["permutations", "combinations"],
  leetcodeTags: ["backtracking", "bit-manipulation"],
  order: 2
};