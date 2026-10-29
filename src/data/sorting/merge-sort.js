export default {
  id: "merge-sort",
  name: "Merge Sort",
  category: "sorting",
  description:
    "Divide-and-conquer: split array in half, recursively sort both halves, then merge. Guaranteed O(n log n).",
  story: "Divide, conquer, merge.",
  difficulty: "medium",
  keywords: ["merge", "divide and conquer", "stable", "recursive"],
  triggers: ["guaranteed O(n log n)", "stable sort needed", "linked lists"],
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  patterns: ["divide and conquer", "merge two sorted halves"],
  notes: [
    "Guaranteed O(n log n) in all cases",
    "Stable sort",
    "Requires O(n) extra space",
    "Foundation of Timsort (used in JS/V8 for objects)"
  ],
  programs: [
    {
      id: "merge-sort-recursive",
      title: "Merge Sort (Recursive)",
      description: "Classic recursive merge sort.",
      language: "javascript",
      approach: "divide and conquer",
      code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}`,
      example: {
        input: "[38,27,43,3,9,82,10]",
        output: "[3,9,10,27,38,43,82]"
      },
      complexity: { time: "O(n log n)", space: "O(n)" },
      tags: ["merge sort", "stable", "divide and conquer"]
    },
    {
      id: "merge-sort-inplace",
      title: "Merge Sort (In-Place)",
      description: "Merge sort using a temp buffer to reduce allocations.",
      language: "javascript",
      approach: "in-place with buffer",
      code: `function mergeSortInPlace(arr) {
  if (arr.length <= 1) return arr;
  const buffer = new Array(arr.length);

  function sort(lo, hi) {
    if (hi - lo <= 1) return;

    const mid = Math.floor((lo + hi) / 2);
    sort(lo, mid);
    sort(mid, hi);
    merge(lo, mid, hi);
  }

  function merge(lo, mid, hi) {
    for (let i = lo; i < hi; i++) buffer[i] = arr[i];

    let i = lo, j = mid, k = lo;
    while (i < mid && j < hi) {
      if (buffer[i] <= buffer[j]) arr[k++] = buffer[i++];
      else arr[k++] = buffer[j++];
    }
    while (i < mid) arr[k++] = buffer[i++];
    while (j < hi) arr[k++] = buffer[j++];
  }

  sort(0, arr.length);
  return arr;
}`,
      example: {
        input: "[5,2,8,1,9,3]",
        output: "[1,2,3,5,8,9]"
      },
      complexity: { time: "O(n log n)", space: "O(n)" },
      tags: ["merge sort", "in-place"]
    }
  ],
  relatedAlgorithms: ["quick-sort", "heap-sort"],
  leetcodeTags: ["sorting", "divide-and-conquer"],
  order: 4
};