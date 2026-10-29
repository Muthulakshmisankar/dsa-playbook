export default {
  id: "counting-sort",
  name: "Counting Sort",
  category: "sorting",
  description:
    "Count occurrences of each value, then reconstruct sorted output. O(n + k) where k is value range — beats O(n log n) for small integer ranges.",
  story: "Count occurrences, then place them in order.",
  difficulty: "medium",
  keywords: ["counting", "non-comparison", "linear", "integer", "range"],
  triggers: ["small integer range", "O(n) needed", "non-negative integers"],
  timeComplexity: "O(n + k)",
  spaceComplexity: "O(k)",
  patterns: ["frequency array", "prefix sum on counts"],
  notes: [
    "Only works for integers in a known range",
    "O(n + k) where k = max - min + 1",
    "Stable when implemented correctly",
    "Base for radix sort"
  ],
  programs: [
    {
      id: "counting-sort-basic",
      title: "Counting Sort",
      description: "Sort non-negative integers using frequency counting.",
      language: "javascript",
      approach: "frequency + prefix",
      code: `function countingSort(arr) {
  if (arr.length === 0) return arr;

  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);

  for (const num of arr) count[num]++;

  let idx = 0;
  for (let v = 0; v <= max; v++) {
    while (count[v] > 0) {
      arr[idx++] = v;
      count[v]--;
    }
  }
  return arr;
}`,
      example: {
        input: "[4,2,2,8,3,3,1]",
        output: "[1,2,2,3,3,4,8]"
      },
      complexity: { time: "O(n + k)", space: "O(k)" },
      tags: ["counting sort", "non-comparison", "linear"]
    }
  ],
  relatedAlgorithms: ["radix-sort"],
  leetcodeTags: ["sorting", "counting-sort"],
  order: 7
};