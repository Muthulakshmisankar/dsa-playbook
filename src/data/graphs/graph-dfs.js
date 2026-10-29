export default {
  id: "graph-dfs",
  name: "Graph DFS",
  category: "graphs",
  description:
    "Depth-first search explores as deep as possible before backtracking — ideal for connectivity, cycle detection, and path finding.",
  story: "Go deep, then backtrack.",
  difficulty: "medium",
  keywords: ["dfs", "depth-first", "recursion", "backtrack", "cycle"],
  triggers: ["connected components", "cycle detection", "path existence"],
  timeComplexity: "O(V + E)",
  spaceComplexity: "O(V)",
  patterns: ["recursion", "explicit stack", "coloring"],
  notes: [
    "Recursive DFS uses the call stack — could overflow on deep graphs",
    "Use colors (white/gray/black) for cycle detection in directed graphs",
    "DFS is not shortest path — use BFS for that"
  ],
  programs: [
    {
      id: "dfs-recursive",
      title: "Recursive DFS",
      description: "Visit all nodes using recursion.",
      language: "javascript",
      approach: "recursive",
      code: `function dfsRecursive(graph, start) {
  const visited = new Set();
  const order = [];

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    order.push(node);

    for (const neighbor of (graph[node] || [])) {
      dfs(neighbor);
    }
  }

  dfs(start);
  return order;
}`,
      example: {
        input: "graph = {A:[B,C], B:[D], C:[E]}, start=A",
        output: "['A','B','D','C','E']"
      },
      complexity: { time: "O(V+E)", space: "O(V)" },
      tags: ["dfs", "recursive"]
    },
    {
      id: "dfs-iterative",
      title: "Iterative DFS (Explicit Stack)",
      description: "Avoid stack overflow with an explicit stack.",
      language: "javascript",
      approach: "stack",
      code: `function dfsIterative(graph, start) {
  const stack = [start];
  const visited = new Set();
  const order = [];

  while (stack.length > 0) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    order.push(node);

    for (const neighbor of (graph[node] || [])) {
      if (!visited.has(neighbor)) stack.push(neighbor);
    }
  }
  return order;
}`,
      example: {
        input: "graph = {A:[B,C], B:[D], C:[E]}, start=A",
        output: "['A','C','E','B','D']"
      },
      complexity: { time: "O(V+E)", space: "O(V)" },
      tags: ["dfs", "iterative", "stack"]
    },
    {
      id: "dfs-cycle",
      title: "Cycle Detection (Directed Graph)",
      description: "Detect cycles using 3-color DFS.",
      language: "javascript",
      approach: "coloring",
      code: `function hasCycle(n, adj) {
  const color = new Array(n).fill(0); // 0=white, 1=gray, 2=black

  function dfs(u) {
    color[u] = 1;
    for (const v of adj[u]) {
      if (color[v] === 1) return true;
      if (color[v] === 0 && dfs(v)) return true;
    }
    color[u] = 2;
    return false;
  }

  for (let i = 0; i < n; i++) {
    if (color[i] === 0 && dfs(i)) return true;
  }
  return false;
}`,
      example: {
        input: "n=3, adj = [[1],[2],[0]]",
        output: "true",
        explanation: "cycle 0→1→2→0"
      },
      complexity: { time: "O(V+E)", space: "O(V)" },
      tags: ["dfs", "cycle", "coloring"]
    }
  ],
  relatedAlgorithms: ["graph-bfs", "topological-sort"],
  leetcodeTags: ["dfs"],
  order: 2
};