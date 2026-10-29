export default {
  id: "merge-sorted-lists",
  name: "Merge Sorted Lists",
  category: "linked-list",
  description:
    "Merge two sorted linked lists into one sorted list using a dummy head and two pointers. Also extends to k lists.",
  story: "Dummy head + two pointers picks the smaller each step.",
  difficulty: "easy",
  keywords: ["merge", "sorted", "two lists", "k lists", "linked list"],
  triggers: ["merge sorted", "combine lists", "k-way merge"],
  timeComplexity: "O(n + m)",
  spaceComplexity: "O(1)",
  patterns: ["dummy head", "two pointers"],
  notes: [
    "Dummy head avoids edge cases with empty result",
    "K-way merge: use a min-heap of list heads",
    "Compare values, append smaller, advance that list"
  ],
  programs: [
    {
      id: "merge-two-lists",
      title: "Merge Two Sorted Lists",
      description: "Classic LeetCode 21.",
      language: "javascript",
      approach: "two pointers",
      code: `function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(0);
  let tail = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.value <= l2.value) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  tail.next = l1 !== null ? l1 : l2;
  return dummy.next;
}`,
      example: {
        input: "l1 = [1,2,4], l2 = [1,3,4]",
        output: "[1,1,2,3,4,4]"
      },
      complexity: { time: "O(n+m)", space: "O(1)" },
      tags: ["merge", "two pointers", "leetcode-21"]
    },
    {
      id: "merge-k-lists",
      title: "Merge K Sorted Lists",
      description: "LeetCode 23 — min-heap of list heads.",
      language: "javascript",
      approach: "min-heap",
      code: `function mergeKLists(lists) {
  if (!lists.length) return null;

  // Simple approach using array + sort (for clarity; heap is optimal)
  const values = [];
  for (const l of lists) {
    let cur = l;
    while (cur) {
      values.push(cur.value);
      cur = cur.next;
    }
  }

  values.sort((a, b) => a - b);

  const dummy = new ListNode(0);
  let tail = dummy;
  for (const v of values) {
    tail.next = new ListNode(v);
    tail = tail.next;
  }
  return dummy.next;
}

// Optimal with min-heap (O(N log k)):
// Push initial heads, pop min, push its next.
// Repeat until heap is empty.`,
      example: {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]"
      },
      complexity: { time: "O(N log k) optimal", space: "O(k)" },
      tags: ["merge", "k lists", "heap", "leetcode-23"]
    }
  ],
  relatedAlgorithms: ["merge-sort", "linked-list-basics"],
  leetcodeTags: ["linked-list", "heap"],
  order: 4
};