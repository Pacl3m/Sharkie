let canvas;
let world;
let keyboard = new Keyboard();
let dKeyLocked = false;


function init() {
    document.getElementById('content').innerHTML = `<canvas id="canvas" width="720" height="480">`
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


window.addEventListener('keydown', (event) => {
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
        }, 3500);
    };
})


window.addEventListener('keyup', (event) => {
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
})