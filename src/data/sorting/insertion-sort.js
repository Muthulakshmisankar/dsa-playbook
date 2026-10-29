export default {
  id: "insertion-sort",
  name: "Insertion Sort",
  category: "sorting",
  description:
    "Build sorted array one element at a time by inserting each into its correct position. Excellent for small or nearly-sorted data.",
  story: "Like sorting playing cards in your hand.",
  difficulty: "easy",
  keywords: ["insertion", "cards", "nearly sorted", "online"],
  triggers: ["small arrays", "nearly sorted", "online sorting"],
  timeComplexity: "O(n²), O(n) nearly sorted",
  spaceComplexity: "O(1)",
  patterns: ["shift and insert"],
  notes: [
    "Best case O(n) when data is nearly sorted",
    "Stable sort",
    "Used as base case in hybrid algorithms (Timsort, Introsort)"
  ],
  programs: [
    {
      id: "insertion-basic",
      title: "Insertion Sort",
      description: "Insert each element into its correct sorted position.",
      language: "javascript",
      approach: "iterative",
      code: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`,
      example: {
        input: "[12,11,13,5,6]",
        output: "[5,6,11,12,13]"
      },
      complexity: { time: "O(n²), O(n) best", space: "O(1)" },
      tags: ["insertion sort", "stable", "in-place"]
    }
  ],
  relatedAlgorithms: ["bubble-sort", "selection-sort"],
  leetcodeTags: ["sorting"],
  order: 3
};