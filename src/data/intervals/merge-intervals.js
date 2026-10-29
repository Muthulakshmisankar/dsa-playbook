export default {
  id: "merge-intervals",
  name: "Merge Intervals",
  category: "intervals",
  description:
    "Merge all overlapping intervals. Sort by start, then extend each merged interval when next start <= current end.",
  story: "Sort by start, extend end when overlapping.",
  difficulty: "medium",
  keywords: ["merge", "intervals", "overlap", "consolidate", "ranges"],
  triggers: ["merge overlapping intervals", "consolidate ranges", "overlapping schedules"],
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  patterns: ["sort by start", "extend end"],
  notes: [
    "Always sort first — necessary for single-pass",
    "Extend end with Math.max — a later interval may be contained",
    "Touching vs overlapping: use < vs <= depending on problem"
  ],
  programs: [
    {
      id: "merge-intervals-basic",
      title: "Merge Overlapping Intervals",
      description: "LeetCode 56.",
      language: "javascript",
      approach: "sort + sweep",
      code: `function mergeIntervals(intervals) {
  if (!intervals || intervals.length <= 1) return intervals || [];

  const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
  const result = [sorted[0].slice()];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];
    const last = result[result.length - 1];

    if (start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      result.push([start, end]);
    }
  }
  return result;
}`,
      example: {
        input: "[[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]"
      },
      complexity: { time: "O(n log n)", space: "O(n)" },
      tags: ["merge", "intervals", "leetcode-56"]
    },
    {
      id: "merge-meetings",
      title: "Merge Meeting Times",
      description: "Object-based version for meeting schedules.",
      language: "javascript",
      approach: "sort + sweep",
      code: `function mergeMeetings(meetings) {
  if (!meetings || meetings.length <= 1) return meetings || [];

  const sorted = [...meetings].sort((a, b) => a.start - b.start);
  const merged = [{ ...sorted[0] }];

  for (let i = 1; i < sorted.length; i++) {
    const cur = sorted[i];
    const last = merged[merged.length - 1];

    if (cur.start <= last.end) {
      last.end = Math.max(last.end, cur.end);
    } else {
      merged.push({ ...cur });
    }
  }
  return merged;
}`,
      example: {
        input: "[{start:1,end:3},{start:2,end:6},{start:8,end:10}]",
        output: "[{start:1,end:6},{start:8,end:10}]"
      },
      complexity: { time: "O(n log n)", space: "O(n)" },
      tags: ["meetings", "merge"]
    }
  ],
  relatedAlgorithms: ["insert-interval", "activity-selection"],
  leetcodeTags: ["intervals"],
  order: 1
};