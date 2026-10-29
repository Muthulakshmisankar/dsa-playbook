export default {
  id: "seen-tracking",
  name: "Seen Tracking",
  category: "hashing",
  description:
    "Use a HashSet to track elements already seen — perfect for duplicates, uniqueness, and longest-unique-substring problems.",
  story: "Have I seen this before?",
  difficulty: "easy",
  keywords: ["duplicate", "unique", "seen", "first repeated", "set"],
  triggers: ["duplicate detection", "uniqueness", "first repeated element"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(k)",
  patterns: ["hashset", "check-then-add"],
  notes: [
    "if (set.has(x)) → duplicate before set.add(x)",
    "Combine with sliding window for longest unique substring",
    "Use Set for O(1) average membership"
  ],
  programs: [
    {
      id: "contains-duplicate",
      title: "Contains Duplicate",
      description: "Return true if any value appears twice.",
      language: "javascript",
      approach: "hashset",
      code: `function containsDuplicate(nums) {
  const seen = new Set();
  for (const n of nums) {
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
}`,
      example: {
        input: "[1,2,3,1]",
        output: "true"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["set", "duplicate"]
    },
    {
      id: "first-repeated",
      title: "First Repeated Character",
      description: "Find the first character that appears twice.",
      language: "javascript",
      approach: "hashset",
      code: `function firstRepeated(str) {
  const seen = new Set();
  for (const ch of str) {
    if (seen.has(ch)) return ch;
    seen.add(ch);
  }
  return null;
}`,
      example: {
        input: '"abccba"',
        output: '"c"'
      },
      complexity: { time: "O(n)", space: "O(k)" },
      tags: ["set", "string", "first"]
    },
    {
      id: "longest-unique-substring",
      title: "Longest Substring Without Repeating Characters",
      description: "LeetCode 3 — sliding window + set.",
      language: "javascript",
      approach: "sliding window + set",
      code: `function longestUniqueSubstring(s) {
  const seen = new Set();
  let left = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`,
      example: {
        input: '"abcabcbb"',
        output: "3",
        explanation: '"abc"'
      },
      complexity: { time: "O(n)", space: "O(min(n, charset))" },
      tags: ["set", "sliding window", "leetcode-3"]
    }
  ],
  relatedAlgorithms: ["frequency-counting", "complement-lookup"],
  leetcodeTags: ["hashset"],
  order: 2
};