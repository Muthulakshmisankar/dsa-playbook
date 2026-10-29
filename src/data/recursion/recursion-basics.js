export default {
  id: "recursion-basics",
  name: "Recursion Basics",
  category: "recursion",
  description:
    "A function calls itself with a smaller input until a base case is reached. Foundation of divide-and-conquer, backtracking, and tree traversal.",
  story: "Solve a small piece, then recurse on the rest.",
  difficulty: "easy",
  keywords: ["recursion", "factorial", "fibonacci", "base case", "call stack"],
  triggers: ["self-similar structure", "divide into smaller problems", "trees", "backtracking"],
  timeComplexity: "O(n) to O(2ⁿ)",
  spaceComplexity: "O(n) call stack",
  patterns: ["base case", "recursive case", "memoization"],
  notes: [
    "ALWAYS define a base case — otherwise stack overflow",
    "Return the recursive result — forgetting return yields undefined",
    "Naive recursion is exponential; add memoization for O(n)",
    "Deep recursion can overflow — consider iterative or increase stack"
  ],
  programs: [
    {
      id: "factorial",
      title: "Factorial (n!)",
      description: "Classic recursive factorial.",
      language: "javascript",
      approach: "single recursion",
      code: `function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}`,
      example: {
        input: "n = 5",
        output: "120",
        explanation: "5 * 4 * 3 * 2 * 1 = 120"
      },
      complexity: { time: "O(n)", space: "O(n) stack" },
      tags: ["factorial", "recursion"]
    },
    {
      id: "sum-1-to-n",
      title: "Sum 1 to N",
      description: "Sum of integers from 1 to n.",
      language: "javascript",
      approach: "single recursion",
      code: `function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}`,
      example: {
        input: "n = 5",
        output: "15"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["sum", "recursion"]
    },
    {
      id: "fibonacci-memo",
      title: "Fibonacci (Memoized)",
      description: "Naive is O(2ⁿ); memoized is O(n).",
      language: "javascript",
      approach: "memoization",
      code: `// ❌ Naive — O(2ⁿ)
function fibNaive(n) {
  if (n <= 1) return n;
  return fibNaive(n - 1) + fibNaive(n - 2);
}

// ✅ Memoized — O(n)
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}`,
      example: {
        input: "n = 10",
        output: "55"
      },
      complexity: { time: "O(n) memoized", space: "O(n)" },
      tags: ["fibonacci", "memoization", "dp"]
    },
    {
      id: "reverse-string",
      title: "Reverse a String",
      description: "Recursive string reversal.",
      language: "javascript",
      approach: "substring recursion",
      code: `function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}`,
      example: {
        input: '"hello"',
        output: '"olleh"'
      },
      complexity: { time: "O(n²) due to slicing", space: "O(n)" },
      tags: ["string", "reverse"]
    }
  ],
  relatedAlgorithms: ["subsets", "permutations"],
  leetcodeTags: ["recursion"],
  order: 1
};