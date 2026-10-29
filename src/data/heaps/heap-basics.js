export default {
  id: "heap-basics",
  name: "Heap Basics",
  category: "heaps",
  description:
    "Complete binary tree where parent ≤ children (min-heap) or parent ≥ children (max-heap). Push/pop in O(log n), peek in O(1).",
  story: "Heapify up on insert, heapify down on extract.",
  difficulty: "medium",
  keywords: ["heap", "min-heap", "max-heap", "priority queue", "heapify", "sift"],
  triggers: ["priority queue", "k-th smallest/largest", "scheduling", "Dijkstra"],
  timeComplexity: "O(log n) push/pop, O(1) peek, O(n) build",
  spaceComplexity: "O(n)",
  patterns: ["bubble up", "bubble down", "array-based tree"],
  notes: [
    "Children of index i: 2i+1, 2i+2; parent: (i-1)/2",
    "JS has no built-in heap — implement one",
    "Push → bubble up; Pop → swap last to root, bubble down",
    "Use a comparator to get both min and max heaps from one class"
  ],
  programs: [
    {
      id: "generic-heap",
      title: "Generic Binary Heap",
      description: "One class with comparator → both min and max.",
      language: "javascript",
      approach: "array-backed",
      code: `class Heap {
  constructor(comparator = (a, b) => a - b) {
    this.data = [];
    this.compare = comparator;
  }

  size() { return this.data.length; }
  peek() { return this.data[0]; }
  isEmpty() { return this.data.length === 0; }

  push(value) {
    this.data.push(value);
    this._bubbleUp(this.data.length - 1);
  }

  pop() {
    if (!this.data.length) return undefined;
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this._bubbleDown(0);
    }
    return top;
  }

  _bubbleUp(i) {
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.compare(this.data[i], this.data[parent]) < 0) {
        [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
        i = parent;
      } else break;
    }
  }

  _bubbleDown(i) {
    const n = this.data.length;
    while (true) {
      let smallest = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && this.compare(this.data[l], this.data[smallest]) < 0) smallest = l;
      if (r < n && this.compare(this.data[r], this.data[smallest]) < 0) smallest = r;
      if (smallest === i) break;
      [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
      i = smallest;
    }
  }
}`,
      example: {
        input: "push 3,1,2 into min-heap",
        output: "pop → 1"
      },
      complexity: { time: "O(log n) ops", space: "O(n)" },
      tags: ["heap", "min-heap", "max-heap", "generic"]
    },
    {
      id: "heapify-build",
      title: "Build Heap from Array",
      description: "Build a heap in O(n) — faster than n pushes.",
      language: "javascript",
      approach: "bottom-up heapify",
      code: `function buildHeap(arr, compare = (a, b) => a - b) {
  const heap = new Heap(compare);
  heap.data = [...arr];
  for (let i = Math.floor(heap.data.length / 2) - 1; i >= 0; i--) {
    heap._bubbleDown(i);
  }
  return heap;
}`,
      example: {
        input: "[3,1,4,1,5,9,2,6]",
        output: "min-heap with root 1"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["heap", "build", "heapify"]
    }
  ],
  relatedAlgorithms: ["k-largest", "top-k-frequent", "dijkstra"],
  leetcodeTags: ["heap"],
  order: 1
};