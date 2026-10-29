export default {
  id: "sliding-window",
  name: "Sliding Window",
  category: "arrays",
  description:
    "Maintain a contiguous window that expands and shrinks to find optimal subarrays or substrings in O(n).",
  story: "Grow the window, then shrink when the condition breaks.",
  difficulty: "medium",
  keywords: [
    "subarray",
    "substring",
    "contiguous",
    "window",
    "longest",
    "shortest"
  ],
  triggers: [
    "contiguous subarray",
    "longest substring",
    "at most k",
    "at least k",
    "fixed window size"
  ],
  timeComplexity: "O(n)",
  spaceComplexity: "O(1) or O(k)",
  patterns: ["fixed window", "variable window", "expand-shrink"],
  notes: [
    "Works best on arrays/strings with monotonic conditions",
    "Two types: fixed size k vs variable size",
    "Each element enters and exits the window at most once"
  ],
  programs: [
    {
      id: "max-sum-k",
      title: "Maximum Sum of K Consecutive Elements",
      description: "Find the max sum of any k consecutive elements.",
      language: "javascript",
      approach: "fixed-window",
      code: `function maxSumOfK(arr, k) {
  if (arr.length < k) return null;

  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];

  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}`,
      example: {
        input: "arr = [2,1,5,1,3,2], k = 3",
        output: "9",
        explanation: "[5,1,3] = 9"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["fixed window", "max sum"]
    },
    {
      id: "longest-subarray-at-most-k",
      title: "Longest Subarray with Sum ≤ K",
      description: "Longest contiguous subarray whose sum is at most k.",
      language: "javascript",
      approach: "variable-window",
      code: `function longestSubarrayAtMostK(arr, k) {
  let left = 0, windowSum = 0, maxLength = 0;

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];

    while (windowSum > k) {
      windowSum -= arr[left];
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}`,
      example: {
        input: "arr = [3,1,2,1,1,1,1,2], k = 4",
        output: "4"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["variable window", "at most k"]
    },
    {
      id: "longest-unique-substring",
      title: "Longest Substring Without Repeating Characters",
      description:
        "Classic LeetCode 3: find longest substring with all unique characters.",
      language: "javascript",
      approach: "variable-window + set",
      code: `function longestSubstringWithoutRepeating(s) {
  const set = new Set();
  let left = 0, maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}`,
      example: {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: '"abc"'
      },
      complexity: { time: "O(n)", space: "O(min(n, charset))" },
      tags: ["sliding window", "hashset", "leetcode-3"]
    },
    {
      id: "min-window-substring",
      title: "Minimum Window Substring",
      description:
        "Smallest substring of s containing all characters of t (LeetCode 76).",
      language: "javascript",
      approach: "variable-window + hashmap",
      code: `function minWindowSubstring(s, t) {
  if (s.length < t.length) return "";

  const need = new Map();
  for (const ch of t) need.set(ch, (need.get(ch) || 0) + 1);

  let left = 0, matched = 0, minLen = Infinity, minStart = 0;
  const window = new Map();

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    window.set(ch, (window.get(ch) || 0) + 1);

    if (need.has(ch) && window.get(ch) === need.get(ch)) matched++;

    while (matched === need.size) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }
      const leftChar = s[left];
      window.set(leftChar, window.get(leftChar) - 1);
      if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
        matched--;
      }
      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}`,
      example: {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"'
      },
      complexity: { time: "O(n)", space: "O(m)" },
      tags: ["sliding window", "hashmap", "leetcode-76"]
    }
  ],
  relatedAlgorithms: ["two-pointers", "prefix-sum"],
  leetcodeTags: ["sliding-window"],
  order: 2
};