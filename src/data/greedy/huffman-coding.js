export default {
  id: "huffman-coding",
  name: "Huffman Coding",
  category: "greedy",
  description:
    "Build an optimal prefix-free binary encoding by repeatedly merging the two lowest-frequency nodes into a new parent. Uses a min-heap.",
  story: "Merge two rarest symbols; repeat until one tree remains.",
  difficulty: "hard",
  keywords: ["huffman", "coding", "compression", "prefix-free", "heap"],
  triggers: ["optimal prefix code", "compression", "variable-length encoding"],
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  patterns: ["min-heap merge", "tree build"],
  notes: [
    "Min-heap of (frequency, node)",
    "Pop two lowest → merge → push parent back",
    "Left = 0, right = 1; depth = code length",
    "Optimal prefix-free code — no encoded symbol is a prefix of another"
  ],
  programs: [
    {
      id: "huffman-build",
      title: "Build Huffman Tree & Codes",
      description: "From frequency map to encoded map.",
      language: "javascript",
      approach: "min-heap merge",
      code: `class HuffNode {
  constructor(freq, ch = null, left = null, right = null) {
    this.freq = freq;
    this.ch = ch;
    this.left = left;
    this.right = right;
  }
}

function buildHuffman(freqMap) {
  const heap = new Heap((a, b) => a.freq - b.freq);

  for (const [ch, freq] of Object.entries(freqMap)) {
    heap.push(new HuffNode(freq, ch));
  }

  while (heap.size() > 1) {
    const a = heap.pop();
    const b = heap.pop();
    heap.push(new HuffNode(a.freq + b.freq, null, a, b));
  }

  const root = heap.pop();
  const codes = {};

  function dfs(node, code) {
    if (!node) return;
    if (node.ch !== null) {
      codes[node.ch] = code || "0";
      return;
    }
    dfs(node.left, code + "0");
    dfs(node.right, code + "1");
  }

  dfs(root, "");
  return { root, codes };
}`,
      example: {
        input: "{ a:5, b:9, c:12, d:13, e:16, f:45 }",
        output: "{ f:'0', c:'100', d:'101', a:'1100', b:'1101', e:'111' }"
      },
      complexity: { time: "O(n log n)", space: "O(n)" },
      tags: ["huffman", "heap", "compression"]
    },
    {
      id: "huffman-encode",
      title: "Encode a String with Huffman Codes",
      description: "Get bit string using Huffman codes.",
      language: "javascript",
      approach: "greedy encode",
      code: `function encodeWithHuffman(text) {
  const freq = {};
  for (const ch of text) freq[ch] = (freq[ch] || 0) + 1;

  const { codes } = buildHuffman(freq);
  let encoded = "";
  for (const ch of text) encoded += codes[ch];
  return encoded;
}`,
      example: {
        input: '"hello"',
        output: "variable-length bitstring"
      },
      complexity: { time: "O(n)", space: "O(n)" },
      tags: ["encode", "huffman"]
    }
  ],
  relatedAlgorithms: ["heap-basics", "fractional-knapsack"],
  leetcodeTags: ["greedy", "heap"],
  order: 4
};