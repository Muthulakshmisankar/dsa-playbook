export default {
  id: "subsets-bitmask",
  name: "Subsets via Bitmask",
  category: "bit-manipulation",
  description:
    "Generate all 2ⁿ subsets using bitmask enumeration — no recursion. Much faster than backtracking for small n.",
  story: "For mask 0..2ⁿ-1, bit i set means include element i.",
  difficulty: "medium",
  keywords: ["subsets", "bitmask", "power set", "enumeration"],
  triggers: ["all subsets", "power set", "bitmask enumeration"],
  timeComplexity: "O(2ⁿ · n)",
  spaceComplexity: "O(2ⁿ · n)",
  patterns: ["iterate masks", "bit test"],
  notes: [
    "Total masks = 2ⁿ",
    "Bit i set → include arr[i]",
    "Handles n ≤ 20 comfortably; for larger n, use DP",
    "Generic template for subset-sum, TSP, DP over subsets"
  ],
  programs: [
    {
      id: "all-subsets-bitmask",
      title: "All Subsets via Bitmask",
      description: "Iterative bitmask enumeration.",
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
    },
    {
      id: "submasks",
      title: "Enumerate Submasks",
      description: "All submasks of a given mask in O(2^k).",
      language: "javascript",
      approach: "submask iteration",
      code: `function submasks(mask) {
  const subs = [];
  for (let sub = mask; ; sub = (sub - 1) & mask) {
    subs.push(sub);
    if (sub === 0) break;
  }
  return subs;
}`,
      example: {
        input: "mask = 0b1011 (= 11)",
        output: "[11, 10, 9, 8, 3, 2, 1, 0]"
      },
      complexity: { time: "O(2^k)", space: "O(2^k)" },
      tags: ["submask", "sos dp"]
    }
  ],
  relatedAlgorithms: ["subsets", "bitmask-dp"],
  leetcodeTags: ["bit-manipulation", "bitmask"],
  order: 3
};