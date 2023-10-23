/**
 * Represents the main game.
 * @typedef {Object} Game
 * @property {HTMLElement} canvas - The game canvas.
 * @property {World} world - The game world.
 * @property {Keyboard} keyboard - The game keyboard.
 * @property {boolean} dKeyLocked - Indicates if the 'D' key is locked.
 * @property {boolean} isPaused - Indicates if the game is paused.
 * @property {boolean} restart - Indicates if the game should restart.
 * @property {boolean} mute - Indicates if the game audio is muted.
 * @property {boolean} fullscreenActive - Indicates if fullscreen mode is active.
 */
let canvas;
let world;
let keyboard = new Keyboard();
let dKeyLocked = false;
let isPaused = false;
let restart = false;
let mute = false;
let fullscreenActive = false;


/**
 * Initializes the game.
 * @function
 * @returns {void}
 */
function init() {
    loadLevel1();
    document.getElementById('content').innerHTML = returnContentHtml();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    setButtons();
}

/**
 * Returns the HTML content for the game.
 * @function
 * @returns {string} The HTML content.
 */
function returnContentHtml() {
    return /*html*/`
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
};

/**
 * Shows the game instructions.
 * @function
 * @returns {void}
 */
function showInstruction() {
    document.getElementById('content').innerHTML = /*html*/`
    <div class="panelTop">
        <button onclick="reloadPage()" id="homeButton" class="smallActionButton homeButton"></button>
    </div>
    <div class="instructionContent">
        <div class="instructionRow"><div class="arrowKeyImage keyImage"></div><h2>MOVE SHARKIE</h2></div>
        <div class="instructionRow"><div class="spaceKeyImage keyImage"></div><h2>FIN SLAP</h2></div>
        <div class="instructionRow"><div class="dKeyImage keyImage"></div><h2>BUBBLE ATTACK</h2></div>
        <a href="https://www.flaticon.com/de/kostenlose-icons/home-button" title="home button Icons">Home button Icons erstellt von hqrloveq - Flaticon</a>
    </div> `
};

/**
 * Toggles fullscreen mode.
 * @function
 * @returns {void}
 */
function toggleFullscreen() {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        fullscreenActive = false;
    } else {
        if (content.requestFullscreen) {
            content.requestFullscreen();
        } else if (content.webkitRequestFullscreen) {
            content.webkitRequestFullscreen();
        }
        fullscreenActive = true;
    }
    checkFullscreen();
}


/**
 * Checks the fullscreen status.
 * @function
 * @returns {void}
 */
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

/**
 * Clears all intervals and timeouts.
 * @function
 * @returns {void}
 */
function clearAllIntervall() {
    for (let i = 0; i < 9999; i++) {
        window.clearInterval(i);
        window.clearTimeout(i);
    }
}

/**
 * Restarts the game.
 * @function
 * @returns {void}
 */
function restartGame() {
    isPaused = false;
    world.isPaused = false;
    clearAllIntervall();
    init();
    checkFullscreen();
}

/**
 * Reloads the page.
 * @function
 * @returns {void}
 */
function reloadPage() {
    location.reload();
}

/**
 * Plays the background sound.
 * @function
 * @returns {void}
 */
function playBackgroundSound() {
    setInterval(() => {
        if (!mute) {
            world.game_sound.play();
        } else {
            world.game_sound.pause();
        }
    }, 500);
}

/**
 * Mutes the game audio.
 * @function
 * @returns {void}
 */
function muteGame() {
    mute = !mute;
    document.getElementById('muteButton').classList.toggle('mute');
}

/**
 * Pauses or unpauses the game.
 * @function
 * @returns {void}
 */
function pauseGame() {
    world.isPaused = !world.isPaused;
    isPaused = world.isPaused;
    pauseButton.classList.toggle('play');

    if (world.isPaused) {
        clearInterval(world.backgroundInterval);
        world.game_sound.pause();
    } else {
        world.draw();
        world.playBackgroundSound();
    }
}

/**
 * Handles keydown events.
 * @function
 * @param {Event} event - The keydown event.
 * @returns {void}
 */
window.addEventListener('keydown', (event) => {
    if (!isPaused) {
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

/**
 * Handles keyup events.
 * @function
 * @param {Event} event - The keyup event.
 * @returns {void}
 */
window.addEventListener('keyup', (event) => {
    if (!isPaused) {
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

/**
 * Sets up touch events for buttons.
 * @function
 * @returns {void}
 */
function setButtons() {
    buttonUp.addEventListener('touchstart', (event) => {
        keyboard.up = true;
    });
    buttonLeft.addEventListener('touchstart', (event) => {
        keyboard.left = true;
    });
    buttonDown.addEventListener('touchstart', (event) => {
        keyboard.down = true;
    });
    buttonRight.addEventListener('touchstart', (event) => {
        keyboard.right = true;
    });
    buttonSpace.addEventListener('touchstart', (event) => {
        handleFinSlap();
    });
    buttonD.addEventListener('touchstart', (event) => {
        if (!dKeyLocked) {
            handleBubbleAttack();
        }
    });

    buttonUp.addEventListener('touchend', (event) => {
        keyboard.up = false;
    });
    buttonLeft.addEventListener('touchend', (event) => {
        keyboard.left = false;
    });
    buttonDown.addEventListener('touchend', (event) => {
        keyboard.down = false;
    });
    buttonRight.addEventListener('touchend', (event) => {
        keyboard.right = false;
    });
}

/**
 * Handles the bubble attack action.
 * @function
 * @returns {void}
 */
function handleBubbleAttack() {
    keyboard.D = true;
    dKeyLocked = true;
    setTimeout(() => {
        keyboard.D = false;
    }, 450);
    setTimeout(() => {
        dKeyLocked = false;
    }, 1500); // pause between the bubble Attack
}

/**
 * Handles the fin slap action.
 * @function
 * @returns {void}
 */
function handleFinSlap() {
    keyboard.space = true;
    setTimeout(() => {
        keyboard.space = false;
    }, 300);
}