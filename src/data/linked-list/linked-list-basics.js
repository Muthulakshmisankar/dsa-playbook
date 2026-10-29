export default {
  id: "linked-list-basics",
  name: "Linked List Basics",
  category: "linked-list",
  description:
    "Nodes connected by pointers: each node holds a value and a next pointer. Insert and delete in O(1) at known position, but no random access.",
  story: "Hop from node to node using .next.",
  difficulty: "easy",
  keywords: ["linked list", "node", "next", "insert", "delete", "traverse"],
  triggers: ["insert/delete at head", "sequential access", "no random access needed"],
  timeComplexity: "O(1) insert/delete at head, O(n) access",
  spaceComplexity: "O(n)",
  patterns: ["dummy head", "traverse with current pointer"],
  notes: [
    "Use a dummy node to simplify insert/delete at head",
    "No random access — must traverse from head",
    "Careful with null checks — common source of bugs"
  ],
  programs: [
    {
      id: "node-and-list",
      title: "ListNode + Basic Operations",
      description: "Insert, delete, and traverse.",
      language: "javascript",
      approach: "iterative",
      code: `class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() { this.head = null; }

  traverse() {
    const result = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  insert(position, value) {
    const newNode = new ListNode(value);
    if (position <= 0 || this.head === null) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let index = 0;
    while (current.next !== null && index < position - 1) {
      current = current.next;
      index++;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  delete(value) {
    if (this.head === null) return false;
    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }
    let current = this.head;
    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }
    if (current.next === null) return false;
    current.next = current.next.next;
    return true;
  }
}`,
      example: {
        input: "insert [1,2,3], delete 2",
        output: "[1,3]"
      },
      complexity: { time: "O(n) insert/delete", space: "O(n)" },
      tags: ["linked list", "basics"]
    },
    {
      id: "dummy-head",
      title: "Dummy Head Pattern",
      description: "Use a fake head to simplify edge cases.",
      language: "javascript",
      approach: "dummy node",
      code: `function removeElements(head, val) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;

  while (current.next !== null) {
    if (current.next.value === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return dummy.next;
}`,
      example: {
        input: "head = [1,2,6,3,4,5,6], val = 6",
        output: "[1,2,3,4,5]"
      },
      complexity: { time: "O(n)", space: "O(1)" },
      tags: ["dummy head", "remove"]
    }
  ],
  relatedAlgorithms: ["reverse-list", "merge-sorted-lists"],
  leetcodeTags: ["linked-list"],
  order: 1
};