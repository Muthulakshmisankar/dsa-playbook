export default {
  id: "queue-basics",
  name: "Queue Basics",
  category: "stack-queue",
  description:
    "FIFO (First In First Out) structure. Enqueue at rear, dequeue from front. Used in BFS, task scheduling, sliding windows.",
  story: "First come, first served.",
  difficulty: "easy",
  keywords: ["queue", "FIFO", "enqueue", "dequeue", "circular", "deque"],
  triggers: ["first come first served", "BFS", "task scheduling", "sliding window max"],
  timeComplexity: "O(1) per operation",
  spaceComplexity: "O(n)",
  patterns: ["FIFO", "circular buffer", "deque"],
  notes: [
    "Array.shift() is O(n) — avoid for large queues",
    "Use head index or circular buffer for O(1) dequeue",
    "JS lacks a built-in queue — implement one",
    "Deque (double-ended queue) supports both ends"
  ],
  programs: [
    {
      id: "queue-class",
      title: "Queue Class (Head Index)",
      description: "O(1) enqueue and dequeue using head pointer.",
      language: "javascript",
      approach: "array + head",
      code: `class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(x) { this.items[this.tail++] = x; }
  dequeue() {
    if (this.head === this.tail) return undefined;
    const x = this.items[this.head];
    delete this.items[this.head++];
    return x;
  }
  get size() { return this.tail - this.head; }
}`,
      example: {
        input: "enqueue 1,2,3; dequeue",
        output: "1"
      },
      complexity: { time: "O(1)", space: "O(n)" },
      tags: ["queue", "FIFO"]
    },
    {
      id: "circular-queue",
      title: "Circular Queue",
      description: "Fixed-size buffer that wraps around.",
      language: "javascript",
      approach: "circular buffer",
      code: `class CircularQueue {
  constructor(k) {
    this.buf = new Array(k);
    this.cap = k;
    this.head = 0;
    this.size = 0;
  }
  enqueue(x) {
    if (this.size === this.cap) return false;
    this.buf[(this.head + this.size) % this.cap] = x;
    this.size++;
    return true;
  }
  dequeue() {
    if (this.size === 0) return null;
    const x = this.buf[this.head];
    this.head = (this.head + 1) % this.cap;
    this.size--;
    return x;
  }
}`,
      example: {
        input: "cap = 3, enqueue 1,2,3",
        output: "dequeue returns 1, 2, 3"
      },
      complexity: { time: "O(1)", space: "O(k)" },
      tags: ["circular", "queue"]
    },
    {
      id: "stack-as-queue",
      title: "Two Stacks Make a Queue",
      description: "Amortized O(1) queue using two stacks.",
      language: "javascript",
      approach: "two stacks",
      code: `class QueueFromStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
  enqueue(x) { this.inStack.push(x); }
  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }
  peek() {
    if (this.outStack.length === 0) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack[this.outStack.length - 1];
  }
}`,
      example: {
        input: "enqueue 1,2; dequeue",
        output: "1"
      },
      complexity: { time: "Amortized O(1)", space: "O(n)" },
      tags: ["stack", "queue", "amortized"]
    }
  ],
  relatedAlgorithms: ["stack-basics", "graph-bfs"],
  leetcodeTags: ["queue"],
  order: 2
};