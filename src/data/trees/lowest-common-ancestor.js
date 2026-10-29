export default {
  id: "lowest-common-ancestor",
  name: "Lowest Common Ancestor",
  category: "trees",
  description:
    "Find the deepest node that has both given nodes as descendants. In a BST it's O(h); in a general tree O(n).",
  story: "Walk from root; first node where p and q split is the LCA.",
  difficulty: "medium",
  keywords: ["lca", "ancestor", "common ancestor", "bst", "tree"],
  triggers: ["lowest common ancestor", "path between nodes", "ancestor"],
  timeComplexity: "O(h) BST, O(n) general",
  spaceComplexity: "O(h)",
  patterns: ["BST: use value comparisons", "General: postorder DFS"],
  notes: [
    "BST: LCA value is between p and q → descend left/right",
    "General tree: if p and q are in different subtrees, root is LCA",
    "Return type: usually node, but can return value"
  ],
  programs: [
    {
      id: "lca-bst",
      title: "LCA in BST",
      description: "Binary Search Tree — use ordering (LeetCode 235).",
      language: "javascript",
      approach: "iterative BST",
      code: `function lowestCommonAncestorBST(root, p, q) {
  let current = root;
  while (current) {
    if (p.value < current.value && q.value < current.value) {
      current = current.left;
    } else if (p.value > current.value && q.value > current.value) {
      current = current.right;
    } else {
      return current;
    }
  }
  return null;
}`,
      example: {
        input: "BST: 6(2(0,4),8(7,9)), p=2, q=8",
        output: "node 6"
      },
      complexity: { time: "O(h)", space: "O(1)" },
      tags: ["bst", "lca", "leetcode-235"]
    },
    {
      id: "lca-general",
      title: "LCA in General Binary Tree",
      description: "Postorder DFS (LeetCode 236).",
      language: "javascript",
      approach: "recursive",
      code: `function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  return left || right;
}`,
      example: {
        input: "tree: 3(5(6,2(7,4)),1(0,8)), p=5, q=1",
        output: "node 3"
      },
      complexity: { time: "O(n)", space: "O(h)" },
      tags: ["lca", "tree", "leetcode-236"]
    }
  ],
  relatedAlgorithms: ["bst-operations", "tree-traversal"],
  leetcodeTags: ["tree", "dfs"],
  order: 4
};