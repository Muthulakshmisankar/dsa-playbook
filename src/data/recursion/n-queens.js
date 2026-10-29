export default {
  id: "n-queens",
  name: "N-Queens",
  category: "recursion",
  description:
    "Place N queens on an N×N chessboard so no two attack each other. Classic constraint-satisfaction backtracking problem.",
  story: "One queen per row; track cols and diagonals.",
  difficulty: "hard",
  keywords: ["n-queens", "chess", "constraint", "backtracking", "diagonal"],
  triggers: ["place queens", "valid arrangement", "no two attack"],
  timeComplexity: "O(n!)",
  spaceComplexity: "O(n)",
  patterns: ["row-by-row placement", "col/diagonal sets"],
  notes: [
    "Place one queen per row — never need to check rows",
    "Track columns, diagonals (r-c) and anti-diagonals (r+c) with Sets",
    "N=8 has 92 solutions; N=4 has 2",
    "First solution can be found with early return"
  ],
  programs: [
    {
      id: "n-queens-all",
      title: "All Solutions",
      description: "Return all valid board arrangements.",
      language: "javascript",
      approach: "backtracking with sets",
      code: `function solveNQueens(n) {
  const result = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));

  const cols = new Set();
  const diag1 = new Set(); // r - c
  const diag2 = new Set(); // r + c

  function backtrack(row) {
    if (row === n) {
      result.push(board.map((r) => r.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;

      board[row][col] = "Q";
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);

      backtrack(row + 1);

      board[row][col] = ".";
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  }

  backtrack(0);
  return result;
}`,
      example: {
        input: "n = 4",
        output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]'
      },
      complexity: { time: "O(n!)", space: "O(n)" },
      tags: ["n-queens", "backtracking"]
    },
    {
      id: "n-queens-count",
      title: "Count Solutions",
      description: "Count valid arrangements without storing boards.",
      language: "javascript",
      approach: "backtracking + counter",
      code: `function totalNQueens(n) {
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();
  let count = 0;

  function backtrack(row) {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;

      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);

      backtrack(row + 1);

      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  }

  backtrack(0);
  return count;
}`,
      example: {
        input: "n = 8",
        output: "92"
      },
      complexity: { time: "O(n!)", space: "O(n)" },
      tags: ["n-queens", "count"]
    }
  ],
  relatedAlgorithms: ["sudoku-solver", "permutations"],
  leetcodeTags: ["backtracking"],
  order: 5
};