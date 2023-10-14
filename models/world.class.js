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


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.character.keyboard = this.keyboard;
        // this.character.camera_x = this.camera_x;
        this.setWorld();
        this.run();
    }

    run() {
        if (!isPaused) {
            setInterval(() => {
                this.checkThrowObjects();
            }, 500);
            setInterval(() => {
                this.checkCollisions();
            }, 50);
        }
    }

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

    checkCollisions() {
        this.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && enemy.energy > 0) {
                this.character.hit(enemy);
                this.statusbar.setPercentage(this.character.energy);
            } if (this.bubbles.length > 0) {
                this.bubbles.forEach((bubble) => {
                    if (bubble.isColliding(enemy)) {
                        console.log('Treffer!!');
                        bubble.hit(enemy);
                    }
                })
            }
        })
        this.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.hit(coin);
                // console.log('Bling!');
                this.coinsbar.coins++;
                this.coinsbar.setCoinsStatus(this.coinsbar.coins);
            }
        })
        this.poisenBottle.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.character.hit(bottle);
                // console.log('Bling!');
                this.poisenbar.bottles++;
                this.poisenbar.setBottles(this.poisenbar.bottles);
            }
        })
    }

    setWorld() {
        // if (world) {
        //     world = null;
        // }
        
        this.character.world = this;
    }


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

            this.ctx.translate(-this.camera_x, 0);
            // Space for fixed object
            this.addTopMap(this.statusbar);
            this.addTopMap(this.coinsbar);
            this.addTopMap(this.poisenbar);
            this.ctx.translate(this.camera_x, 0);

            this.ctx.translate(-this.camera_x, 0);

            // draw() wird immer wieder aufgerufen
            let self = this;
            requestAnimationFrame(() => { self.draw() });
        }
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addTopMap(o);
        })
    }

    addTopMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    pauseGame() {
        if (this.isPaused) {
            world.isPaused = false;
            isPaused = false;
            this.draw();
        } else {
            world.isPaused = true;
            isPaused = true;
        }
    }

    // animateGameOver() {
    //     this.playAnimation(this.images_dead_poisoned);
        
    //     if (this.currentImage > this.images_dead_poisoned.length) {
    //         world.pauseGame();
    //         // document.getElementById('gameoverOverlay').classList.remove('d-none');
    //         document.getElementById('gameoverOverlay').classList.add('zoomEffectGameover');
    //         setTimeout(() => {
    //             document.getElementById('tryAgain').classList.add('zoomEffectTryAgain');
    //             // this.energy = 100;
    //             this.deleteGame();
    //         }, 2000);
    //     }   
    // }

    // deleteGame() {
    //     this.character = new Character();
    //     this.enemies = level1.enemies;
    //     this.backgroundObjects = level1.backgroundObjects;
    //     this.coins = level1.coins;
    //     this.poisenBottle = level1.poisenBottles;
    //     this.statusbar = new StatusBar();
    //     this.coinsbar = new CoinsBar();
    //     this.poisenbar = new PoisenBar();
    //     this.bubbles = [];
    //     // this.statusBarHealth = new StatusbarHealth();
    //     // this.statusBarBottle = new StatusbarBottle();
    //     // this.statusBarCoin = new StatusbarCoin();
    //     // this.level = createLevel();
    //     // this.camera_x = 0;
    //     // isGameOver = false;
    //     // this.enemySquashed = false;
    //     // this.playerWon = false;
    //     // pause = false;
    // }
}