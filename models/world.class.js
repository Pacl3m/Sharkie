class World {
    character = new Character();
    enemies = level1.enemies;
    backgroundObjects = level1.backgroundObjects;
    coins = level1.coins;
    statusbar = new StatusBar();
    bubbles = [];
    // test = new ThrowabelObject();
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
            this.checkCollisions();
        }, 500);
    }

    checkThrowObjects() {
        if (this.keyboard.D && !this.character.otherDirection && !this.character.isDead()) {
            let bubble = new BubbleObject(this.character.x, this.character.y);
            this.bubbles.push(bubble);
        }
    }

    checkCollisions() {
        this.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit(enemy);
                this.statusbar.setPercentage(this.character.energy);
            }
        });
        this.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.hit(coin);
                console.log('Bling!');
            }
        });
    }

    setWorld() {
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        // Space for fixed object
        this.addTopMap(this.statusbar);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.coins);
        this.addObjectsToMap(this.enemies);
        this.addTopMap(this.character);
        
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