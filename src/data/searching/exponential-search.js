export default {
  id: "exponential-search",
  name: "Exponential Search",
  category: "searching",
  description:
    "Find a range by doubling the index, then binary search within it. Great for unbounded or huge arrays where target is near the start.",
  story: "Double until you overshoot, then binary search.",
  difficulty: "medium",
  keywords: ["exponential", "unbounded", "galloping", "infinite array"],
  triggers: ["infinite/unbounded array", "target near start", "huge array"],
  timeComplexity: "O(log i) where i is target index",
  spaceComplexity: "O(1)",
  patterns: ["galloping", "bounded binary search"],
  notes: [
    "Better than binary search when target is near beginning",
    "O(log i) vs O(log n) when i << n",
    "Essential for infinite streams / unbounded arrays"
  ],
  programs: [
    {
      id: "exponential-search-basic",
      title: "Exponential Search",
      description: "Find target using exponential doubling + binary search.",
      language: "javascript",
      approach: "galloping",
      code: `function binarySearchRange(arr, left, right, target) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

function exponentialSearch(arr, target) {
  if (arr.length === 0) return -1;
  if (arr[0] === target) return 0;

  let bound = 1;
  while (bound < arr.length && arr[bound] < target) {
    bound *= 2;
  }

  return binarySearchRange(
    arr,
    Math.floor(bound / 2),
    Math.min(bound, arr.length - 1),
    target
  );
}`,
      example: {
        input: "arr = [1,2,3,4,5,6,7,8,9], target = 6",
        output: "5",
        explanation: "Found at index 5"
      },
      complexity: { time: "O(log i)", space: "O(1)" },
      tags: ["exponential", "galloping", "binary search"]
    },
    {
      id: "unbounded-search",
      title: "Search in Unbounded/Infinite Array",
      description: "Search a function that returns elements by index (infinite stream).",
      language: "javascript",
      approach: "galloping",
      code: `function searchUnbounded(getElement, target) {
  if (getElement(0) === target) return 0;

  let bound = 1;
  while (getElement(bound) < target) {
    bound *= 2;
  }

  let left = Math.floor(bound / 2);
  let right = bound;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const val = getElement(mid);
    if (val === target) return mid;
    if (val < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
      example: {
        input: "getElement(i) returns i*2, target = 10",
        output: "5",
        explanation: "Element at index 5 is 10"
      },
      complexity: { time: "O(log i)", space: "O(1)" },
      tags: ["exponential", "unbounded", "infinite"]
    }
  ],
  relatedAlgorithms: ["binary-search", "ternary-search"],
  leetcodeTags: ["binary-search"],
  order: 3
};