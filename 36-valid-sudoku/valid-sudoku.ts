function isValidSudoku(board: string[][]): boolean {
    const rows = new Map<number, Set<number>>();
    const cols = new Map<number, Set<number>>();
    const squares = new Map<number, Set<number>>();;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const cell = Number(board[i][j]);
            const box = Math.floor(i / 3) * 3 + Math.floor(j / 3)
            if (isNaN(cell)) continue;
            if (!rows.has(i)) rows.set(i, new Set<number>())
            if (!cols.has(j)) cols.set(j, new Set<number>())
            if (!squares.has(box)) squares.set(box, new Set<number>())

            if (rows.get(i)!.has(cell) || cols.get(j)!.has(cell) || squares.get(box)!.has(cell)) {
                return false;
            }
            rows.get(i)!.add(cell)
            cols.get(j)!.add(cell)
            squares.get(box)!.add(cell)
        }
    }

    return true;
};