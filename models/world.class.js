class World {
    character = new Character();
    enemies = level1.enemies;
    backgroundObjects = level1.backgroundObjects;
    coins = level1.coins;
    poisenBottle = level1.poisenBottles;
    statusbar = new StatusBar();
    coinsbar = new CoinsBar();
    poisenbar = new PoisenBar();
    bubbles = [];
    canvas;
    ctx;
    keyboard;
    camera_x;
    hadFirstAttack = false;
    isPaused = false;
    backgroundInterval;

    /**
    * Audio objects for the gameaudio
    * @type {HTMLAudioElement}
    */
    game_sound = new Audio('audio/shortBackgroundSound.mp3');
    game_music = new Audio('audio/BackgroundMusic.mp3');

    /**
    * Constructor for creating a Game object.
    * @constructor
    * @param {HTMLCanvasElement} canvas - The canvas element for rendering.
    * @param {Keyboard} keyboard - The keyboard controller for input.
    */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.character.keyboard = this.keyboard;
        this.setWorld();
        this.run();
        this.playBackgroundSound();
    }

    /**
    * Runs the game loop, checking for collisions and throw objects.
    * If the game is paused, it pauses the background sound.
    * @returns {void}
    */
    run() {
        if (!isPaused) {
            setInterval(() => {
                this.checkThrowObjects();
            }, 500);
            setInterval(() => {
                this.checkCollisions();
            }, 50);
        } if (this.isPaused) {
            this.game_sound.pause();
            debugger
            this.game_music.pause();
        }
    }

    /**
    * Plays the background sound at a regular interval. 
    * If the game is muted, pauses the sound.
    * @returns {void}
    */
    playBackgroundSound() {
        this.backgroundInterval = setInterval(() => {
            if (!mute) {
                this.game_sound.play();
                this.game_music.play();
            } else {
                this.game_sound.pause();
                this.game_music.pause();
            }
        }, 100);
    }

    /**
    * Checks if the character should throw objects (bubbles).
    * If conditions are met, creates and adds a bubble object to the game.
    * Updates the poison bar and bubble count accordingly.
    * @returns {void}
    */
    checkThrowObjects() {
        if (this.keyboard.D && !this.character.otherDirection && !this.character.isDead()) {
            if (this.poisenbar.bottles > 0 && (this.character.x > 1400 || this.hadFirstAttack)) {
                this.hadFirstAttack = true;
                let bubble = new BubbleObject(this.character.x, this.character.y, 'poisen');
                this.bubbles.push(bubble);
                this.poisenbar.bottles--;
                this.poisenbar.setBottles(this.poisenbar.bottles);
            } else {
                let bubble = new BubbleObject(this.character.x, this.character.y, 'normal');
                this.bubbles.push(bubble);
            }
        }
    }

    /**
    * Checks for collisions between game objects.
    * Updates game state based on collisions.
    * @returns {void}
    */
    checkCollisions() {
        this.collisionWithEnemy();
        this.collisionWithCoin();
        this.collisionWithPosienBottle();
    }


    /**
    * Handles collisions with enemies.
    */
    collisionWithEnemy() {
        this.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && enemy.energy > 0) {
                this.character.hit(enemy);
                this.statusbar.setPercentage(this.character.energy);
            } if (this.bubbles.length > 0) {
                this.bubbles.forEach((bubble) => {
                    if (bubble.isColliding(enemy)) {
                        bubble.hit(enemy);
                    }
                })
            }
        })
    }


    /**
    * Handles collisions with coins.
    */
    collisionWithCoin() {
        this.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.hit(coin);
                this.coinsbar.coins++;
                this.coinsbar.setCoinsStatus(this.coinsbar.coins);
            }
        })
    }


    /**
    * Handles collisions with poisenbottle.
    */
    collisionWithPosienBottle() {
        this.poisenBottle.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.character.hit(bottle);
                this.poisenbar.bottles++;
                this.poisenbar.setBottles(this.poisenbar.bottles);
            }
        })
    }

    /**
    * Sets the world property of the character.
    * @returns {void}
    */
    setWorld() {
        this.character.world = this;
    }

    /**
    * Draws game objects on the canvas.
    * Continuously called to update the game state.
    * @returns {void}
    */
    draw() {
        if (!this.isPaused) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.ctx.translate(this.camera_x, 0);
            this.addObjectsToMap(this.backgroundObjects);

            this.addObjectsToMap(this.bubbles);
            this.addObjectsToMap(this.coins);
            this.addObjectsToMap(this.poisenBottle);
            this.addObjectsToMap(this.enemies);
            this.addTopMap(this.character);

            this.addFixedObjToMap();

            this.ctx.translate(-this.camera_x, 0);

            // draw() wird immer wieder aufgerufen
            let self = this;
            requestAnimationFrame(() => { self.draw() });
        }
    }

    /**
    * Adds fixed objects to the map like status bar, coins bar, and poison bar.
    * Translates the context to adjust for camera position.
    */
    addFixedObjToMap() {
        this.ctx.translate(-this.camera_x, 0);
        this.addTopMap(this.statusbar);
        this.addTopMap(this.coinsbar);
        this.addTopMap(this.poisenbar);
        this.ctx.translate(this.camera_x, 0);
    }

    /**
    * Adds a list of objects to the map.
    * @param {Object[]} objects - An array of objects to be added to the map.
    */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addTopMap(o);
        })
    }

    /**
    * Draws a map object on the canvas.
    * @param {Object} mo - The map object to be drawn.
    */
    addTopMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        // mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
    * Flips the image horizontally for an object.
    * @param {Object} mo - The map object to flip.
    */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
    * Reverts the flipped image back to its original state.
    * @param {Object} mo - The map object to revert the flip.
    */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}