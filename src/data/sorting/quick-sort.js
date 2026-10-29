export default {
  id: "quick-sort",
  name: "Quick Sort",
  category: "sorting",
  description:
    "Pick a pivot, partition elements around it, then recurse on both sides. O(n log n) average, in-place.",
  story: "Pick pivot, partition, recurse.",
  difficulty: "medium",
  keywords: ["quick", "pivot", "partition", "in-place", "average nlogn"],
  triggers: ["in-place sorting", "average nlogn wanted"],
  timeComplexity: "O(n log n) avg, O(n²) worst",
  spaceComplexity: "O(log n) stack",
  patterns: ["partition", "random pivot", "3-way partition"],
  notes: [
    "In-place — no extra O(n) space",
    "Worst case O(n²) with bad pivots — use random pivot",
    "Not stable",
    "3-way partition handles duplicates well"
  ],
  programs: [
    {
      id: "quick-sort-basic",
      title: "Quick Sort (Random Pivot)",
      description: "Random pivot avoids worst case on sorted input.",
      language: "javascript",
      approach: "divide and conquer",
      code: `function quickSort(arr, lo = 0, hi = arr.length - 1) {
  if (lo >= hi) return arr;

  const pivotIdx = partition(arr, lo, hi);
  quickSort(arr, lo, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, hi);
  return arr;
}

function partition(arr, lo, hi) {
  // Random pivot
  const randIdx = lo + Math.floor(Math.random() * (hi - lo + 1));
  [arr[lo], arr[randIdx]] = [arr[randIdx], arr[lo]];

  const pivot = arr[lo];
  let i = lo + 1;

  for (let j = lo + 1; j <= hi; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[lo], arr[i - 1]] = [arr[i - 1], arr[lo]];
  return i - 1;
}`,
      example: {
        input: "[3,6,8,10,1,2,1]",
        output: "[1,1,2,3,6,8,10]"
      },
      complexity: { time: "O(n log n) avg", space: "O(log n)" },
      tags: ["quick sort", "partition", "in-place"]
    },
    {
      id: "quick-sort-three-way",
      title: "3-Way Quick Sort",
      description: "Dutch-flag partition — efficient with many duplicates.",
      language: "javascript",
      approach: "3-way partition",
      code: `function quickSort3Way(arr, lo = 0, hi = arr.length - 1) {
  if (lo >= hi) return arr;

  const pivot = arr[lo];
  let lt = lo, gt = hi, i = lo;

  while (i <= gt) {
    if (arr[i] < pivot) {
      [arr[lt], arr[i]] = [arr[i], arr[lt]];
      lt++; i++;
    } else if (arr[i] > pivot) {
      [arr[i], arr[gt]] = [arr[gt], arr[i]];
      gt--;
    } else {
      i++;
    }
  }

  quickSort3Way(arr, lo, lt - 1);
  quickSort3Way(arr, gt + 1, hi);
  return arr;
}`,
      example: {
        input: "[3,6,8,10,1,2,1,3,3,3]",
        output: "[1,1,2,3,3,3,3,6,8,10]"
      },
      complexity: { time: "O(n log n) avg", space: "O(log n)" },
      tags: ["quick sort", "3-way", "duplicates"]
    }
  ],
  relatedAlgorithms: ["merge-sort", "heap-sort"],
  leetcodeTags: ["sorting", "divide-and-conquer"],
  order: 5
};