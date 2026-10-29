export default {
  id: "tree-traversal",
  name: "Tree Traversal",
  category: "trees",
  description:
    "Visit every node in a tree. DFS variants (preorder, inorder, postorder) differ in when they process the root. BFS visits level by level.",
  story: "Pre/In/Post decide when to visit the root; BFS goes level by level.",
  difficulty: "easy",
  keywords: ["tree", "traversal", "DFS", "BFS", "preorder", "inorder", "postorder", "level order"],
  triggers: ["visit all nodes", "level by level", "sorted order (BST)", "children before parent"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(h) DFS, O(w) BFS",
  patterns: ["recursion", "queue for BFS", "stack for iterative DFS"],
  notes: [
    "Inorder on BST = sorted order",
    "Postorder for deleting a tree (children first)",
    "BFS queue: shift() is O(n) — use head index for large trees",
    "height h = O(log n) balanced, O(n) skewed"
  ],
  programs: [
    {
      id: "dfs-traversals",
      title: "Pre/In/Postorder DFS",
      description: "Three DFS orders using recursion.",
      language: "javascript",
      approach: "recursive",
      code: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function preorder(root) {
  const result = [];
  function dfs(node) {
    if (!node) return;
    result.push(node.value);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return result;
}

function inorder(root) {
  const result = [];
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    result.push(node.value);
    dfs(node.right);
  }
  dfs(root);
  return result;
}

function postorder(root) {
  const result = [];
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    result.push(node.value);
  }
  dfs(root);
  return result;
}`,
      example: {
        input: "tree: 1(2(4,5),3(_,6))",
        output: "pre: [1,2,4,5,3,6], in: [4,2,5,1,3,6], post: [4,5,2,6,3,1]"
      },
      complexity: { time: "O(n)", space: "O(h)" },
      tags: ["dfs", "preorder", "inorder", "postorder"]
    },
    {
      id: "bfs-level-order",
      title: "BFS Level Order",
      description: "Visit nodes level by level using a queue.",
      language: "javascript",
      approach: "queue",
      code: `function bfsLevelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}`,
      example: {
        input: "tree: 1(2(4,5),3(_,6))",
        output: "[1,2,3,4,5,6]"
      },
      complexity: { time: "O(n)", space: "O(w)" },
      tags: ["bfs", "level order"]
    },
    {
      id: "level-grouped",
      title: "Group Levels",
      description: "Return array of arrays — one per level.",
      language: "javascript",
      approach: "bfs with size snapshot",
      code: `function levelOrderGrouped(root) {
  if (!root) return [];
  const result = [];
  let queue = [root];

  while (queue.length) {
    const size = queue.length;
    const level = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}`,
      example: {
        input: "tree: 1(2(4,5),3(_,6))",
        output: "[[1],[2,3],[4,5,6]]"
      },
      complexity: { time: "O(n)", space: "O(w)" },
      tags: ["bfs", "levels"]
    }
  ],
  relatedAlgorithms: ["bst-operations", "tree-height"],
  leetcodeTags: ["tree", "dfs", "bfs"],
  order: 1
};