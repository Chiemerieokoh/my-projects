let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

let xScore = 0;
let oScore = 0;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// 🎮 Start Game
function startGame() {
    document.getElementById("menu").classList.remove("active");
    document.getElementById("game").classList.add("active");
}

// 🏠 Go to Menu
function goToMenu() {
    document.getElementById("game").classList.remove("active");
    document.getElementById("menu").classList.add("active");
}

// ❌⭕ Make Move
function makeMove(cell, index) {

    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    cell.innerHTML = currentPlayer;

    document.getElementById("clickSound").play();

    checkWinner();

    if (gameActive) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        document.getElementById("currentPlayer").innerHTML = currentPlayer;
    }
}

// 🏆 Check Winner
function checkWinner() {

    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;

        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            gameActive = false;

            document.getElementById("result").innerHTML =
                "🎉 Player " + board[a] + " Wins!";

            document.getElementById("winSound").play();

            if (board[a] === "X") {
                xScore++;
                document.getElementById("xScore").innerHTML = xScore;
            } else {
                oScore++;
                document.getElementById("oScore").innerHTML = oScore;
            }

            return;
        }
    }

    // 🤝 Draw Check
    if (!board.includes("")) {
        gameActive = false;
        document.getElementById("result").innerHTML = "🤝 It's a Draw!";
    }
}

// 🔁 Restart Game
function restartGame() {

    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";

    document.getElementById("currentPlayer").innerHTML = currentPlayer;
    document.getElementById("result").innerHTML = "";

    let cells = document.getElementsByClassName("cell");

    for (let cell of cells) {
        cell.innerHTML = "";
    }
}