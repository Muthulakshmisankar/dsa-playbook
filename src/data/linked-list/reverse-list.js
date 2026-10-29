export default {
  id: "reverse-list",
  name: "Reverse Linked List",
  category: "linked-list",
  description:
    "Reverse pointer directions one by one using three pointers: prev, current, next. O(n) time, O(1) space.",
  story: "Walk forward, flip each arrow backward.",
  difficulty: "easy",
  keywords: ["reverse", "linked list", "iterative", "recursive", "pointers"],
  triggers: ["reverse a list", "reverse in groups"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(1) iterative, O(n) recursive",
  patterns: ["three pointers", "recursion"],
  notes: [
    "Iterative: prev → null, current → head; loop flipping next",
    "Recursive: reverse rest, then fix 2 pointers",
    "Careful: save next before overwriting current.next"
  ],
  programs: [
    {
      id: "reverse-iterative",
      title: "Reverse Iteratively",
      description: "Three-pointer iterative reversal.",
      language: "javascript",
      approach: "iterative",
      code: `function reverseList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;    // store next
    current.next = prev;    // reverse pointer
    prev = current;         // move prev forward
    current = next;         // move current forward
  }
  return prev;
}`,
      example: {
        input: "1 → 2 → 3 → 4 → 5",
        output: "5 → 4 → 3 → 2 → 1"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["reverse", "iterative"]
    },
    {
      id: "reverse-recursive",
      title: "Reverse Recursively",
      description: "Reverse rest, then flip the last two pointers.",
      language: "javascript",
      approach: "recursive",
      code: `function reverseListRecursive(head) {
  if (head === null || head.next === null) return head;

  const newHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}`,
      example: {
        input: "1 → 2 → 3",
        output: "3 → 2 → 1"
      },
      complexity: { time: "O(n)", space: "O(n) stack" },
      tags: ["reverse", "recursive"]
    },
    {
      id: "reverse-group",
      title: "Reverse in K-Groups",
      description: "Reverse every k consecutive nodes (LeetCode 25).",
      language: "javascript",
      approach: "iterative groups",
      code: `function reverseKGroup(head, k) {
  const dummy = new ListNode(0, head);
  let groupPrev = dummy;

  while (true) {
    let kth = groupPrev;
    for (let i = 0; i < k; i++) {
      kth = kth?.next;
      if (!kth) return dummy.next;
    }

    const groupNext = kth.next;
    let prev = groupNext;
    let current = groupPrev.next;

    while (current !== groupNext) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    const temp = groupPrev.next;
    groupPrev.next = prev;
    groupPrev = temp;
  }
}`,
      example: {
        input: "head = 1→2→3→4→5, k = 2",
        output: "2→1→4→3→5"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["reverse", "k-group", "leetcode-25"]
    }
  ],
  relatedAlgorithms: ["linked-list-basics", "floyd-cycle"],
  leetcodeTags: ["linked-list"],
  order: 2
};