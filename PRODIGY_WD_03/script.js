// Variables to track game state
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

// Function to handle player moves
function handleMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        renderBoard();
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch players
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
            alert(`${board[a]} wins!`);
            resetGame();
            return;
        }
    }

    if (!board.includes('')) {
        alert("It's a draw!");
        resetGame();
    }
}

// Function to reset the game
function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  renderBoard();
  updateStatus(); // Reset status display
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

// Initialize the game
renderBoard();
// Function to update status display
function updateStatus() {
  const statusElement = document.getElementById('status');
  statusElement.textContent = `Current Player: ${currentPlayer}`;
}

// Function to handle player moves
function handleMove(index) {
  if (board[index] === '') {
      board[index] = currentPlayer;
      renderBoard();
      checkWinner();
      updateStatus(); // Update status after each move
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch players
  }
}
