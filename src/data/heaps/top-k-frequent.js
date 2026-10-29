export default {
  id: "top-k-frequent",
  name: "Top K Frequent",
  category: "heaps",
  description:
    "Combine frequency counting (HashMap) with a min-heap of size k to get the k most frequent elements in O(n log k).",
  story: "Count first, then min-heap by frequency.",
  difficulty: "medium",
  keywords: ["top k", "frequent", "heap", "frequency", "words"],
  triggers: ["k most frequent", "top k elements", "most common words"],
  timeComplexity: "O(n log k)",
  spaceComplexity: "O(n)",
  patterns: ["hashmap + min-heap", "bucket sort alternative"],
  notes: [
    "Step 1: count frequencies with Map",
    "Step 2: min-heap keyed by frequency, evict lowest when size > k",
    "Ties: break lexicographically (or by insertion order)",
    "Bucket sort is O(n) alternative when frequencies are bounded"
  ],
  programs: [
    {
      id: "top-k-frequent-numbers",
      title: "Top K Frequent Numbers",
      description: "LeetCode 347.",
      language: "javascript",
      approach: "hashmap + min-heap",
      code: `function topKFrequent(nums, k) {
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);

  const minHeap = new Heap((a, b) => a[1] - b[1]); // [value, count]

  for (const entry of freq.entries()) {
    minHeap.push(entry);
    if (minHeap.size() > k) minHeap.pop();
  }

  return minHeap.data
    .sort((a, b) => b[1] - a[1])
    .map((e) => e[0]);
}`,
      example: {
        input: "nums = [1,1,1,2,2,3], k = 2",
        output: "[1,2]"
      },
      complexity: { time: "O(n log k)", space: "O(n)" },
      tags: ["top k frequent", "leetcode-347"]
    },
    {
      id: "top-k-words",
      title: "Top K Frequent Words",
      description: "LeetCode 692 — ties broken lexicographically.",
      language: "javascript",
      approach: "hashmap + min-heap with custom cmp",
      code: `function topKFrequentWords(words, k) {
  const freq = new Map();
  for (const w of words) freq.set(w, (freq.get(w) || 0) + 1);

  const cmp = (a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];        // lower count first
    return b[0].localeCompare(a[0]);              // larger word first
  };
  const minHeap = new Heap(cmp);

  for (const [word, count] of freq.entries()) {
    minHeap.push([word, count]);
    if (minHeap.size() > k) minHeap.pop();
  }

  return minHeap.data
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map((e) => e[0]);
}`,
      example: {
        input: 'words=["i","love","leetcode","i","love","coding"], k=2',
        output: '["i","love"]'
      },
      complexity: { time: "O(n log k)", space: "O(n)" },
      tags: ["top k words", "leetcode-692"]
    }
  ],
  relatedAlgorithms: ["frequency-counting", "k-largest"],
  leetcodeTags: ["heap", "hashmap"],
  order: 3
};