let canvas;
let world;
let keyboard = new Keyboard();
let dKeyLocked = false;
let isPaused = false;
let restart = false;
let mute = false;

// let game_sound = new Audio('audio/shortBackgroundSound.mp3');


function init() {
    // playBackgroundSound();
    loadLevel1();
    document.getElementById('content').innerHTML = /* html */
        `<div class="panelTop">
            <button onclick="reloadPage()" id="homeButton" class="smallActionButton homeButton"></button>
            <button onclick="toggleFullscreen()" id="fullScreenButton" class="smallActionButton fullScreen"></button>
            <button onclick="muteGame()" id="muteButton" class="smallActionButton volume"></button>
            <button onclick="pauseGame()" id="pauseButton" class="smallActionButton pause"></button>
        </div>
        <div id="gameoverOverlay"></div>
        <div id="winningOverlay"></div>
        <button id="tryAgain" class="actionButton" onclick="restartGame()"></button>
        <button id="backToMenu" class="menuButton" onclick="reloadPage()">Back to Menu</button>
        <div class="panelBottom"></div>
        <canvas id="canvas" width="720" height="480"></canvas>`
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function toggleFullscreen() {
    var canvas = document.getElementById('canvas'); // Hier die ID deines Canvas-Elements einfügen

    if (document.fullscreenElement || document.webkitFullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    } else {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen();
        } else if (canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen();
        }
    }
}

function clearAllIntervall() {
    for (let i = 0; i < 9999; i++) {
        window.clearInterval(i);
        window.clearTimeout(i);
    }
}

function restartGame() {
    isPaused = false;
    world.isPaused = false;
    clearAllIntervall();
    init();
}

function reloadPage() {
    location.reload();
}

function playBackgroundSound() {
    setInterval(() => {
        if (!mute) {
            world.game_sound.play();
        } else {
            world.game_sound.pause();
        }
    }, 500);
}

function muteGame() {
    if (!mute) {
        mute = true;
    } else {
        mute = false;
    }
    document.getElementById('muteButton').classList.toggle('mute');
}

function pauseGame() {
    if (world.isPaused) {
        document.getElementById('pauseButton').classList.toggle('play');
        world.isPaused = false;
        isPaused = false;
        world.draw();
        world.playBackgroundSound();
    } else {
        document.getElementById('pauseButton').classList.toggle('play');
        world.isPaused = true;
        isPaused = true;
        clearInterval(world.backgroundInterval);
        world.game_sound.pause();
    }
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
            }, 3000); // pause between the bubble Attack
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