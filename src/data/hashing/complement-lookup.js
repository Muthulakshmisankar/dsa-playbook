export default {
  id: "complement-lookup",
  name: "Complement Lookup",
  category: "hashing",
  description:
    "For each element, compute the partner you need (target - x) and check if it's already in the map. Powers Two Sum, pair difference, and subarray sum problems.",
  story: "What partner do I need to hit the target?",
  difficulty: "medium",
  keywords: ["pair", "target", "sum", "complement", "two sum", "difference"],
  triggers: ["find pair with target sum", "pair with difference", "subarray sum = k"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  patterns: ["hashmap value → index", "prefix sum + hashmap"],
  notes: [
    "Key insight: target - current = complement needed",
    "Combine with prefix sums for subarray sum problems",
    "Returns indices vs values changes the map contents"
  ],
  programs: [
    {
      id: "two-sum",
      title: "Two Sum",
      description: "Find two indices that sum to target (LeetCode 1).",
      language: "javascript",
      approach: "hashmap complement",
      code: `function twoSum(nums, target) {
  const seen = new Map(); // value → index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
  return [];
}`,
      example: {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "2 + 7 = 9"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["two sum", "hashmap", "leetcode-1"]
    },
    {
      id: "pair-difference",
      title: "Pair with Given Difference",
      description: "Return true if two numbers differ by exactly diff.",
      language: "javascript",
      approach: "hashset complement",
      code: `function hasPairWithDiff(nums, diff) {
  const seen = new Set();
  for (const n of nums) {
    if (seen.has(n - diff) || seen.has(n + diff)) return true;
    seen.add(n);
  }
  return false;
}`,
      example: {
        input: "nums = [5,20,3,2,50,80], diff = 78",
        output: "true",
        explanation: "80 - 2 = 78"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["difference", "hashset", "pair"]
    },
    {
      id: "subarray-sum-k",
      title: "Subarray Sum Equals K",
      description: "Count subarrays summing to k using prefix sum + hashmap.",
      language: "javascript",
      approach: "prefix sum + hashmap",
      code: `function subarraySum(nums, k) {
  const prefixCount = new Map([[0, 1]]);
  let sum = 0, count = 0;

  for (const n of nums) {
    sum += n;
    const need = sum - k;
    count += prefixCount.get(need) || 0;
    prefixCount.set(sum, (prefixCount.get(sum) || 0) + 1);
  }
  return count;
}`,
      example: {
        input: "nums = [1,1,1], k = 2",
        output: "2",
        explanation: "Two subarrays sum to 2"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["prefix sum", "hashmap", "leetcode-560"]
    }
  ],
  relatedAlgorithms: ["seen-tracking", "frequency-counting"],
  leetcodeTags: ["hashmap", "prefix-sum"],
  order: 3
};