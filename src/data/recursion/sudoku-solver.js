export default {
  id: "sudoku-solver",
  name: "Sudoku Solver",
  category: "recursion",
  description:
    "Fill a 9×9 grid so each row, column, and 3×3 box contains digits 1–9. Backtracking with constraint sets.",
  story: "Find empty cell, try 1–9, recurse, undo on failure.",
  difficulty: "hard",
  keywords: ["sudoku", "constraint", "backtracking", "grid", "9x9"],
  triggers: ["fill valid arrangement", "constraint satisfaction"],
  timeComplexity: "Exponential (bounded by 9x9 grid)",
  spaceComplexity: "O(1)",
  patterns: ["row/col/box sets", "try 1-9 per empty cell"],
  notes: [
    "Pre-populate row/col/box sets with existing digits",
    "Each empty cell: try 1–9; skip if already in row/col/box",
    "Placement + recursion + undo = backtracking template"
  ],
  programs: [
    {
      id: "sudoku-solve",
      title: "Sudoku Solver",
      description: "Fill the grid in place. Assumes puzzle has a solution.",
      language: "javascript",
      approach: "backtracking with sets",
      code: `function solveSudoku(board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const v = board[r][c];
      if (v !== ".") {
        rows[r].add(v);
        cols[c].add(v);
        boxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)].add(v);
      }
    }
  }

  function backtrack() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] !== ".") continue;

        const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        for (let num = 1; num <= 9; num++) {
          const ch = String(num);
          if (rows[r].has(ch) || cols[c].has(ch) || boxes[b].has(ch)) continue;

          board[r][c] = ch;
          rows[r].add(ch);
          cols[c].add(ch);
          boxes[b].add(ch);

          if (backtrack()) return true;

          board[r][c] = ".";
          rows[r].delete(ch);
          cols[c].delete(ch);
          boxes[b].delete(ch);
        }
        return false;
      }
    }
    return true;
  }

  backtrack();
  return board;
}`,
      example: {
        input:
          '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],...]',
        output: "Fully solved 9×9 grid"
      },
      complexity: { time: "Exponential (bounded)", space: "O(1)" },
      tags: ["sudoku", "backtracking", "constraint"]
    }
  ],
  relatedAlgorithms: ["n-queens"],
  leetcodeTags: ["backtracking"],
  order: 6
};