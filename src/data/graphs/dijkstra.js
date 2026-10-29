export default {
  id: "dijkstra",
  name: "Dijkstra's Algorithm",
  category: "graphs",
  description:
    "Shortest path from a single source in a weighted graph with non-negative weights. Uses a min-heap to greedily settle the closest unvisited node.",
  story: "Greedy relaxation — always pop the closest unvisited node.",
  difficulty: "hard",
  keywords: ["shortest path", "weighted graph", "priority queue", "dijkstra"],
  triggers: [
    "non-negative weights",
    "single source shortest path",
    "network delay",
    "min effort path"
  ],
  timeComplexity: "O((V + E) log V)",
  spaceComplexity: "O(V)",
  patterns: ["greedy", "edge relaxation", "priority queue"],
  notes: [
    "Fails on negative weights — use Bellman-Ford",
    "Min-heap is essential for efficiency",
    "Once popped, a node's distance is final"
  ],
  programs: [
    {
      id: "classic-dijkstra",
      title: "Classic Dijkstra",
      description: "Shortest distances from source to all nodes.",
      language: "javascript",
      approach: "greedy + heap",
      code: `class MinHeap {
  constructor(cmp) { this.data = []; this.cmp = cmp; }
  size() { return this.data.length; }
  isEmpty() { return this.data.length === 0; }
  push(x) {
    this.data.push(x);
    this._up(this.data.length - 1);
  }
  pop() {
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length) {
      this.data[0] = last;
      this._down(0);
    }
    return top;
  }
  _up(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.cmp(this.data[i], this.data[p]) >= 0) break;
      [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
      i = p;
    }
  }
  _down(i) {
    const n = this.data.length;
    while (true) {
      let s = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && this.cmp(this.data[l], this.data[s]) < 0) s = l;
      if (r < n && this.cmp(this.data[r], this.data[s]) < 0) s = r;
      if (s === i) break;
      [this.data[i], this.data[s]] = [this.data[s], this.data[i]];
      i = s;
    }
  }
}

function dijkstra(n, graph, src) {
  const dist = new Array(n).fill(Infinity);
  const visited = new Array(n).fill(false);
  dist[src] = 0;

  const heap = new MinHeap((a, b) => a[0] - b[0]);
  heap.push([0, src]);

  while (!heap.isEmpty()) {
    const [d, u] = heap.pop();
    if (visited[u]) continue;
    visited[u] = true;

    for (const [v, w] of (graph[u] || [])) {
      if (!visited[v] && d + w < dist[v]) {
        dist[v] = d + w;
        heap.push([dist[v], v]);
      }
    }
  }
  return dist.map(d => d === Infinity ? -1 : d);
}`,
      example: {
        input: "4 nodes: 0→1(4), 0→3(2), 1→2(1), 3→2(3), src=0",
        output: "[0, 4, 5, 2]"
      },
      complexity: { time: "O((V+E) log V)", space: "O(V)" },
      tags: ["dijkstra", "heap", "shortest path"]
    },
    {
      id: "network-delay",
      title: "Network Delay Time (LC 743)",
      description:
        "Minimum time for all nodes to receive a signal from source k.",
      language: "javascript",
      approach: "dijkstra",
      code: `function networkDelayTime(times, n, k) {
  // Assume MinHeap from previous example is available
  const graph = {};
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (const [u, v, w] of times) graph[u].push([v, w]);

  const dist = {};
  for (let i = 1; i <= n; i++) dist[i] = Infinity;
  dist[k] = 0;

  const heap = new MinHeap((a, b) => a[0] - b[0]);
  heap.push([0, k]);
  const visited = new Set();

  while (!heap.isEmpty()) {
    const [d, u] = heap.pop();
    if (visited.has(u)) continue;
    visited.add(u);

    for (const [v, w] of graph[u]) {
      if (!visited.has(v) && d + w < dist[v]) {
        dist[v] = d + w;
        heap.push([dist[v], v]);
      }
    }
  }

  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (dist[i] === Infinity) return -1;
    ans = Math.max(ans, dist[i]);
  }
  return ans;
}`,
      example: {
        input: "times=[[2,1,1],[2,3,1],[3,4,1]], n=4, k=2",
        output: "2"
      },
      complexity: { time: "O((V+E) log V)", space: "O(V)" },
      tags: ["dijkstra", "network", "leetcode-743"]
    },
    {
      id: "min-effort-path",
      title: "Path with Minimum Effort (LC 1631)",
      description:
        "Minimize the maximum absolute height difference along any path in a grid.",
      language: "javascript",
      approach: "dijkstra on grid",
      code: `function minimumEffortPath(heights) {
  const m = heights.length, n = heights[0].length;
  const effort = Array.from({ length: m }, () => new Array(n).fill(Infinity));
  effort[0][0] = 0;

  const heap = new MinHeap((a, b) => a[0] - b[0]);
  heap.push([0, 0, 0]);

  const visited = Array.from({ length: m }, () => new Array(n).fill(false));
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

  while (!heap.isEmpty()) {
    const [e, r, c] = heap.pop();
    if (visited[r][c]) continue;
    visited[r][c] = true;

    if (r === m - 1 && c === n - 1) return e;

    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc]) {
        const diff = Math.abs(heights[nr][nc] - heights[r][c]);
        const newEffort = Math.max(e, diff);
        if (newEffort < effort[nr][nc]) {
          effort[nr][nc] = newEffort;
          heap.push([newEffort, nr, nc]);
        }
      }
    }
  }
  return 0;
}`,
      example: {
        input: "heights = [[1,2,2],[3,8,2],[5,3,5]]",
        output: "2"
      },
      complexity: { time: "O(mn log(mn))", space: "O(mn)" },
      tags: ["dijkstra", "grid", "leetcode-1631"]
    }
  ],
  relatedAlgorithms: ["graph-bfs", "topological-sort"],
  leetcodeTags: ["dijkstra", "shortest-path"],
  order: 4
};