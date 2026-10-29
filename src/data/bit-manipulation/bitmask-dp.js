export default {
  id: "bitmask-dp",
  name: "Bitmask DP",
  category: "bit-manipulation",
  description:
    "DP where the state is a bitmask of visited items. Used for TSP (n ≤ 20), assignment problems, and subset optimization.",
  story: "dp[mask] = best for the set of items in mask.",
  difficulty: "hard",
  keywords: ["bitmask dp", "tsp", "held-karp", "state compression", "visited"],
  triggers: ["small n ≤ 20", "visit each item once", "subset state"],
  timeComplexity: "O(2ⁿ · n²) typically",
  spaceComplexity: "O(2ⁿ · n)",
  patterns: ["mask = visited set", "transition: add one item"],
  notes: [
    "Only feasible when n ≤ 20 (2²⁰ ≈ 1M)",
    "State: dp[mask][i] = best cost visiting mask ending at i",
    "Transition: dp[mask | (1<<j)][j] = min/max over dp[mask][i] + cost(i,j)",
    "TSP: Held-Karp is O(2ⁿ · n²) vs O(n!) brute"
  ],
  programs: [
    {
      id: "tsp-held-karp",
      title: "TSP (Held-Karp)",
      description: "Minimum tour through all cities (DP on subsets).",
      language: "javascript",
      approach: "bitmask DP",
      code: `function tsp(dist) {
  const n = dist.length;
  const FULL = (1 << n) - 1;
  const dp = Array.from({ length: 1 << n }, () =>
    new Array(n).fill(Infinity)
  );
  dp[1][0] = 0; // start at city 0

  for (let mask = 1; mask <= FULL; mask++) {
    for (let u = 0; u < n; u++) {
      if (!(mask & (1 << u))) continue;
      for (let v = 0; v < n; v++) {
        if (mask & (1 << v)) continue;
        const next = mask | (1 << v);
        dp[next][v] = Math.min(dp[next][v], dp[mask][u] + dist[u][v]);
      }
    }
  }
  return Math.min(...dp[FULL]);
}`,
      example: {
        input: "dist=[[0,10,15,20],[10,0,35,25],[15,35,0,30],[20,25,30,0]]",
        output: "80"
      },
      complexity: { time: "O(2ⁿ · n²)", space: "O(2ⁿ · n)" },
      tags: ["tsp", "bitmask dp"]
    },
    {
      id: "sos-dp",
      title: "Sum Over Subsets (SOS DP)",
      description:
        "For each mask, compute sum of values over all submasks. O(2ⁿ · n).",
      language: "javascript",
      approach: "sos dp",
      code: `function sos(arr) {
  const n = arr.length;
  const F = [...arr];
  const logN = Math.log2(n);

  for (let i = 0; i < logN; i++) {
    for (let mask = 0; mask < n; mask++) {
      if (mask & (1 << i)) {
        F[mask] += F[mask ^ (1 << i)];
      }
    }
  }
  return F;
}`,
      example: {
        input: "[1,2,3,4]",
        output: "[1,3,4,10]"
      },
      complexity: { time: "O(2ⁿ · n)", space: "O(2ⁿ)" },
      tags: ["sos", "bitmask", "dp"]
    }
  ],
  relatedAlgorithms: ["subsets-bitmask", "knapsack"],
  leetcodeTags: ["bitmask", "dp"],
  order: 4
};