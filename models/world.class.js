class World {
    character = new Character();
    enemies = [
        new Fish(),
        new Fish(),
        new Fish(),
    ];
    backgroundObjects = [
        new Background('img/3. Background/Legacy/Layers/5. Water/d1.png', 0),
        new Background('img/3. Background/Layers/4.Fondo 2/L1.png', 0),
        new Background('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new Background('img/3. Background/Layers/2. Floor/D1.png', 0),

        new Background('img/3. Background/Legacy/Layers/5. Water/D2.png', 719),
        new Background('img/3. Background/Layers/4.Fondo 2/L2.png', 719),
        new Background('img/3. Background/Layers/3.Fondo 1/D2.png', 719),
        new Background('img/3. Background/Layers/2. Floor/D2.png', 719),

        new Background('img/3. Background/Legacy/Layers/5. Water/d1.png', 719*2),
        new Background('img/3. Background/Layers/4.Fondo 2/L1.png', 719*2),
        new Background('img/3. Background/Layers/3.Fondo 1/D1.png', 719*2),
        new Background('img/3. Background/Layers/2. Floor/D1.png', 719*2),
    ]
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
        this.character.camera_x = this.camera_x;
        this.setWorld();
    }


    setWorld() {
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
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
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}