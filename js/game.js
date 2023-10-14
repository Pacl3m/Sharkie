let canvas;
let world;
let keyboard = new Keyboard();
let dKeyLocked = false;
let isPaused = false;
let restart = false;


function restartGame() {
    
    // restart = true;

    // // if (this) {
    // //     this = null;
    // // }

    // init();
    // setTimeout(() => {
    //     restart = false;
    // }, 1000);

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    init();
}

function init() {
    isPaused = false;
    document.getElementById('content').innerHTML = /*html*/
        `<div class="panelTop">
            <button onclick="world.pauseGame()" id="pause" class="smallActionButton"></button>
        </div>
        <div id="gameoverOverlay"></div>
        <button id="tryAgain" class="actionButton" onclick="restartGame()"></button>
        <div class="panelBottom"></div>
        <canvas id="canvas" width="720" height="480"></canvas>`
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


window.addEventListener('keydown', (event) => {
    if (!isPaused) {
        // console.log(event.key);
        if (event.key === 'ArrowLeft') {
            keyboard.left = true;
        };
        if (event.key === 'ArrowRight') {
            keyboard.right = true;
        };
        if (event.key === 'ArrowUp') {
            keyboard.up = true;
        };
        if (event.key === 'ArrowDown') {
            keyboard.down = true;
        };
        if (event.key === ' ') {
            keyboard.space = true;
            setTimeout(() => {
                keyboard.space = false;
            }, 300);
        };
        if (event.key === 'd' && !dKeyLocked) {
            keyboard.D = true;
            dKeyLocked = true;
            setTimeout(() => {
                keyboard.D = false;
            }, 500);
            setTimeout(() => {
                dKeyLocked = false;
            }, 2500); // pause between the bubble Attack
        };
    }

})


window.addEventListener('keyup', (event) => {
    if (!isPaused) {
        // console.log(event.key);
        if (event.key === 'ArrowLeft') {
            keyboard.left = false;
        };
        if (event.key === 'ArrowRight') {
            keyboard.right = false;
        };
        if (event.key === 'ArrowUp') {
            keyboard.up = false;
        };
        if (event.key === 'ArrowDown') {
            keyboard.down = false;
        };
    }
})