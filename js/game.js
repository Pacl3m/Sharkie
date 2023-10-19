let canvas;
let world;
let keyboard = new Keyboard();
let dKeyLocked = false;
let isPaused = false;
let restart = false;
let mute = false;
let fullscreenActive = false;

// let game_sound = new Audio('audio/shortBackgroundSound.mp3');


function init() {
    // playBackgroundSound();
    loadLevel1();
    document.getElementById('content').innerHTML = /*html*/`
        <div class="panelTop">
                    <button onclick="reloadPage()" id="homeButton" class="smallActionButton homeButton"></button>
                    <button onclick="toggleFullscreen()" id="fullScreenButton" class="smallActionButton fullScreen"></button>
                    <button onclick="muteGame()" id="muteButton" class="smallActionButton volume"></button>
                    <button onclick="pauseGame()" id="pauseButton" class="smallActionButton pause"></button>
                </div>
                <div id="gameoverOverlay"></div>
                <div id="winningOverlay"></div>
                <button id="tryAgain" class="actionButton" onclick="restartGame()"></button>
                <button id="backToMenu" class="menuButton" onclick="reloadPage()">Back to Menu</button>
                <div class="panelBottom ">
                    <div class="arrowsBox">
                        <div class="arrowsTop">
                            <button id="buttonUp" class="smallActionButton buttonUp"></button>
                        </div>
                        <div class="arrowsBottom">
                            <button id="buttonLeft" class="smallActionButton buttonLeft"></button>
                            <button id="buttonDown" class="smallActionButton buttonDown"></button>
                            <button id="buttonRight" class="smallActionButton buttonRight"></button>
                        </div>
                    </div>
                    <button id="buttonSpace" class="smallActionButton buttonSpace"><h3>SPACE BAR</h3></button>
                    <button id="buttonD" class="smallActionButton buttonD"><h3>D</h3></button>
                </div>
                <canvas id="canvas" width="720" height="480"></canvas>`
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    setButtons();
}

function showInstruction() {
    document.getElementById('content').innerHTML = /*html*/`
    <div class="panelTop">
        <button onclick="reloadPage()" id="homeButton" class="smallActionButton homeButton"></button>
    </div>
    <div class="instructionContent">
        <div class="instructionRow"><div class="arrowKeyImage keyImage"></div><h2>MOVE SHARKIE</h2></div>
        <div class="instructionRow"><div class="spaceKeyImage keyImage"></div><h2>FIN SLAP</h2></div>
        <div class="instructionRow"><div class="dKeyImage keyImage"></div><h2>BUBBLE ATTACK</h2></div>
    </div>
    `
}

function toggleFullscreen() {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        fullscreenActive = false;
        // Nachdem der Vollbildmodus deaktiviert wurde, passe die Größe des Canvas an
        // resizeCanvas();
    } else {
        // ...
        if (content.requestFullscreen) {
            content.requestFullscreen();
        } else if (content.webkitRequestFullscreen) {
            content.webkitRequestFullscreen();
        }
        fullscreenActive = true;
        // Wenn der Vollbildmodus aktiviert wird, passe ebenfalls die Größe des Canvas an
        // resizeCanvas();
    }
    checkFullscreen();
}

function checkFullscreen() {
    if (fullscreenActive) {
        canvas.classList.add('canvasFullscreen');
    } else {
        canvas.classList.remove('canvasFullscreen');
    }
}

document.addEventListener('fullscreenchange', (event) => {
    if (!document.fullscreenElement) {
        fullscreenActive = false;
        checkFullscreen();
    }
});

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
    checkFullscreen();
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
            handleFinSlap();
        };
        if (event.key === 'd' && !dKeyLocked) {
            handleBubbleAttack();
        };
    }

});


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
        if (event.key === ' ') {
            event.preventDefault();
        };
    }
})


function setButtons() {
    buttonUp.addEventListener('touchstart', (event) => {
        keyboard.up = true;
        event.preventDefault();
    });
    buttonLeft.addEventListener('touchstart', (event) => {
        keyboard.left = true;
        event.preventDefault();
    });
    buttonDown.addEventListener('touchstart', (event) => {
        keyboard.down = true;
        event.preventDefault();
    });
    buttonRight.addEventListener('touchstart', (event) => {
        keyboard.right = true;
        event.preventDefault();
    });
    buttonSpace.addEventListener('touchstart', (event) => {
        handleFinSlap();
        event.preventDefault();
    });
    buttonD.addEventListener('touchstart', (event) => {
        if (!dKeyLocked) {
            handleBubbleAttack();
        }
        event.preventDefault();
    });

    buttonUp.addEventListener('touchend', (event) => {
        keyboard.up = false;
        event.preventDefault();
    });
    buttonLeft.addEventListener('touchend', (event) => {
        keyboard.left = false;
        event.preventDefault();
    });
    buttonDown.addEventListener('touchend', (event) => {
        keyboard.down = false;
        event.preventDefault();
    });
    buttonRight.addEventListener('touchend', (event) => {
        keyboard.right = false;
        event.preventDefault();
    });
    // buttonSpace.addEventListener('touchend', (event) => {
    //     // Hier kannst du den Code für das "Berühren" des Buttons ausführen
    //     keyboard.space = false;
    //     event.preventDefault(); // Verhindert das Scrollen der Seite beim Berühren des Buttons
    // });
    // buttonD.addEventListener('touchend', (event) => {
    //     // Hier kannst du den Code für das "Berühren" des Buttons ausführen
    //     keyboard.D = false;
    //     event.preventDefault(); // Verhindert das Scrollen der Seite beim Berühren des Buttons
    // });
}


function handleBubbleAttack() {
    keyboard.D = true;
    dKeyLocked = true;
    setTimeout(() => {
        keyboard.D = false;
    }, 500);
    setTimeout(() => {
        dKeyLocked = false;
    }, 3000); // pause between the bubble Attack
}


function handleFinSlap() {
    keyboard.space = true;
    event.preventDefault();
    setTimeout(() => {
        keyboard.space = false;
    }, 300);
}