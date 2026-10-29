export default {
  id: "fractional-knapsack",
  name: "Fractional Knapsack",
  category: "greedy",
  description:
    "Max value with items (value, weight) when fractions of items are allowed. Greedy: sort by value/weight ratio, take as much as fits.",
  story: "Sort by value/weight ratio — take the best first.",
  difficulty: "medium",
  keywords: ["fractional knapsack", "value weight ratio", "greedy", "capacity"],
  triggers: ["fractions allowed", "maximum value", "value/weight"],
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  patterns: ["ratio sort", "greedy take"],
  notes: [
    "Fractions allowed → greedy works; 0/1 → needs DP",
    "Ratio = value / weight",
    "Take min(weight, remaining) of each item"
  ],
  programs: [
    {
      id: "fractional-knapsack-basic",
      title: "Fractional Knapsack",
      description: "Take fractional parts of items.",
      language: "javascript",
      approach: "greedy by ratio",
      code: `function fractionalKnapsack(capacity, items) {
  if (!items.length || capacity <= 0) return 0;

  const sorted = [...items].sort(
    (a, b) => b.value / b.weight - a.value / a.weight
  );

  let totalValue = 0;
  let remaining = capacity;

  for (const item of sorted) {
    if (remaining <= 0) break;
    const take = Math.min(item.weight, remaining);
    totalValue += item.value * (take / item.weight);
    remaining -= take;
  }
  return totalValue;
}`,
      example: {
        input: "capacity=50, items=[{v:60,w:10},{v:100,w:20},{v:120,w:30}]",
        output: "240",
        explanation: "Take all 3 (10+20+30=60 > 50), then a fraction"
      },
      complexity: { time: "O(n log n)", space: "O(n)" },
      tags: ["fractional", "greedy"]
    }
  ],
  relatedAlgorithms: ["knapsack", "activity-selection"],
  leetcodeTags: ["greedy", "knapsack"],
  order: 2
};