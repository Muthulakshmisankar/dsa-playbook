export default {
  id: "selection-sort",
  name: "Selection Sort",
  category: "sorting",
  description:
    "Repeatedly select the minimum from the unsorted part and place it at the front. O(n²) but minimizes swaps.",
  story: "Find the smallest and swap it to the front.",
  difficulty: "easy",
  keywords: ["selection", "minimum", "swap", "simple"],
  triggers: ["few swaps needed", "small arrays", "educational"],
  timeComplexity: "O(n²)",
  spaceComplexity: "O(1)",
  patterns: ["select minimum", "swap once per iteration"],
  notes: [
    "Minimum number of swaps: at most n-1",
    "NOT stable (swaps can reorder equal elements)",
    "In-place"
  ],
  programs: [
    {
      id: "selection-basic",
      title: "Selection Sort",
      description: "Find minimum in unsorted region, swap to front.",
      language: "javascript",
      approach: "iterative",
      code: `function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }

    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}`,
      example: {
        input: "[64,25,12,22,11]",
        output: "[11,12,22,25,64]"
      },
      complexity: { time: "O(n²)", space: "O(1)" },
      tags: ["selection sort", "in-place"]
    }
  ],
  relatedAlgorithms: ["bubble-sort", "insertion-sort"],
  leetcodeTags: ["sorting"],
  order: 2
};