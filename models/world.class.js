class World {
    character = new Character();
    enemies = level1.enemies;
    backgroundObjects = level1.backgroundObjects;
    coins = level1.coins;
    poisenBottle = level1.poisenBottles
    statusbar = new StatusBar();
    coinsbar = new CoinsBar();
    poisenbar = new PoisenBar();
    bubbles = [];
    canvas;
    ctx;
    keyboard;
    camera_x;


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
        setInterval(() => {
            this.checkThrowObjects();
        }, 500);
        setInterval(() => {
            this.checkCollisions();
        }, 50);
    }

    checkThrowObjects() {
        if (this.keyboard.D && !this.character.otherDirection && !this.character.isDead()) {
            if (this.poisenbar.bottles > 0 && this.character.x > 1400) {
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
        this.character.world = this;
    }


    draw() {
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
}