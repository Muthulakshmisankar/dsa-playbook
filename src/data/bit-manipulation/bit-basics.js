export default {
  id: "bit-basics",
  name: "Bit Manipulation Basics",
  category: "bit-manipulation",
  description:
    "Core bitwise tricks: check/set/clear/toggle bits, power of 2, count set bits. These are the building blocks for all bit problems.",
  story: "AND checks, OR sets, XOR toggles.",
  difficulty: "easy",
  keywords: ["bit", "AND", "OR", "XOR", "shift", "mask", "power of 2"],
  triggers: ["parity", "power of 2", "single bit operations", "bit mask"],
  timeComplexity: "O(1) for single ops",
  spaceComplexity: "O(1)",
  patterns: ["mask", "lowest set bit", "Brian Kernighan"],
  notes: [
    "JS treats bitwise as 32-bit signed — use >>> for unsigned",
    "1 << 31 is negative — use (1 << 31) >>> 0",
    "n & (n-1) removes the lowest set bit",
    "n & -n isolates the lowest set bit",
    "BigInt (5n) for numbers > 2³¹ − 1"
  ],
  programs: [
    {
      id: "basic-bit-ops",
      title: "Set, Clear, Toggle, Check",
      description: "The four fundamental bit operations.",
      language: "javascript",
      approach: "masks",
      code: `function isBitSet(n, i) { return (n & (1 << i)) !== 0; }
function setBit(n, i) { return n | (1 << i); }
function clearBit(n, i) { return n & ~(1 << i); }
function toggleBit(n, i) { return n ^ (1 << i); }
function isOdd(n) { return (n & 1) === 1; }`,
      example: {
        input: "n = 5 (101), i = 2",
        output: "isBitSet → true"
      },
      complexity: { time: "O(1)", space: "O(1)" },
      tags: ["bit", "basics"]
    },
    {
      id: "power-of-two",
      title: "Power of 2 Check",
      description: "n & (n-1) === 0 for positive powers of 2.",
      language: "javascript",
      approach: "bit trick",
      code: `function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}`,
      example: {
        input: "n = 16",
        output: "true"
      },
      complexity: { time: "O(1)", space: "O(1)" },
      tags: ["power of 2", "bit"]
    },
    {
      id: "count-set-bits",
      title: "Count Set Bits (Brian Kernighan)",
      description: "O(k) where k = number of set bits.",
      language: "javascript",
      approach: "Brian Kernighan",
      code: `function countSetBits(n) {
  let count = 0;
  while (n) {
    n &= (n - 1);
    count++;
  }
  return count;
}`,
      example: {
        input: "n = 13 (1101)",
        output: "3"
      },
      complexity: { time: "O(k)", space: "O(1)" },
      tags: ["count bits", "Brian Kernighan"]
    }
  ],
  relatedAlgorithms: ["single-number", "subsets-bitmask"],
  leetcodeTags: ["bit-manipulation"],
  order: 1
};