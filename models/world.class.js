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
    ]
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.enemies);
        this.addTopMap(this.character);
        
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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}