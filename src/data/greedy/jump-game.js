export default {
  id: "jump-game",
  name: "Jump Game",
  category: "greedy",
  description:
    "Can you reach the last index? Track the farthest reachable index. Extends to minimum jumps (Jump Game II) with BFS-style greedy.",
  story: "Track farthest reachable; if you can't reach i, you're stuck.",
  difficulty: "medium",
  keywords: ["jump game", "reach end", "farthest", "minimum jumps", "greedy"],
  triggers: ["can reach end", "minimum jumps", "farthest reach"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(1)",
  patterns: ["track farthest", "BFS-style window"],
  notes: [
    "Jump Game I: if i > farthest, stuck → false",
    "Jump Game II: extend current window with farthest reachable",
    "When i === currentEnd: increment jumps, extend window"
  ],
  programs: [
    {
      id: "can-jump",
      title: "Can Jump to End?",
      description: "LeetCode 55.",
      language: "javascript",
      approach: "greedy",
      code: `function canJump(nums) {
  let farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) return false;
    farthest = Math.max(farthest, i + nums[i]);
    if (farthest >= nums.length - 1) return true;
  }
  return true;
}`,
      example: {
        input: "[2,3,1,1,4]",
        output: "true"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["greedy", "jump game", "leetcode-55"]
    },
    {
      id: "min-jumps",
      title: "Minimum Jumps to End",
      description: "Jump Game II (LeetCode 45).",
      language: "javascript",
      approach: "BFS-style greedy",
      code: `function minJumps(nums) {
  if (nums.length <= 1) return 0;

  let jumps = 0, currentEnd = 0, farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
      if (currentEnd >= nums.length - 1) break;
    }
  }
  return jumps;
}`,
      example: {
        input: "[2,3,1,1,4]",
        output: "2"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["greedy", "min jumps", "leetcode-45"]
    }
  ],
  relatedAlgorithms: ["activity-selection"],
  leetcodeTags: ["greedy"],
  order: 3
};