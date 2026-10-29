export default {
  id: "combinations",
  name: "Combinations & Combination Sum",
  category: "recursion",
  description:
    "Pick k elements from n (order doesn't matter), or find combinations summing to a target (with or without repetition).",
  story: "Pick elements — order doesn't matter, so use a start index.",
  difficulty: "medium",
  keywords: ["combinations", "choose k", "combination sum", "target"],
  triggers: ["choose k from n", "combinations summing to target", "all ways"],
  timeComplexity: "O(C(n,k) · k) or exponential for sum",
  spaceComplexity: "O(k)",
  patterns: ["backtracking with start index", "pruning"],
  notes: [
    "Use start index (not used[]) to avoid permutations of the same combo",
    "Prune: if candidate > remaining, break (after sorting)",
    "Duplicates: skip if i > start && nums[i] === nums[i-1]"
  ],
  programs: [
    {
      id: "choose-k",
      title: "Combinations C(n, k)",
      description: "All ways to choose k elements from n.",
      language: "javascript",
      approach: "backtracking",
      code: `function combine(n, k) {
  const result = [];
  const path = [];

  function backtrack(start) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(i + 1);
      path.pop();
    }
  }

  backtrack(1);
  return result;
}`,
      example: {
        input: "n = 4, k = 2",
        output: "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]"
      },
      complexity: { time: "O(C(n,k) · k)", space: "O(k)" },
      tags: ["combinations", "backtracking"]
    },
    {
      id: "combination-sum",
      title: "Combination Sum (Reuse Allowed)",
      description: "Find all combinations summing to target — reuse candidates.",
      language: "javascript",
      approach: "backtracking with pruning",
      code: `function combinationSum(candidates, target) {
  const result = [];
  const path = [];

  function backtrack(start, remaining) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }
    if (remaining < 0) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, remaining - candidates[i]); // i not i+1 → reuse
      path.pop();
    }
  }

  backtrack(0, target);
  return result;
}`,
      example: {
        input: "candidates = [2,3,6,7], target = 7",
        output: "[[2,2,3],[7]]"
      },
      complexity: { time: "exponential", space: "O(target)" },
      tags: ["combination sum", "backtracking"]
    },
    {
      id: "combination-sum-unique",
      title: "Combination Sum (Each Used Once)",
      description: "Candidates may have duplicates; each can be used once.",
      language: "javascript",
      approach: "backtracking + skip duplicates",
      code: `function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  const path = [];

  function backtrack(start, remaining) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remaining) break; // pruning
      if (i > start && candidates[i] === candidates[i - 1]) continue; // skip dup

      path.push(candidates[i]);
      backtrack(i + 1, remaining - candidates[i]);
      path.pop();
    }
  }

  backtrack(0, target);
  return result;
}`,
      example: {
        input: "candidates = [10,1,2,7,6,1,5], target = 8",
        output: "[[1,1,6],[1,2,5],[1,7],[2,6]]"
      },
      complexity: { time: "exponential", space: "O(target)" },
      tags: ["combination sum", "duplicates", "leetcode-40"]
    }
  ],
  relatedAlgorithms: ["subsets", "permutations"],
  leetcodeTags: ["backtracking"],
  order: 4
};