let secretNumber;
let attempts;
let gameActive = false;
let isPremiumUnlocked = false;

// --- Main Menu ---
function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameActive = true;
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("result").textContent = "";
    document.getElementById("guess-input").value = "";
}

// --- Music ---
function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) music.play();
    else music.pause();
}

// --- Gameplay ---
function checkGuess() {
    if (!gameActive) return;

    let guess = Number(document.getElementById("guess-input").value);
    if (!guess) return;

    attempts++;
    if (guess === secretNumber) {
        document.getElementById("result").textContent = "🎉 Correct! Number was " + secretNumber;
        gameActive = false;
    } else if (guess < secretNumber) {
        document.getElementById("result").textContent = "⬆ Too low!";
    } else {
        document.getElementById("result").textContent = "⬇ Too high!";
    }
}

// --- Reset / Menu ---
function resetGame() {
    startGame();
}

function backToMenu() {
    document.getElementById("game-container").style.display = "none";
    document.getElementById("main-menu").style.display = "block";
}

// --- Premium ---
function unlockPremium() {
    isPremiumUnlocked = true;
    alert("Premium Features Unlocked! 🎯");
    // Example: extra hints, or auto reveal hints
}