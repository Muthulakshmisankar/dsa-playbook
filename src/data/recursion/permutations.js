export default {
  id: "permutations",
  name: "Generate All Permutations",
  category: "recursion",
  description:
    "Arrange n distinct elements in all n! possible orders. Classic backtracking with a used[] set.",
  story: "Pick any unused element, recurse, then un-pick it.",
  difficulty: "medium",
  keywords: ["permutations", "arrangements", "order matters", "backtracking"],
  triggers: ["all arrangements", "order matters", "permutations"],
  timeComplexity: "O(n · n!)",
  spaceComplexity: "O(n)",
  patterns: ["backtracking with used[]", "swap in place"],
  notes: [
    "n! grows fast — 10! = 3.6M",
    "With duplicates: skip if same as previous AND previous unused (after sorting)",
    "Swap-based version avoids extra used[] array"
  ],
  programs: [
    {
      id: "permutations-used",
      title: "Permutations with Used Array",
      description: "Classic backtracking with a boolean used[] tracker.",
      language: "javascript",
      approach: "backtracking",
      code: `function permutations(nums) {
  const result = [];
  const path = [];
  const used = new Array(nums.length).fill(false);

  function backtrack() {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(nums[i]);
      backtrack();
      path.pop();
      used[i] = false;
    }
  }

  backtrack();
  return result;
}`,
      example: {
        input: "[1,2,3]",
        output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
      },
      complexity: { time: "O(n · n!)", space: "O(n)" },
      tags: ["permutations", "backtracking"]
    },
    {
      id: "permutations-swap",
      title: "Permutations via Swap",
      description: "In-place swap version — no used array.",
      language: "javascript",
      approach: "swap backtracking",
      code: `function permutationsSwap(arr) {
  const result = [];

  function backtrack(start) {
    if (start === arr.length) {
      result.push([...arr]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      backtrack(start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]];
    }
  }

  backtrack(0);
  return result;
}`,
      example: {
        input: "[1,2,3]",
        output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]"
      },
      complexity: { time: "O(n · n!)", space: "O(n)" },
      tags: ["permutations", "swap"]
    }
  ],
  relatedAlgorithms: ["subsets", "combinations"],
  leetcodeTags: ["backtracking"],
  order: 3
};