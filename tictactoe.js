let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "❌";
let gameActive = true;
let isPremiumUnlocked = false; // AI locked by default
let gameMode = ""; // "2P" or "AI"

// --- Main Menu ---
function startGame(mode) {
    gameMode = mode;
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game-container").style.display = "block";

    if (mode === "AI" && !isPremiumUnlocked) {
        alert("AI Mode is Premium! Unlock to play against AI.");
        startGame("2P");
    }
}

function backToMenu() {
    document.getElementById("game-container").style.display = "none";
    document.getElementById("main-menu").style.display = "block";
    resetGame();
}

// --- Background Music ---
function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) music.play();
    else music.pause();
}

// --- Gameplay ---
function makeMove(index) {
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].textContent = currentPlayer;

    if (checkWinner()) {
        document.getElementById("status").textContent = currentPlayer + " wins! 🎉";
        gameActive = false;
        return;
    }

    if (!board.includes("")) {
        document.getElementById("status").textContent = "Draw! 🤝";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "❌" ? "⭕" : "❌";
    document.getElementById("status").textContent = "Current Player: " + currentPlayer;

    if (gameMode === "AI" && isPremiumUnlocked && currentPlayer === "⭕") {
        setTimeout(aiMove, 300);
    }
}

function checkWinner() {
    const winCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    return winCombos.some(combo => combo.every(i => board[i] === currentPlayer));
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "❌";
    gameActive = true;
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) cells[i].textContent = "";
    document.getElementById("status").textContent = "Current Player: ❌";
}

// --- Premium AI Unlock ---
function unlockPremium() {
    isPremiumUnlocked = true;
    alert("AI Opponent unlocked! 🤖");
}

// --- Simple AI ---
function aiMove() {
    if (!gameActive) return;
    let empty = board.map((v,i)=>v===""?i:null).filter(v=>v!==null);
    let choice = empty[Math.floor(Math.random()*empty.length)];
    makeMove(choice);
}