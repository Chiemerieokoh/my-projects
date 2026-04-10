let secretNumber;
let lives;
let score;

function startGame() {
    document.getElementById("menu").classList.remove("active");
    document.getElementById("game").classList.add("active");

    restartGame();
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    lives = 3;
    score = 0;

    document.getElementById("lives").innerHTML = lives;
    document.getElementById("score").innerHTML = score;
    document.getElementById("result").innerHTML = "";
    document.getElementById("guessInput").value = "";
}

function goToMenu() {
    document.getElementById("game").classList.remove("active");
    document.getElementById("menu").classList.add("active");
}

function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);
    let result = document.getElementById("result");

    if (!guess) {
        result.innerHTML = "⚠️ Enter a number!";
        return;
    }

    if (guess === secretNumber) {
        score += 10;
        result.innerHTML = "🎉 Correct! You win!";
        document.getElementById("correctSound").play();
    } else {
        lives--;

        if (guess > secretNumber) {
            result.innerHTML = "📉 Too high! Try again.";
        } else {
            result.innerHTML = "📈 Too low! Try again.";
        }

        document.getElementById("wrongSound").play();
    }

    document.getElementById("lives").innerHTML = lives;
    document.getElementById("score").innerHTML = score;

    // Game Over
    if (lives === 0) {
        result.innerHTML = "💀 Game Over! Number was " + secretNumber;
    }
}

function suggestNumber() {
    let result = document.getElementById("result");

    if (lives === 0) {
        result.innerHTML = "Game over! Restart.";
        return;
    }

    let hint;

    if (secretNumber <= 5) {
        hint = Math.floor(Math.random() * 5) + 1;
    } else {
        hint = Math.floor(Math.random() * 5) + 6;
    }

    score -= 2; // penalty for hint

    document.getElementById("score").innerHTML = score;
    result.innerHTML = "💡 Try around: " + hint;
}