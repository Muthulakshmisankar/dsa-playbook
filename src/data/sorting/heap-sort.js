export default {
  id: "heap-sort",
  name: "Heap Sort",
  category: "sorting",
  description:
    "Build a max-heap, then repeatedly extract the maximum to the end. In-place O(n log n) guaranteed.",
  story: "Build max-heap, extract max n times.",
  difficulty: "medium",
  keywords: ["heap", "sort", "max-heap", "in-place", "guaranteed"],
  triggers: ["guaranteed O(n log n)", "in-place sort", "no extra memory"],
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(1)",
  patterns: ["max-heap", "sift-down", "heapify"],
  notes: [
    "Guaranteed O(n log n) — no worst case degradation",
    "In-place (unlike merge sort)",
    "Not stable",
    "Foundation of priority queues"
  ],
  programs: [
    {
      id: "heap-sort-basic",
      title: "Heap Sort",
      description: "Build max-heap then sort by extracting max.",
      language: "javascript",
      approach: "heapify",
      code: `function heapSort(arr) {
  const n = arr.length;

  // Build max-heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract max to end one by one
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}`,
      example: {
        input: "[12,11,13,5,6,7]",
        output: "[5,6,7,11,12,13]"
      },
      complexity: { time: "O(n log n)", space: "O(1)" },
      tags: ["heap sort", "in-place", "max-heap"]
    }
  ],
  relatedAlgorithms: ["merge-sort", "quick-sort"],
  leetcodeTags: ["sorting", "heap"],
  order: 6
};