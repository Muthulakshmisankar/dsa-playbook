export default {
  id: "bubble-sort",
  name: "Bubble Sort",
  category: "sorting",
  description:
    "Repeatedly swap adjacent elements if out of order. Simple but inefficient — mainly educational.",
  story: "Bubbles rise: largest elements float to the end.",
  difficulty: "easy",
  keywords: ["bubble", "swap", "adjacent", "simple"],
  triggers: ["educational", "nearly sorted small arrays", "tiny inputs"],
  timeComplexity: "O(n²)",
  spaceComplexity: "O(1)",
  patterns: ["adjacent swaps", "early exit optimization"],
  notes: [
    "Optimize with early exit if no swaps occur (already sorted)",
    "Stable sort (equal elements keep order)",
    "In-place, no extra memory"
  ],
  programs: [
    {
      id: "bubble-basic",
      title: "Bubble Sort",
      description: "Classic bubble sort with early exit optimization.",
      language: "javascript",
      approach: "iterative",
      code: `function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }
  return arr;
}`,
      example: {
        input: "[5,1,4,2,8]",
        output: "[1,2,4,5,8]"
      },
      complexity: { time: "O(n²), O(n) best", space: "O(1)" },
      tags: ["bubble sort", "stable", "in-place"]
    }
  ],
  relatedAlgorithms: ["selection-sort", "insertion-sort"],
  leetcodeTags: ["sorting"],
  order: 1
};