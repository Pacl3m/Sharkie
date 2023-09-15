let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('My Character is', world.character);
}


window.addEventListener('keydown', (event) => {
    // console.log(event.key);
    if (event.key === 'ArrowLeft') {
        keyboard.left = true;
    }
    if (event.key === 'ArrowRight') {
        keyboard.right = true;
    }
    if (event.key === 'ArrowUp') {
        keyboard.up = true;
    }
    if (event.key === 'ArrowDown') {
        keyboard.down = true;
    }
})


window.addEventListener('keyup', (event) => {
    // console.log(event.key);
    if (event.key === 'ArrowLeft') {
        keyboard.left = false;
    }
    if (event.key === 'ArrowRight') {
        keyboard.right = false;
    }
    if (event.key === 'ArrowUp') {
        keyboard.up = false;
    }
    if (event.key === 'ArrowDown') {
        keyboard.down = false;
    }
})