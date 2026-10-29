export default {
  id: "insert-interval",
  name: "Insert Interval",
  category: "intervals",
  description:
    "Insert a new interval into a sorted, non-overlapping list, merging as needed. O(n) single pass — no re-sort needed.",
  story: "Append non-overlapping; merge overlaps; append the rest.",
  difficulty: "medium",
  keywords: ["insert interval", "merge", "sorted", "single pass"],
  triggers: ["insert into sorted intervals", "add interval and merge"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  patterns: ["three-phase scan"],
  notes: [
    "Phase 1: all intervals ending before new start → push as-is",
    "Phase 2: overlapping → expand new interval with min/max",
    "Phase 3: rest → push as-is"
  ],
  programs: [
    {
      id: "insert-interval-basic",
      title: "Insert Interval",
      description: "LeetCode 57.",
      language: "javascript",
      approach: "three-phase scan",
      code: `function insertInterval(intervals, newInterval) {
  const result = [];
  let [ns, ne] = newInterval;
  let i = 0;

  // Before new interval
  while (i < intervals.length && intervals[i][1] < ns) {
    result.push(intervals[i++]);
  }

  // Merge overlapping
  while (i < intervals.length && intervals[i][0] <= ne) {
    ns = Math.min(ns, intervals[i][0]);
    ne = Math.max(ne, intervals[i][1]);
    i++;
  }
  result.push([ns, ne]);

  // After
  while (i < intervals.length) result.push(intervals[i++]);

  return result;
}`,
      example: {
        input: "intervals=[[1,3],[6,9]], newInterval=[2,5]",
        output: "[[1,5],[6,9]]"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["insert", "intervals", "leetcode-57"]
    }
  ],
  relatedAlgorithms: ["merge-intervals"],
  leetcodeTags: ["intervals"],
  order: 2
};