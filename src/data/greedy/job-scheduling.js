export default {
  id: "job-scheduling",
  name: "Job Scheduling with Deadlines",
  category: "greedy",
  description:
    "Max profit from unit-time jobs with deadlines. Sort by profit descending, assign each job the latest free slot before its deadline.",
  story: "Highest profit first — assign latest available slot ≤ deadline.",
  difficulty: "medium",
  keywords: ["job scheduling", "deadline", "profit", "greedy", "slots"],
  triggers: ["max profit jobs", "job deadline", "one job per slot"],
  timeComplexity: "O(n log n + n·d) or O(n log n) with DSU",
  spaceComplexity: "O(d)",
  patterns: ["sort by profit", "slot assignment"],
  notes: [
    "Each job takes 1 unit time; only one per slot",
    "Naive: try slots from deadline down to 1",
    "DSU optimization: skip filled slots in near O(1)"
  ],
  programs: [
    {
      id: "job-scheduling-basic",
      title: "Max Profit Job Scheduling",
      description: "Greedy with slot array.",
      language: "javascript",
      approach: "greedy by profit",
      code: `function jobScheduling(jobs) {
  if (!jobs.length) return { totalProfit: 0, scheduled: [] };

  const sorted = [...jobs].sort((a, b) => b.profit - a.profit);
  const maxDeadline = Math.max(...sorted.map((j) => j.deadline), 0);
  const slots = new Array(maxDeadline + 1).fill(null);

  let totalProfit = 0;
  const scheduled = [];

  for (const job of sorted) {
    for (let t = job.deadline; t > 0; t--) {
      if (slots[t] === null) {
        slots[t] = job;
        totalProfit += job.profit;
        scheduled.push(job);
        break;
      }
    }
  }

  return {
    totalProfit,
    scheduled: scheduled.sort((a, b) => a.deadline - b.deadline)
  };
}`,
      example: {
        input:
          "[{id:'a',deadline:2,profit:100},{id:'b',deadline:1,profit:19},{id:'c',deadline:2,profit:27},{id:'d',deadline:1,profit:25}]",
        output: "{ totalProfit: 127, scheduled: [b, a] }"
      },
      complexity: { time: "O(n log n + n·d)", space: "O(d)" },
      tags: ["jobs", "greedy", "deadlines"]
    }
  ],
  relatedAlgorithms: ["activity-selection", "task-scheduler"],
  leetcodeTags: ["greedy"],
  order: 5
};