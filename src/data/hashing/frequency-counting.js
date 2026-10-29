export default {
  id: "frequency-counting",
  name: "Frequency Counting",
  category: "hashing",
  description:
    "Count occurrences of each element using a HashMap. The foundation of many hash-based patterns.",
  story: "Count everything — then use the counts.",
  difficulty: "easy",
  keywords: ["frequency", "count", "occurrences", "appears", "histogram"],
  triggers: ["frequency", "occurrences", "appears", "count", "most frequent"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(k) where k = unique elements",
  patterns: ["hashmap counter", "prefix sum on counts"],
  notes: [
    "Use Map for safety (handles __proto__, etc.)",
    "map.set(x, (map.get(x) || 0) + 1) is the idiom",
    "Foundation for top-K, group-by-frequency, and more"
  ],
  programs: [
    {
      id: "char-frequency",
      title: "Character Frequency",
      description: "Count occurrences of each character in a string.",
      language: "javascript",
      approach: "hashmap counter",
      code: `function charFrequency(str) {
  const freq = new Map();
  for (const ch of str) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }
  return freq;
}`,
      example: {
        input: '"banana"',
        output: "Map { b: 1, a: 3, n: 2 }"
      },
      complexity: { time: "O(n)", space: "O(k)" },
      tags: ["frequency", "string"]
    },
    {
      id: "most-frequent",
      title: "Most Frequent Element",
      description: "Find the element with the highest frequency.",
      language: "javascript",
      approach: "hashmap + scan",
      code: `function mostFrequent(nums) {
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);

  let maxCount = 0, result = null;
  for (const [num, count] of freq) {
    if (count > maxCount) {
      maxCount = count;
      result = num;
    }
  }
  return result;
}`,
      example: {
        input: "[1,3,2,1,4,1,3]",
        output: "1"
      },
      complexity: { time: "O(n)", space: "O(k)" },
      tags: ["frequency", "max"]
    },
    {
      id: "count-in-range",
      title: "Count Occurrences in Range",
      description: "Count numbers within [min, max].",
      language: "javascript",
      approach: "hashmap counter",
      code: `function countInRange(nums, min, max) {
  const freq = new Map();
  for (const n of nums) {
    if (n >= min && n <= max) {
      freq.set(n, (freq.get(n) || 0) + 1);
    }
  }
  return freq;
}`,
      example: {
        input: "[1,5,3,7,5,9,5], range [3,7]",
        output: "Map { 5: 3, 3: 1, 7: 1 }"
      },
      complexity: { time: "O(n)", space: "O(k)" },
      tags: ["frequency", "range"]
    }
  ],
  relatedAlgorithms: ["seen-tracking", "grouping"],
  leetcodeTags: ["hashmap", "counting"],
  order: 1
};