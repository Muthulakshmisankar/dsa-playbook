export default {
  id: "k-largest",
  name: "K Largest / Smallest",
  category: "heaps",
  description:
    "Find the k largest or k smallest elements. Use a min-heap of size k for k largest, or a max-heap of size k for k smallest — O(n log k) instead of O(n log n) sort.",
  story: "Keep only k in the heap — evict the worst when it overflows.",
  difficulty: "medium",
  keywords: ["k largest", "k smallest", "kth", "heap", "top k"],
  triggers: ["k largest", "k smallest", "kth largest", "top k"],
  timeComplexity: "O(n log k)",
  spaceComplexity: "O(k)",
  patterns: ["min-heap for k largest", "max-heap for k smallest"],
  notes: [
    "K LARGEST → min-heap of size k (evict smallest)",
    "K SMALLEST → max-heap of size k (evict largest)",
    "Better than full sort when k << n",
    "Quickselect is O(n) average but uses O(1) extra space"
  ],
  programs: [
    {
      id: "k-largest",
      title: "K Largest Elements",
      description: "Min-heap of size k.",
      language: "javascript",
      approach: "min-heap of size k",
      code: `function findKLargest(arr, k) {
  if (k <= 0) return [];
  const minHeap = new Heap((a, b) => a - b);

  for (const num of arr) {
    minHeap.push(num);
    if (minHeap.size() > k) minHeap.pop();
  }
  return minHeap.data.sort((a, b) => b - a);
}`,
      example: {
        input: "arr = [3,1,5,12,2,11,9], k = 3",
        output: "[12,11,9]"
      },
      complexity: { time: "O(n log k)", space: "O(k)" },
      tags: ["k largest", "min-heap"]
    },
    {
      id: "k-smallest",
      title: "K Smallest Elements",
      description: "Max-heap of size k.",
      language: "javascript",
      approach: "max-heap of size k",
      code: `function findKSmallest(arr, k) {
  if (k <= 0) return [];
  const maxHeap = new Heap((a, b) => b - a);

  for (const num of arr) {
    maxHeap.push(num);
    if (maxHeap.size() > k) maxHeap.pop();
  }
  return maxHeap.data.sort((a, b) => a - b);
}`,
      example: {
        input: "arr = [3,1,5,12,2,11,9], k = 3",
        output: "[1,2,3]"
      },
      complexity: { time: "O(n log k)", space: "O(k)" },
      tags: ["k smallest", "max-heap"]
    },
    {
      id: "kth-largest",
      title: "Kth Largest Element",
      description: "Return the kth largest (LeetCode 215).",
      language: "javascript",
      approach: "min-heap of size k",
      code: `function findKthLargest(nums, k) {
  const minHeap = new Heap((a, b) => a - b);

  for (const num of nums) {
    minHeap.push(num);
    if (minHeap.size() > k) minHeap.pop();
  }
  return minHeap.peek();
}`,
      example: {
        input: "nums = [3,2,1,5,6,4], k = 2",
        output: "5"
      },
      complexity: { time: "O(n log k)", space: "O(k)" },
      tags: ["kth largest", "leetcode-215"]
    }
  ],
  relatedAlgorithms: ["heap-basics", "top-k-frequent"],
  leetcodeTags: ["heap"],
  order: 2
};