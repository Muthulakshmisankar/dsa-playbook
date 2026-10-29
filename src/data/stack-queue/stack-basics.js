export default {
  id: "stack-basics",
  name: "Stack Basics",
  category: "stack-queue",
  description:
    "LIFO (Last In First Out) structure. Push, pop, peek all O(1). Used for undo, matching brackets, DFS, and expression evaluation.",
  story: "Last thing in is first thing out.",
  difficulty: "easy",
  keywords: ["stack", "LIFO", "push", "pop", "peek"],
  triggers: ["most recent action", "undo", "matching brackets", "DFS iteratively"],
  timeComplexity: "O(1) per operation",
  spaceComplexity: "O(n)",
  patterns: ["LIFO", "undo stack"],
  notes: [
    "JS array: push/pop are O(1) — perfect stack",
    "Never use unshift/shift for a stack (O(n))",
    "Min-stack trick: store pairs (value, currentMin)"
  ],
  programs: [
    {
      id: "stack-class",
      title: "Stack Class",
      description: "Simple stack backed by an array.",
      language: "javascript",
      approach: "array-backed",
      code: `class Stack {
  constructor() { this.items = []; }
  push(x) { this.items.push(x); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
  size() { return this.items.length; }
}`,
      example: {
        input: "push 1,2,3; pop → ?",
        output: "3"
      },
      complexity: { time: "O(1)", space: "O(n)" },
      tags: ["stack", "LIFO"]
    },
    {
      id: "min-stack",
      title: "Min Stack",
      description: "Stack with O(1) getMin() (LeetCode 155).",
      language: "javascript",
      approach: "pair storage",
      code: `class MinStack {
  constructor() { this.stack = []; }

  push(x) {
    const currentMin = this.stack.length
      ? Math.min(x, this.stack[this.stack.length - 1][1])
      : x;
    this.stack.push([x, currentMin]);
  }

  pop() { this.stack.pop(); }

  top() { return this.stack[this.stack.length - 1][0]; }

  getMin() { return this.stack[this.stack.length - 1][1]; }
}`,
      example: {
        input: "push -2, 0, -3; getMin",
        output: "-3"
      },
      complexity: { time: "O(1) all ops", space: "O(n)" },
      tags: ["stack", "min", "leetcode-155"]
    }
  ],
  relatedAlgorithms: ["queue-basics", "valid-parentheses"],
  leetcodeTags: ["stack"],
  order: 1
};