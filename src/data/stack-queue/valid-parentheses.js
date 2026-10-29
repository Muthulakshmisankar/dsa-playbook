export default {
  id: "valid-parentheses",
  name: "Valid Parentheses",
  category: "stack-queue",
  description:
    "Match brackets: push opening, pop and verify closing. Stack guarantees correct nesting order.",
  story: "Push opens, pop matches closes.",
  difficulty: "easy",
  keywords: ["parentheses", "brackets", "matching", "nested", "stack"],
  triggers: ["matching brackets", "nested pairs", "balanced expression"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  patterns: ["stack", "matching pairs"],
  notes: [
    "If stack.pop() ≠ expected → invalid",
    "Empty stack at end = valid",
    "Closing without matching opening → invalid immediately"
  ],
  programs: [
    {
      id: "valid-parens",
      title: "Valid Parentheses",
      description: "Check if brackets are balanced.",
      language: "javascript",
      approach: "stack",
      code: `function validParentheses(str) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };

  for (const ch of str) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else if (ch in pairs) {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.length === 0;
}`,
      example: {
        input: '"({[]})"',
        output: "true"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["parentheses", "stack"]
    },
    {
      id: "min-remove-parens",
      title: "Minimum Remove to Make Valid",
      description: "Remove min parens to make string valid (LeetCode 1249).",
      language: "javascript",
      approach: "stack of indices",
      code: `function minRemoveToMakeValid(s) {
  const arr = s.split("");
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") stack.push(i);
    else if (arr[i] === ")") {
      if (stack.length) stack.pop();
      else arr[i] = "";
    }
  }

  for (const i of stack) arr[i] = "";
  return arr.join("");
}`,
      example: {
        input: '"lee(t(c)o)de)"',
        output: '"lee(t(c)o)de"'
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["parentheses", "stack", "leetcode-1249"]
    }
  ],
relatedAlgorithms: ["stack-basics", "queue-basics"],
  leetcodeTags: ["stack"],
  order: 4
};