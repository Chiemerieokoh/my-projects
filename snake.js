let canvas;
let ctx;

let snake;
let dx;
let dy;
let gameRunning = false;

window.onload = function () {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
};

function startGame() {
    snake = [{ x: 150, y: 150 }];
    dx = 15;
    dy = 0;
    gameRunning = true;

    gameLoop();
}

function gameLoop() {
    if (!gameRunning) return;

    update();
    draw();

    setTimeout(gameLoop, 200);
}

function update() {
    let head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    };

    snake.unshift(head);
    snake.pop();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "green";
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, 15, 15);
    }
}

function move(dir) {
    if (dir === "up") {
        dx = 0; dy = -15;
    } else if (dir === "down") {
        dx = 0; dy = 15;
    } else if (dir === "left") {
        dx = -15; dy = 0;
    } else if (dir === "right") {
        dx = 15; dy = 0;
    }
} 