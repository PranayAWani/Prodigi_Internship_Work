// Variables to track game state and scores
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let playerXScore = 0;
let playerOScore = 0;

// Function to handle player moves
function handleMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        renderBoard();
        const winner = checkWinner();
        if (winner) {
            updateScore(winner);
            alert(`${winner} wins!`);
            setTimeout(resetGame, 1000); // Reset game after 1 second
        } else if (!board.includes('')) {
            alert("It's a draw!");
            setTimeout(resetGame, 1000); // Reset game after 1 second
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch players
        }
    }
}

// Function to check for a winner
function checkWinner() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; // Return the winning player
        }
    }

    return null; // No winner
}

// Function to update the scores
function updateScore(winner) {
    if (winner === 'X') {
        playerXScore++;
        document.getElementById('playerXScore').textContent = `Player X: ${playerXScore}`;
    } else if (winner === 'O') {
        playerOScore++;
        document.getElementById('playerOScore').textContent = `Player O: ${playerOScore}`;
    }
}

// Function to reset the game
function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    renderBoard();
}

// Function to render the Tic-Tac-Toe board
function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.textContent = cell;
        cellElement.addEventListener('click', () => handleMove(index));
        boardElement.appendChild(cellElement);
    });
}

renderBoard();
