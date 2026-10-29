export default {
  id: "trie",
  name: "Trie (Prefix Tree)",
  category: "trees",
  description:
    "Tree where each node is a character. Shares prefixes, so insert/search are O(L). Powers autocomplete, prefix matching, and word dictionaries.",
  story: "Each path from root spells a word — shared prefixes share nodes.",
  difficulty: "medium",
  keywords: ["trie", "prefix", "autocomplete", "dictionary", "string"],
  triggers: ["prefix search", "autocomplete", "word dictionary", "starts with"],
  timeComplexity: "O(L) per operation",
  spaceComplexity: "O(total chars)",
  patterns: ["children map", "isEndOfWord flag", "DFS for autocomplete"],
  notes: [
    "Use Map or object for children — Map safer against prototype pollution",
    "isEndOfWord matters — 'app' vs 'apple' both valid prefixes",
    "Autocomplete: traverse to prefix node, then DFS all words below"
  ],
  programs: [
    {
      id: "trie-basic",
      title: "Trie: Insert, Search, startsWith",
      description: "Core operations.",
      language: "javascript",
      approach: "class-based",
      code: `class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() { this.root = new TrieNode(); }

  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
      node = node.children.get(ch);
    }
    node.isEndOfWord = true;
  }

  search(word) {
    const node = this._traverse(word);
    return node !== null && node.isEndOfWord;
  }

  startsWith(prefix) {
    return this._traverse(prefix) !== null;
  }

  _traverse(str) {
    let node = this.root;
    for (const ch of str) {
      if (!node.children.has(ch)) return null;
      node = node.children.get(ch);
    }
    return node;
  }
}`,
      example: {
        input: "insert 'apple', search 'app'",
        output: "false"
      },
      complexity: { time: "O(L)", space: "O(total chars)" },
      tags: ["trie", "prefix"]
    },
    {
      id: "trie-autocomplete",
      title: "Trie Autocomplete",
      description: "Get all words starting with a prefix.",
      language: "javascript",
      approach: "trie + DFS",
      code: `class Trie {
  // ... insert/search from previous example

  autocomplete(prefix) {
    const node = this._traverse(prefix);
    if (!node) return [];
    const results = [];
    this._dfs(node, prefix, results);
    return results;
  }

  _dfs(node, path, results) {
    if (node.isEndOfWord) results.push(path);
    for (const [ch, child] of node.children) {
      this._dfs(child, path + ch, results);
    }
  }
}`,
      example: {
        input: "insert ['app','apple','apply','apt'], autocomplete('app')",
        output: "['app', 'apple', 'apply']"
      },
      complexity: { time: "O(P + output)", space: "O(output)" },
      tags: ["trie", "autocomplete"]
    }
  ],
  relatedAlgorithms: ["bst-operations", "grouping"],
  leetcodeTags: ["trie"],
  order: 5
};