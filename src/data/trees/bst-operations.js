export default {
  id: "bst-operations",
  name: "BST Operations",
  category: "trees",
  description:
    "Binary Search Tree: left subtree < node < right subtree. Search/insert/delete in O(h). Inorder traversal gives sorted values.",
  story: "Left is smaller, right is larger — recurse accordingly.",
  difficulty: "medium",
  keywords: ["bst", "search", "insert", "delete", "sorted", "balanced"],
  triggers: ["sorted tree operations", "range queries", "ordered data"],
  timeComplexity: "O(h) = O(log n) balanced, O(n) skewed",
  spaceComplexity: "O(h)",
  patterns: ["left < root < right", "inorder = sorted"],
  notes: [
    "Balanced BST gives O(log n) ops; skewed gives O(n)",
    "Inorder traversal of a BST yields sorted order",
    "Delete has 3 cases: leaf, one child, two children (use inorder successor)"
  ],
  programs: [
    {
      id: "bst-search",
      title: "BST Search",
      description: "Find a value in a BST.",
      language: "javascript",
      approach: "iterative",
      code: `function searchBST(root, target) {
  let current = root;
  while (current !== null) {
    if (current.value === target) return current;
    current = target < current.value ? current.left : current.right;
  }
  return null;
}`,
      example: {
        input: "tree: 5(3,8), target=3",
        output: "node with value 3"
      },
      complexity: { time: "O(h)", space: "O(1)" },
      tags: ["bst", "search"]
    },
    {
      id: "bst-insert",
      title: "BST Insert",
      description: "Insert a value preserving BST property.",
      language: "javascript",
      approach: "recursive",
      code: `function insertBST(root, value) {
  if (root === null) return new TreeNode(value);
  if (value < root.value) {
    root.left = insertBST(root.left, value);
  } else if (value > root.value) {
    root.right = insertBST(root.right, value);
  }
  return root;
}`,
      example: {
        input: "tree: 5(3,8), insert 4",
        output: "tree: 5(3(_,4),8)"
      },
      complexity: { time: "O(h)", space: "O(h)" },
      tags: ["bst", "insert"]
    },
    {
      id: "bst-delete",
      title: "BST Delete",
      description: "Remove a node — 3 cases: leaf, one child, two children.",
      language: "javascript",
      approach: "recursive with successor",
      code: `function deleteBST(root, key) {
  if (root === null) return null;

  if (key < root.value) {
    root.left = deleteBST(root.left, key);
  } else if (key > root.value) {
    root.right = deleteBST(root.right, key);
  } else {
    // Found node
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // Two children: replace with inorder successor (min of right)
    let successor = root.right;
    while (successor.left !== null) successor = successor.left;
    root.value = successor.value;
    root.right = deleteBST(root.right, successor.value);
  }
  return root;
}`,
      example: {
        input: "tree: 5(3,8), delete 5",
        output: "tree: 8(3,_)  (or equivalent)"
      },
      complexity: { time: "O(h)", space: "O(h)" },
      tags: ["bst", "delete"]
    },
    {
      id: "bst-validate",
      title: "Validate BST",
      description: "Check if a binary tree is a valid BST (LeetCode 98).",
      language: "javascript",
      approach: "min/max bounds",
      code: `function isValidBST(root) {
  function dfs(node, min, max) {
    if (!node) return true;
    if (node.value <= min || node.value >= max) return false;
    return dfs(node.left, min, node.value) && dfs(node.right, node.value, max);
  }
  return dfs(root, -Infinity, Infinity);
}`,
      example: {
        input: "tree: 5(1,7(6,8))",
        output: "true"
      },
      complexity: { time: "O(n)", space: "O(h)" },
      tags: ["bst", "validate", "leetcode-98"]
    }
  ],
  relatedAlgorithms: ["tree-traversal", "lowest-common-ancestor"],
  leetcodeTags: ["bst"],
  order: 2
};