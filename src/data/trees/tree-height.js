export default {
  id: "tree-height",
  name: "Tree Height & Diameter",
  category: "trees",
  description:
    "Height = longest path from root to leaf (edges). Diameter = longest path between any two nodes. Both use simple DFS recurrences.",
  story: "Height = 1 + max(left, right); diameter = left + right at each node.",
  difficulty: "medium",
  keywords: ["height", "depth", "diameter", "balanced", "recursion"],
  triggers: ["maximum depth", "tree diameter", "balanced check"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(h)",
  patterns: ["postorder DFS", "single-pass diameter"],
  notes: [
    "Height of empty tree = 0",
    "Diameter is NOT necessarily through root — must check all nodes",
    "Balanced tree: |leftH - rightH| <= 1 at EVERY node"
  ],
  programs: [
    {
      id: "max-depth",
      title: "Maximum Depth",
      description: "Longest path from root to a leaf.",
      language: "javascript",
      approach: "recursive",
      code: `function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`,
      example: {
        input: "tree: 1(2(3),4)",
        output: "3"
      },
      complexity: { time: "O(n)", space: "O(h)" },
      tags: ["height", "depth"]
    },
    {
      id: "tree-diameter",
      title: "Diameter of Tree",
      description: "Longest path between any two nodes.",
      language: "javascript",
      approach: "single-pass DFS",
      code: `function diameter(root) {
  let maxDiameter = 0;

  function height(node) {
    if (!node) return 0;
    const leftH = height(node.left);
    const rightH = height(node.right);
    maxDiameter = Math.max(maxDiameter, leftH + rightH);
    return 1 + Math.max(leftH, rightH);
  }

  height(root);
  return maxDiameter;
}`,
      example: {
        input: "tree: 1(2(4,5),3)",
        output: "3",
        explanation: "4→2→1→3"
      },
      complexity: { time: "O(n)", space: "O(h)" },
      tags: ["diameter", "dfs"]
    },
    {
      id: "is-balanced",
      title: "Balanced Binary Tree",
      description: "Check |leftH - rightH| ≤ 1 at every node (LeetCode 110).",
      language: "javascript",
      approach: "bottom-up",
      code: `function isBalanced(root) {
  function check(node) {
    if (!node) return 0;
    const leftH = check(node.left);
    if (leftH === -1) return -1;
    const rightH = check(node.right);
    if (rightH === -1) return -1;
    if (Math.abs(leftH - rightH) > 1) return -1;
    return 1 + Math.max(leftH, rightH);
  }
  return check(root) !== -1;
}`,
      example: {
        input: "tree: 3(9,20(15,7))",
        output: "true"
      },
      complexity: { time: "O(n)", space: "O(h)" },
      tags: ["balanced", "leetcode-110"]
    }
  ],
  relatedAlgorithms: ["tree-traversal", "lowest-common-ancestor"],
  leetcodeTags: ["tree", "dfs"],
  order: 3
};