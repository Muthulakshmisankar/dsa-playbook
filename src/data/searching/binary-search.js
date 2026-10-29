export default {
  id: "binary-search",
  name: "Binary Search",
  category: "searching",
  description:
    "Repeatedly halve the search space by comparing the middle element — O(log n) on sorted arrays.",
  story: "Cut the search space in half every step.",
  difficulty: "easy",
  keywords: ["binary search", "sorted", "log n", "first", "last", "insertion"],
  triggers: [
    "sorted array",
    "find target",
    "first/last occurrence",
    "insertion position",
    "binary search on answer"
  ],
  timeComplexity: "O(log n)",
  spaceComplexity: "O(1)",
  patterns: ["boundary search", "remember answer", "monotonic predicate"],
  notes: [
    "Array MUST be sorted",
    "Use mid = left + Math.floor((right - left) / 2) to avoid overflow",
    "First/last occurrence: remember and keep searching one side",
    "Binary search on answer when result is monotonic"
  ],
  programs: [
    {
      id: "basic-binary-search",
      title: "Standard Binary Search",
      description: "Find target index in sorted array, or -1.",
      language: "javascript",
      approach: "iterative",
      code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
      example: {
        input: "arr = [1,3,5,7,9,11,13], target = 7",
        output: "3"
      },
      complexity: { time: "O(log n)", space: "O(1)" },
      tags: ["binary search", "sorted"]
    },
    {
      id: "first-last-occurrence",
      title: "First & Last Occurrence",
      description: "Find first and last index of target in sorted array (with duplicates).",
      language: "javascript",
      approach: "boundary search",
      code: `function firstOccurrence(arr, target) {
  let left = 0, right = arr.length - 1, result = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

function lastOccurrence(arr, target) {
  let left = 0, right = arr.length - 1, result = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}`,
      example: {
        input: "arr = [1,2,4,4,4,5,6,7], target = 4",
        output: "first = 2, last = 4"
      },
      complexity: { time: "O(log n)", space: "O(1)" },
      tags: ["binary search", "duplicates"]
    },
    {
      id: "insertion-position",
      title: "Insertion Position",
      description: "First index where arr[i] >= target (LeetCode 35).",
      language: "javascript",
      approach: "lower bound",
      code: `function findInsertionPosition(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left;
}`,
      example: {
        input: "arr = [1,3,5,6], target = 5",
        output: "2"
      },
      complexity: { time: "O(log n)", space: "O(1)" },
      tags: ["binary search", "lower bound", "insertion"]
    },
    {
      id: "binary-search-on-answer",
      title: "Binary Search on Answer",
      description:
        "Find the minimum value satisfying a monotonic predicate — used for optimization problems.",
      language: "javascript",
      approach: "binary search on answer",
      code: `function binarySearchOnAnswer(low, high, isValid) {
  let left = low, right = high, ans = high;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isValid(mid)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

// Example: smallest x such that x*x >= 50
const minX = binarySearchOnAnswer(1, 100, (x) => x * x >= 50);
console.log(minX); // 8`,
      example: {
        input: "find smallest x with x*x >= 50, range [1,100]",
        output: "8"
      },
      complexity: { time: "O(log n × check)", space: "O(1)" },
      tags: ["binary search on answer", "optimization"]
    }
  ],
  relatedAlgorithms: ["ternary-search", "exponential-search"],
  leetcodeTags: ["binary-search"],
  order: 1
};