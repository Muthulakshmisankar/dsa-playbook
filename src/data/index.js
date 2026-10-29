// Arrays
import twoPointers from "./arrays/two-pointers";
import slidingWindow from "./arrays/sliding-window";
import prefixSum from "./arrays/prefix-sum";
import kadane from "./arrays/kadane";

// Searching
import binarySearch from "./searching/binary-search";
import ternarySearch from "./searching/ternary-search";
import exponentialSearch from "./searching/exponential-search";

// Sorting
import bubbleSort from "./sorting/bubble-sort";
import selectionSort from "./sorting/selection-sort";
import insertionSort from "./sorting/insertion-sort";
import mergeSort from "./sorting/merge-sort";
import quickSort from "./sorting/quick-sort";
import heapSort from "./sorting/heap-sort";
import countingSort from "./sorting/counting-sort";
import radixSort from "./sorting/radix-sort";

// Hashing
import frequencyCounting from "./hashing/frequency-counting";
import seenTracking from "./hashing/seen-tracking";
import complementLookup from "./hashing/complement-lookup";
import grouping from "./hashing/grouping";

// Recursion
import recursionBasics from "./recursion/recursion-basics";
import subsets from "./recursion/subsets";
import permutations from "./recursion/permutations";
import combinations from "./recursion/combinations";
import nQueens from "./recursion/n-queens";
import sudokuSolver from "./recursion/sudoku-solver";

// Linked List
import linkedListBasics from "./linked-list/linked-list-basics";
import reverseList from "./linked-list/reverse-list";
import floydCycle from "./linked-list/floyd-cycle";
import mergeSortedLists from "./linked-list/merge-sorted-lists";

// Stack & Queue
import stackBasics from "./stack-queue/stack-basics";
import queueBasics from "./stack-queue/queue-basics";
import monotonicStack from "./stack-queue/monotonic-stack";
import validParentheses from "./stack-queue/valid-parentheses";
import nextGreaterElement from "./stack-queue/next-greater-element";
import largestRectangle from "./stack-queue/largest-rectangle";

// Trees
import treeTraversal from "./trees/tree-traversal";
import bstOperations from "./trees/bst-operations";
import treeHeight from "./trees/tree-height";
import lowestCommonAncestor from "./trees/lowest-common-ancestor";
import trie from "./trees/trie";

// Heaps
import heapBasics from "./heaps/heap-basics";
import kLargest from "./heaps/k-largest";
import topKFrequent from "./heaps/top-k-frequent";
import taskScheduler from "./heaps/task-scheduler";

// DP
import climbingStairs from "./dp/climbing-stairs";
import houseRobber from "./dp/house-robber";
import coinChange from "./dp/coin-change";
import knapsack from "./dp/knapsack";
import lcs from "./dp/lcs";
import editDistance from "./dp/edit-distance";
import uniquePaths from "./dp/unique-paths";
import partitionSubset from "./dp/partition-subset";

// Greedy
import activitySelection from "./greedy/activity-selection";
import fractionalKnapsack from "./greedy/fractional-knapsack";
import jumpGame from "./greedy/jump-game";
import huffmanCoding from "./greedy/huffman-coding";
import jobScheduling from "./greedy/job-scheduling";

// Graphs
import graphBfs from "./graphs/graph-bfs";
import graphDfs from "./graphs/graph-dfs";
import topologicalSort from "./graphs/topological-sort";
import dijkstra from "./graphs/dijkstra";

// Intervals
import mergeIntervals from "./intervals/merge-intervals";
import insertInterval from "./intervals/insert-interval";

// Bit Manipulation
import bitBasics from "./bit-manipulation/bit-basics";
import singleNumber from "./bit-manipulation/single-number";
import subsetsBitmask from "./bit-manipulation/subsets-bitmask";
import bitmaskDp from "./bit-manipulation/bitmask-dp";

import { categories } from "./categories";

export const algorithms = {
  // Arrays
  "two-pointers": twoPointers,
  "sliding-window": slidingWindow,
  "prefix-sum": prefixSum,
  kadane: kadane,
  // Searching
  "binary-search": binarySearch,
  "ternary-search": ternarySearch,
  "exponential-search": exponentialSearch,
  // Sorting
  "bubble-sort": bubbleSort,
  "selection-sort": selectionSort,
  "insertion-sort": insertionSort,
  "merge-sort": mergeSort,
  "quick-sort": quickSort,
  "heap-sort": heapSort,
  "counting-sort": countingSort,
  "radix-sort": radixSort,
  // Hashing
  "frequency-counting": frequencyCounting,
  "seen-tracking": seenTracking,
  "complement-lookup": complementLookup,
  grouping: grouping,
  // Recursion
  "recursion-basics": recursionBasics,
  subsets: subsets,
  permutations: permutations,
  combinations: combinations,
  "n-queens": nQueens,
  "sudoku-solver": sudokuSolver,
  // Linked List
  "linked-list-basics": linkedListBasics,
  "reverse-list": reverseList,
  "floyd-cycle": floydCycle,
  "merge-sorted-lists": mergeSortedLists,
  // Stack & Queue
  "stack-basics": stackBasics,
  "queue-basics": queueBasics,
  "monotonic-stack": monotonicStack,
  "valid-parentheses": validParentheses,
  "next-greater-element": nextGreaterElement,
  "largest-rectangle": largestRectangle,
  // Trees
  "tree-traversal": treeTraversal,
  "bst-operations": bstOperations,
  "tree-height": treeHeight,
  "lowest-common-ancestor": lowestCommonAncestor,
  trie: trie,
  // Heaps
  "heap-basics": heapBasics,
  "k-largest": kLargest,
  "top-k-frequent": topKFrequent,
  "task-scheduler": taskScheduler,
  // DP
  "climbing-stairs": climbingStairs,
  "house-robber": houseRobber,
  "coin-change": coinChange,
  knapsack: knapsack,
  lcs: lcs,
  "edit-distance": editDistance,
  "unique-paths": uniquePaths,
  "partition-subset": partitionSubset,
  // Greedy
  "activity-selection": activitySelection,
  "fractional-knapsack": fractionalKnapsack,
  "jump-game": jumpGame,
  "huffman-coding": huffmanCoding,
  "job-scheduling": jobScheduling,
  // Graphs
  "graph-bfs": graphBfs,
  "graph-dfs": graphDfs,
  "topological-sort": topologicalSort,
  dijkstra: dijkstra,
  // Intervals
  "merge-intervals": mergeIntervals,
  "insert-interval": insertInterval,
  // Bit Manipulation
  "bit-basics": bitBasics,
  "single-number": singleNumber,
  "subsets-bitmask": subsetsBitmask,
  "bitmask-dp": bitmaskDp
};

export const getAlgorithm = (id) => algorithms[id] || null;

export const getAlgorithmsByCategory = (categoryId) => {
  const cat = categories.find((c) => c.id === categoryId);
  if (!cat) return [];
  return cat.algorithms
    .map((id) => algorithms[id])
    .filter(Boolean)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
};

export const getAllAlgorithms = () =>
  Object.values(algorithms).sort((a, b) => (a.order || 0) - (b.order || 0));

export const searchAlgorithms = (query) => {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return getAllAlgorithms().filter((a) => {
    return (
      a.name.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.keywords.some((k) => k.toLowerCase().includes(q)) ||
      a.triggers.some((t) => t.toLowerCase().includes(q)) ||
      a.programs.some(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      )
    );
  });
};

export { categories };