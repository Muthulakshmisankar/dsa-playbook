export default {
  id: "task-scheduler",
  name: "Task Scheduler & Priority Queue",
  category: "heaps",
  description:
    "Max-heap of task priorities. Pop highest priority each time, optionally with cooldown. Also classic greedy scheduling problem.",
  story: "Highest priority next — heap gives O(log n) per extract.",
  difficulty: "hard",
  keywords: ["task scheduler", "priority queue", "cooldown", "scheduling"],
  triggers: ["priority scheduling", "cooldown", "task assignment"],
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  patterns: ["max-heap", "cooldown queue", "greedy"],
  notes: [
    "Simple priority scheduler: max-heap, pop n times",
    "Cooldown: keep a queue of cooling-down tasks",
    "LeetCode 621 formula: (maxFreq - 1) × (n + 1) + maxCount"
  ],
  programs: [
    {
      id: "task-scheduler-basic",
      title: "Priority Task Scheduler",
      description: "Run tasks in priority order.",
      language: "javascript",
      approach: "max-heap",
      code: `class TaskScheduler {
  constructor() {
    this.heap = new Heap((a, b) => b.priority - a.priority);
  }
  addTask(name, priority) {
    this.heap.push({ name, priority });
  }
  runAll() {
    const order = [];
    while (!this.heap.isEmpty()) {
      order.push(this.heap.pop().name);
    }
    return order;
  }
}`,
      example: {
        input: "tasks: email(2), deploy(10), backup(5), cleanup(1)",
        output: "['deploy', 'backup', 'email', 'cleanup']"
      },
      complexity: { time: "O(n log n)", space: "O(n)" },
      tags: ["scheduler", "priority queue"]
    },
    {
      id: "task-scheduler-cooldown",
      title: "Task Scheduler with Cooldown (LC 621)",
      description: "Minimum intervals to run all tasks with cooldown n.",
      language: "javascript",
      approach: "greedy formula",
      code: `function leastInterval(tasks, n) {
  const freq = new Map();
  for (const t of tasks) freq.set(t, (freq.get(t) || 0) + 1);

  const maxFreq = Math.max(...freq.values());
  let maxCount = 0;
  for (const count of freq.values()) {
    if (count === maxFreq) maxCount++;
  }

  const formula = (maxFreq - 1) * (n + 1) + maxCount;
  return Math.max(formula, tasks.length);
}`,
      example: {
        input: 'tasks = ["A","A","A","B","B","B"], n = 2',
        output: "8"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["cooldown", "scheduler", "leetcode-621"]
    }
  ],
  relatedAlgorithms: ["heap-basics", "k-largest"],
  leetcodeTags: ["heap", "greedy"],
  order: 4
};