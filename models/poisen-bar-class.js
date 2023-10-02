class PoisenBar extends DrawableObject {
    x = 10;
    y = 70;
    height = 40;
    width = this.height * 3.76;
    bottles = 0;

    images_poisen = [
        'img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
        'img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
    ];

    constructor() {
        super().loadImage('img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png');
        this.loadImages(this.images_poisen);
        this.setBottles(this.bottles);
    }

    setBottles(bottles) {
        this.bottles = bottles;
        let path = this.images_poisen[this.calcutateBottles()]
        this.img = this.imageCache[path];
    }

    calcutateBottles() {
        if (this.bottles === 10) {
            return 5;
        } else if (this.bottles > 8) {
            return 4;
        } else if (this.bottles > 6) {
            return 3;
        } else if (this.bottles > 4) {
            return 2;
        } else if (this.bottles > 2) {
            return 1;
        } else if (this.bottles >= 0) {
            return 0;
        }
    }
}