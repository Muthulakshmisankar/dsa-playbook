export default {
  id: "graph-bfs",
  name: "Graph BFS",
  category: "graphs",
  description:
    "Breadth-first search explores a graph level by level using a queue — guarantees shortest path in unweighted graphs.",
  story: "Visit all neighbors before going deeper.",
  difficulty: "medium",
  keywords: ["bfs", "breadth-first", "shortest path", "level order", "queue"],
  triggers: [
    "shortest path in unweighted graph",
    "level order",
    "minimum moves",
    "nearest node"
  ],
  timeComplexity: "O(V + E)",
  spaceComplexity: "O(V)",
  patterns: ["queue", "visited set", "level tracking"],
  notes: [
    "BFS guarantees shortest distance in unweighted graphs",
    "Use a visited set to avoid re-processing",
    "Snapshot queue length to process level by level"
  ],
  programs: [
    {
      id: "bfs-traversal",
      title: "Generic BFS Traversal",
      description: "Return BFS order from a start node.",
      language: "javascript",
      approach: "queue",
      code: `function bfsGraph(graph, start) {
  const queue = [start];
  const visited = new Set([start]);
  const order = [];

  while (queue.length > 0) {
    const node = queue.shift();
    order.push(node);

    for (const neighbor of (graph[node] || [])) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return order;
}`,
      example: {
        input: "graph = {A:[B,C], B:[A,D], C:[A], D:[B]}, start=A",
        output: "['A','B','C','D']"
      },
      complexity: { time: "O(V+E)", space: "O(V)" },
      tags: ["bfs", "traversal"]
    },
    {
      id: "bfs-levels",
      title: "Level-Order Traversal",
      description: "Return nodes grouped by their level.",
      language: "javascript",
      approach: "queue + level snapshot",
      code: `function bfsLevels(graph, start) {
  const queue = [start];
  const visited = new Set([start]);
  const levels = [];
  let level = 0;

  while (queue.length > 0) {
    const size = queue.length;
    const currentLevel = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      currentLevel.push(node);

      for (const neighbor of (graph[node] || [])) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    levels.push({ level, nodes: currentLevel });
    level++;
  }
  return levels;
}`,
      example: {
        input: "graph = {A:[B,C], B:[D], C:[E]}, start=A",
        output: "level 0: [A], level 1: [B,C], level 2: [D,E]"
      },
      complexity: { time: "O(V+E)", space: "O(V)" },
      tags: ["bfs", "level order"]
    },
    {
      id: "min-moves-grid",
      title: "Minimum Moves in a Grid",
      description:
        "BFS on a 2D grid with 4-directional moves from (sr,sc) to (tr,tc).",
      language: "javascript",
      approach: "bfs on grid",
      code: `function minMovesGrid(grid, sr, sc, tr, tc) {
  const R = grid.length, C = grid[0].length;
  if (grid[sr][sc] === 1 || grid[tr][tc] === 1) return -1;
  if (sr === tr && sc === tc) return 0;

  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  const queue = [[sr, sc, 0]];
  const visited = Array.from({ length: R }, () => Array(C).fill(false));
  visited[sr][sc] = true;

  while (queue.length > 0) {
    const [r, c, steps] = queue.shift();
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
      if (visited[nr][nc] || grid[nr][nc] === 1) continue;
      if (nr === tr && nc === tc) return steps + 1;
      visited[nr][nc] = true;
      queue.push([nr, nc, steps + 1]);
    }
  }
  return -1;
}`,
      example: {
        input: "grid with obstacles, from (0,0) to (3,3)",
        output: "6"
      },
      complexity: { time: "O(R*C)", space: "O(R*C)" },
      tags: ["bfs", "grid"]
    }
  ],
  relatedAlgorithms: ["graph-dfs", "dijkstra"],
  leetcodeTags: ["bfs"],
  order: 1
};