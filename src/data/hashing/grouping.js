export default {
  id: "grouping",
  name: "Grouping",
  category: "hashing",
  description:
    "Group similar items by a shared key (sorted string, frequency signature, length, etc.). Map<key, list> is the workhorse.",
  story: "Put similar things in the same box.",
  difficulty: "medium",
  keywords: ["group", "anagram", "categorize", "same pattern", "bucket"],
  triggers: ["group anagrams", "group by property", "categorize items"],
  timeComplexity: "O(n·k)",
  spaceComplexity: "O(n)",
  patterns: ["hashmap with list values", "signature key"],
  notes: [
    "Signature key: sorted chars, char counts, length, etc.",
    "Use Map<key, List> — push into the bucket",
    "Efficient for detecting duplicates / anagrams"
  ],
  programs: [
    {
      id: "group-anagrams",
      title: "Group Anagrams",
      description: "LeetCode 49 — group anagrams by sorted string key.",
      language: "javascript",
      approach: "hashmap + signature",
      code: `function groupAnagrams(words) {
  const groups = new Map();
  for (const word of words) {
    const key = word.split("").sort().join("");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(word);
  }
  return [...groups.values()];
}`,
      example: {
        input: '["eat","tea","tan","ate","nat","bat"]',
        output: '[["eat","tea","ate"],["tan","nat"],["bat"]]'
      },
      complexity: { time: "O(n·k log k)", space: "O(n)" },
      tags: ["anagram", "group", "leetcode-49"]
    },
    {
      id: "group-by-frequency",
      title: "Group by Frequency",
      description: "Group numbers by how many times they appear.",
      language: "javascript",
      approach: "frequency + grouping",
      code: `function groupByFrequency(nums) {
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);

  const groups = new Map();
  for (const [num, count] of freq) {
    if (!groups.has(count)) groups.set(count, []);
    groups.get(count).push(num);
  }
  return groups;
}`,
      example: {
        input: "[1,1,2,2,3,4,4,4]",
        output: "Map { 2 => [1,2], 1 => [3], 3 => [4] }"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["frequency", "group"]
    },
    {
      id: "group-by-length",
      title: "Group Words by Length",
      description: "Bucket words by their character count.",
      language: "javascript",
      approach: "hashmap by length",
      code: `function groupByLength(words) {
  const groups = new Map();
  for (const w of words) {
    const len = w.length;
    if (!groups.has(len)) groups.set(len, []);
    groups.get(len).push(w);
  }
  return groups;
}`,
      example: {
        input: '["hi","cat","dog","a","bird","fish"]',
        output: "Map { 2 => ['hi'], 3 => ['cat','dog'], 1 => ['a'], 4 => ['bird','fish'] }"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["group", "length", "strings"]
    }
  ],
  relatedAlgorithms: ["frequency-counting", "complement-lookup"],
  leetcodeTags: ["hashmap", "grouping"],
  order: 4
};