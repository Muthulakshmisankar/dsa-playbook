export default {
  id: "activity-selection",
  name: "Activity Selection",
  category: "greedy",
  description:
    "Select the maximum number of non-overlapping activities. Greedy: sort by end time, pick earliest finishing that doesn't overlap.",
  story: "Sort by end time — pick earliest finishing.",
  difficulty: "easy",
  keywords: ["activity selection", "interval scheduling", "non-overlapping", "greedy"],
  triggers: ["maximum non-overlapping activities", "interval scheduling", "meeting rooms"],
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  patterns: ["sort by end time", "greedy pick"],
  notes: [
    "Sort by END time (not start) — greedy still works",
    "Pick activity if start >= last end",
    "Classic greedy proof: earliest finish leaves most room"
  ],
  programs: [
    {
      id: "max-activities",
      title: "Maximum Non-Overlapping Activities",
      description: "Classic activity selection.",
      language: "javascript",
      approach: "greedy by end time",
      code: `function maxActivities(activities) {
  if (!activities || activities.length === 0) return [];

  const sorted = [...activities].sort((a, b) => a[1] - b[1]);
  const selected = [sorted[0]];
  let lastEnd = sorted[0][1];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i][0] >= lastEnd) {
      selected.push(sorted[i]);
      lastEnd = sorted[i][1];
    }
  }
  return selected;
}`,
      example: {
        input: "[[1,4],[3,5],[0,6],[5,7],[8,9],[5,9]]",
        output: "[[1,4],[5,7],[8,9]]"
      },
      complexity: { time: "O(n log n)", space: "O(n)" },
      tags: ["greedy", "intervals", "scheduling"]
    },
    {
      id: "min-rooms",
      title: "Minimum Meeting Rooms",
      description: "Min rooms needed to hold all meetings (LeetCode 253).",
      language: "javascript",
      approach: "sort + min-heap of end times",
      code: `function minMeetingRooms(intervals) {
  if (!intervals.length) return 0;

  const starts = intervals.map((i) => i[0]).sort((a, b) => a - b);
  const ends = intervals.map((i) => i[1]).sort((a, b) => a - b);

  let rooms = 0, endPtr = 0;
  for (const start of starts) {
    if (start < ends[endPtr]) rooms++;
    else endPtr++;
  }
  return rooms;
}`,
      example: {
        input: "[[0,30],[5,10],[15,20]]",
        output: "2"
      },
      complexity: { time: "O(n log n)", space: "O(n)" },
      tags: ["meeting rooms", "min-heap", "leetcode-253"]
    }
  ],
  relatedAlgorithms: ["merge-intervals", "job-scheduling"],
  leetcodeTags: ["greedy", "intervals"],
  order: 1
};