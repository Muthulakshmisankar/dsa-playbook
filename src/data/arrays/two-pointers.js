export default {
  id: "two-pointers",
  name: "Two Pointers",
  category: "arrays",
  description:
    "Move two pointers from ends or same direction to solve problems in O(n).",
  story: "Meet in the middle — or run together.",
  difficulty: "easy",
  keywords: ["pair", "sorted", "target sum", "palindrome", "reverse"],
  triggers: [
    "sorted array",
    "find pair",
    "palindrome check",
    "reverse in place"
  ],
  timeComplexity: "O(n)",
  spaceComplexity: "O(1)",
  patterns: ["move inward", "same direction", "complement lookup"],
  notes: [
    "Works best on sorted arrays",
    "Can replace nested loops",
    "Handle duplicates carefully"
  ],
  programs: [
    {
      id: "find-pair-sum",
      title: "Find Pair with Target Sum",
      description:
        "Find two numbers in a sorted array that add up to a target sum.",
      language: "javascript",
      approach: "two-pointer",
      code: `function findPairWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];
    else if (sum < target) left++;
    else right--;
  }
  return null;
}`,
      example: {
        input: "arr = [1,2,3,4,6], target = 6",
        output: "[2, 4]",
        explanation: "2 + 4 = 6"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["sorted array", "two sum", "complement"],
      notes: "Assumes sorted array. For unsorted, use HashMap in O(n).",
      variations: ["Three Sum", "Two Sum II (LeetCode)"]
    },
    {
      id: "is-palindrome",
      title: "Palindrome Check",
      description: "Check if a string reads the same forward and backward.",
      language: "javascript",
      approach: "two-pointer",
      code: `function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}`,
      example: {
        input: 'str = "racecar"',
        output: "true",
        explanation: "Reads the same both ways"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["string", "palindrome"],
      notes: "Case-insensitive. Remove .toLowerCase() for strict comparison."
    },
    {
      id: "reverse-array",
      title: "Reverse Array In Place",
      description: "Reverse an array in place using two pointers.",
      language: "javascript",
      approach: "two-pointer",
      code: `function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}`,
      example: {
        input: "arr = [1,2,3,4,5]",
        output: "[5,4,3,2,1]"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["reverse", "in-place"]
    }
  ],
  relatedAlgorithms: ["sliding-window", "prefix-sum"],
  leetcodeTags: ["two-pointers"],
  order: 1
};