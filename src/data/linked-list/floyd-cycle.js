export default {
  id: "floyd-cycle",
  name: "Floyd's Cycle Detection",
  category: "linked-list",
  description:
    "Slow pointer +1, fast pointer +2. If they meet, there's a cycle. Find the meeting node in O(n) time, O(1) space.",
  story: "Slow and fast pointers meet inside the loop.",
  difficulty: "medium",
  keywords: ["cycle", "loop", "tortoise", "hare", "floyd", "linked list"],
  triggers: ["detect cycle", "find loop entry", "middle of list"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(1)",
  patterns: ["slow/fast pointers", "two-phase meeting"],
  notes: [
    "Meeting point ≠ entry point! Need second phase to find entry",
    "Phase 2: reset slow to head; move both by +1 until meet",
    "Same technique finds middle (fast hits end, slow at mid)"
  ],
  programs: [
    {
      id: "has-cycle",
      title: "Detect Cycle",
      description: "Return true if list has a cycle.",
      language: "javascript",
      approach: "slow/fast",
      code: `function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}`,
      example: {
        input: "1→2→3→4→2 (back to node 2)",
        output: "true"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["cycle", "fast-slow"]
    },
    {
      id: "find-cycle-entry",
      title: "Find Cycle Entry",
      description: "Return the node where cycle begins.",
      language: "javascript",
      approach: "two-phase",
      code: `function detectCycle(head) {
  let slow = head, fast = head;

  // Phase 1: find meeting point
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }

  if (fast === null || fast.next === null) return null;

  // Phase 2: find entry
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}`,
      example: {
        input: "1→2→3→4→2, cycle starts at 2",
        output: "node with value 2"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["cycle", "entry", "leetcode-142"]
    },
    {
      id: "middle-node",
      title: "Find Middle Node",
      description: "Return the middle (2nd middle for even length).",
      language: "javascript",
      approach: "slow/fast",
      code: `function findMiddle(head) {
  let slow = head, fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}`,
      example: {
        input: "1→2→3→4→5",
        output: "node with value 3"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["middle", "fast-slow"]
    }
  ],
  relatedAlgorithms: ["reverse-list", "merge-sorted-lists"],
  leetcodeTags: ["two-pointers", "linked-list"],
  order: 3
};