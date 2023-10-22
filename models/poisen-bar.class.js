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

    /**
     * Constructor for creating a PoisonBubble object.
     * @constructor
     */
    constructor() {
        super().loadImage('img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png');
        this.loadImages(this.images_poisen);
        this.setBottles(this.bottles);
    }

    /**
     * Sets the number of poison bottles and updates the image of the bubble accordingly.
     * @param {number} bottles - The number of poison bottles.
     * @returns {void}
     */
    setBottles(bottles) {
        this.bottles = bottles;
        let path = this.images_poisen[this.calculateBottles()];
        this.img = this.imageCache[path];
    }

    /**
     * Calculates the index for the image of the bubble based on the number of bottles.
     * @returns {number} - The index for the image.
     */
    calculateBottles() {
        if (this.bottles === 10) {
            return 5;
        } else if (this.bottles > 7) {
            return 4;
        } else if (this.bottles > 5) {
            return 3;
        } else if (this.bottles > 3) {
            return 2;
        } else if (this.bottles >= 1) {
            return 1;
        } else if (this.bottles >= 0) {
            return 0;
        }
    }
}