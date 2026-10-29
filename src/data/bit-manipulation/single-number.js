export default {
  id: "single-number",
  name: "Single Number (XOR Tricks)",
  category: "bit-manipulation",
  description:
    "Find the number that appears once while others appear twice (or thrice). XOR's self-cancellation (a ^ a = 0) is the key.",
  story: "XOR cancels pairs — what remains is the unique one.",
  difficulty: "easy",
  keywords: ["single number", "xor", "unique", "twice", "thrice"],
  triggers: ["every element appears twice", "find unique", "one appears once"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(1)",
  patterns: ["XOR all", "isolate lowest set bit"],
  notes: [
    "a ^ a = 0, a ^ 0 = a — pairs cancel",
    "Two unique: XOR all → a^b. Split by lowest set bit",
    "Three times: use ones/twos state machine",
    "Missing number: XOR indices with values"
  ],
  programs: [
    {
      id: "single-number-i",
      title: "Single Number (pairs cancel)",
      description: "Every other element appears twice.",
      language: "javascript",
      approach: "xor-all",
      code: `function findUnique(arr) {
  return arr.reduce((xor, num) => xor ^ num, 0);
}`,
      example: {
        input: "[2,3,5,3,2]",
        output: "5"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["xor", "single number", "leetcode-136"]
    },
    {
      id: "two-unique",
      title: "Two Unique Numbers",
      description: "Two elements appear once, others twice.",
      language: "javascript",
      approach: "xor + split",
      code: `function twoUnique(nums) {
  let xor = 0;
  for (const n of nums) xor ^= n;

  const diff = xor & -xor; // lowest set bit

  let a = 0, b = 0;
  for (const n of nums) {
    if (n & diff) a ^= n;
    else b ^= n;
  }
  return [a, b];
}`,
      example: {
        input: "[2,4,3,6,3,2,5,5]",
        output: "[4,6]"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["xor", "two unique", "leetcode-260"]
    },
    {
      id: "single-number-ii",
      title: "Single Number II (thrice)",
      description: "Every other element appears three times.",
      language: "javascript",
      approach: "ones/twos state machine",
      code: `function singleNumberII(nums) {
  let ones = 0, twos = 0;
  for (const n of nums) {
    ones = (ones ^ n) & ~twos;
    twos = (twos ^ n) & ~ones;
  }
  return ones;
}`,
      example: {
        input: "[2,2,3,2]",
        output: "3"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["single number", "leetcode-137"]
    },
    {
      id: "missing-number",
      title: "Missing Number (0..n)",
      description: "XOR indices with values.",
      language: "javascript",
      approach: "xor-all",
      code: `function missingNumber(nums) {
  let xor = nums.length;
  for (let i = 0; i < nums.length; i++) {
    xor ^= i ^ nums[i];
  }
  return xor;
}`,
      example: {
        input: "[3,0,1]",
        output: "2"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["missing", "xor", "leetcode-268"]
    }
  ],
  relatedAlgorithms: ["bit-basics", "subsets-bitmask"],
  leetcodeTags: ["bit-manipulation"],
  order: 2
};