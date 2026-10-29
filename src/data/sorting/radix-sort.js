export default {
  id: "radix-sort",
  name: "Radix Sort",
  category: "sorting",
  description:
    "Sort by each digit position from least significant to most using a stable subroutine (counting sort). O(d·(n + k)) for d digits.",
  story: "Sort digit by digit — least significant first.",
  difficulty: "hard",
  keywords: ["radix", "digit", "LSD", "MSD", "non-comparison"],
  triggers: ["integer sorting", "fixed-width keys", "large n small range"],
  timeComplexity: "O(d·(n + k))",
  spaceComplexity: "O(n + k)",
  patterns: ["LSD radix", "stable subroutine"],
  notes: [
    "Needs a stable sort as the digit subroutine (usually counting sort)",
    "Works for integers and strings with fixed-width keys",
    "LSD = Least Significant Digit first (most common)",
    "Faster than O(n log n) sorts for large n with small key ranges"
  ],
  programs: [
    {
      id: "radix-sort-lsd",
      title: "Radix Sort (LSD)",
      description: "Least-significant-digit radix sort for non-negative integers.",
      language: "javascript",
      approach: "LSD radix",
      code: `function radixSort(arr) {
  if (arr.length === 0) return arr;

  const max = Math.max(...arr);
  let exp = 1;

  while (Math.floor(max / exp) > 0) {
    countingSortByDigit(arr, exp);
    exp *= 10;
  }
  return arr;
}

function countingSortByDigit(arr, exp) {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) count[i] += count[i - 1];

  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[--count[digit]] = arr[i];
  }

  for (let i = 0; i < n; i++) arr[i] = output[i];
}`,
      example: {
        input: "[170,45,75,90,802,24,2,66]",
        output: "[2,24,45,66,75,90,170,802]"
      },
      complexity: { time: "O(d·(n+k))", space: "O(n+k)" },
      tags: ["radix sort", "LSD", "linear"]
    }
  ],
  relatedAlgorithms: ["counting-sort"],
  leetcodeTags: ["sorting", "radix-sort"],
  order: 8
};