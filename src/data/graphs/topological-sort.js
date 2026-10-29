export default {
  id: "topological-sort",
  name: "Topological Sort",
  category: "graphs",
  description:
    "Linear ordering of vertices in a DAG such that for every edge u→v, u comes before v. Uses Kahn's algorithm (BFS + in-degree).",
  story: "Peel off nodes with no incoming edges — the order you peel is the answer.",
  difficulty: "hard",
  keywords: ["topological", "kahn", "dependency", "prerequisite", "dag", "order"],
  triggers: [
    "dependency resolution",
    "course prerequisites",
    "build order",
    "cycle detection in DAG"
  ],
  timeComplexity: "O(V + E)",
  spaceComplexity: "O(V + E)",
  patterns: ["in-degree", "queue", "cycle detection"],
  notes: [
    "Only works on DAGs (directed acyclic graphs)",
    "If order.length < V → cycle exists",
    "Use a head index instead of Array.shift() for O(1) pops"
  ],
  programs: [
    {
      id: "kahn-basic",
      title: "Kahn's Algorithm",
      description: "Return topological order, or null if cycle exists.",
      language: "javascript",
      approach: "kahn",
      code: `function topologicalSort(numNodes, edges) {
  const adj = Array.from({ length: numNodes }, () => []);
  const indegree = new Array(numNodes).fill(0);

  for (const [from, to] of edges) {
    adj[from].push(to);
    indegree[to]++;
  }

  const queue = [];
  for (let i = 0; i < numNodes; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const order = [];
  let head = 0;
  while (head < queue.length) {
    const node = queue[head++];
    order.push(node);

    for (const neighbor of adj[node]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return order.length === numNodes ? order : null;
}`,
      example: {
        input: "numNodes=4, edges=[[0,1],[0,2],[1,3],[2,3]]",
        output: "[0,1,2,3]"
      },
      complexity: { time: "O(V+E)", space: "O(V+E)" },
      tags: ["kahn", "topological"]
    },
    {
      id: "course-schedule",
      title: "Course Schedule (Cycle Detection)",
      description:
        "Can all courses be finished? Returns false if a cycle exists.",
      language: "javascript",
      approach: "kahn",
      code: `function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = new Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    inDegree[course]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let head = 0, processed = 0;
  while (head < queue.length) {
    const node = queue[head++];
    processed++;
    for (const neighbor of graph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }
  return processed === numCourses;
}`,
      example: {
        input: "numCourses=2, prerequisites=[[1,0]]",
        output: "true"
      },
      complexity: { time: "O(V+E)", space: "O(V+E)" },
      tags: ["kahn", "cycle", "leetcode-207"]
    },
    {
      id: "build-order",
      title: "Build Order (String Nodes)",
      description: "Topological order with string nodes using Maps.",
      language: "javascript",
      approach: "kahn + map",
      code: `function buildOrder(items, dependencies) {
  const graph = new Map();
  const inDegree = new Map();

  for (const item of items) {
    graph.set(item, []);
    inDegree.set(item, 0);
  }

  for (const [dependent, dependency] of dependencies) {
    graph.get(dependency).push(dependent);
    inDegree.set(dependent, inDegree.get(dependent) + 1);
  }

  const queue = [];
  for (const item of items) {
    if (inDegree.get(item) === 0) queue.push(item);
  }

  const result = [];
  let head = 0;
  while (head < queue.length) {
    const node = queue[head++];
    result.push(node);
    for (const neighbor of graph.get(node)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) queue.push(neighbor);
    }
  }

  return result.length === items.length ? result : null;
}`,
      example: {
        input: "items=[a,b,c], deps=[[b,a],[c,b]]",
        output: "['a','b','c']"
      },
      complexity: { time: "O(V+E)", space: "O(V+E)" },
      tags: ["kahn", "build order"]
    }
  ],
  relatedAlgorithms: ["graph-dfs", "graph-bfs"],
  leetcodeTags: ["topological-sort"],
  order: 3
};