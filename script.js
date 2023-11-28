document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("game-board");
    const cells = [];

    // Create the Tic Tac Toe board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-index", i);
        cell.addEventListener("click", () => handleCellClick(i));
        cells.push(cell);
        board.appendChild(cell);
    }

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    function handleCellClick(index) {
        if (gameBoard[index] === "" && !isGameFinished()) {
            gameBoard[index] = currentPlayer;
            cells[index].innerText = currentPlayer;
            cells[index].classList.add(currentPlayer === "X" ? "x" : "o");
            currentPlayer = currentPlayer === "X" ? "O" : "X";

            if (isGameFinished()) {
                setTimeout(() => {
                    alert("Game Over! Winner: " + (currentPlayer === "X" ? "O" : "X") + "\nRefresh the page to play again.");
                }, 100);
            }
        }
    }

    function isGameFinished() {
        // Check for a winner
        for (const line of [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ]) {
            const [a, b, c] = line;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return true; // We have a winner
            }
        }

        // Check for a tie
        if (!gameBoard.includes("")) {
            setTimeout(() => {
                alert("It's a tie!\nRefresh the page to play again.");
            }, 100);
            return true; // It's a tie
        }

        return false; // The game is not finished
    }
});
