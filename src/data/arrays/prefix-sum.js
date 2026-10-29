export default {
  id: "prefix-sum",
  name: "Prefix Sum",
  category: "arrays",
  description:
    "Precompute cumulative sums to answer range-sum queries in O(1) and find/count subarrays with target sum in O(n).",
  story: "Sum(L..R) = prefix[R+1] − prefix[L].",
  difficulty: "medium",
  keywords: ["range sum", "subarray sum", "prefix", "cumulative", "target"],
  triggers: [
    "subarray sum",
    "range sum query",
    "count subarrays",
    "sum between indices"
  ],
  timeComplexity: "O(n) build, O(1) query",
  spaceComplexity: "O(n)",
  patterns: ["prefix array", "prefix + hashmap"],
  notes: [
    "Whenever you see 'subarray sum', think prefix sum + HashMap",
    "Turns a nested loop into a single pass",
    "Use Map/Set for target-sum problems"
  ],
  programs: [
    {
      id: "range-sum-query",
      title: "Range Sum Query",
      description: "Sum from index L to R inclusive in O(1) after O(n) build.",
      language: "javascript",
      approach: "prefix-array",
      code: `function buildPrefix(arr) {
  const n = arr.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
  }
  return prefix;
}

function rangeSum(prefix, L, R) {
  return prefix[R + 1] - prefix[L];
}`,
      example: {
        input: "arr = [3,1,4,1,5,9,2,6], L=2, R=5",
        output: "19",
        explanation: "4+1+5+9 = 19"
      },
      complexity: { time: "O(n) build, O(1) query", space: "O(n)" },
      tags: ["prefix array", "range query"]
    },
    {
      id: "count-subarrays-target",
      title: "Count Subarrays with Target Sum",
      description:
        "Count all contiguous subarrays whose sum equals target (works with negatives).",
      language: "javascript",
      approach: "prefix + hashmap",
      code: `function countSubarraysWithSum(arr, target) {
  const freq = new Map();
  freq.set(0, 1);

  let currentSum = 0;
  let count = 0;

  for (const num of arr) {
    currentSum += num;
    const needed = currentSum - target;
    count += freq.get(needed) || 0;
    freq.set(currentSum, (freq.get(currentSum) || 0) + 1);
  }
  return count;
}`,
      example: {
        input: "arr = [1,1,1], target = 2",
        output: "2",
        explanation: "[1,1] at (0,1) and (1,2)"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["prefix sum", "hashmap", "subarray"]
    },
    {
      id: "has-subarray-target",
      title: "Does a Subarray Sum to Target?",
      description: "Return true if any subarray sums to target.",
      language: "javascript",
      approach: "prefix + set",
      code: `function hasSubarrayWithSum(arr, target) {
  const seen = new Set([0]);
  let currentSum = 0;

  for (const num of arr) {
    currentSum += num;
    if (seen.has(currentSum - target)) return true;
    seen.add(currentSum);
  }
  return false;
}`,
      example: {
        input: "arr = [1,2,3,4,5], target = 9",
        output: "true",
        explanation: "2+3+4 = 9"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["prefix sum", "hashset"]
    }
  ],
  relatedAlgorithms: ["two-pointers", "sliding-window"],
  leetcodeTags: ["prefix-sum"],
  order: 3
};