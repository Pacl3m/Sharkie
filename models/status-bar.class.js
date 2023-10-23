class StatusBar extends DrawableObject {
    x = 10;
    y = 0;
    height = 40;
    width = this.height * 3.76;
    percentage = 100;

    IMAGES_LIFE = [
        'img/4. Marcadores/green/Life/0_  copia 3.png',
        'img/4. Marcadores/orange/20_ copia 2.png',
        'img/4. Marcadores/green/Life/40_  copia 3.png',
        'img/4. Marcadores/green/Life/60_  copia 3.png',
        'img/4. Marcadores/green/Life/80_  copia 3.png',
        'img/4. Marcadores/green/Life/100_  copia 2.png',
    ];

    /**
    * Constructor for creating a Life object.
    * @constructor
    */
    constructor() {
        super().loadImage('img/4. Marcadores/green/Life/0_  copia 3.png');
        this.loadImages(this.IMAGES_LIFE);
        this.setPercentage(this.percentage);
    }


    /**
    * Sets the percentage for the Life object.
    * @param {number} percentage - The percentage value for the Life object.
    * @returns {void}
    */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_LIFE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    
    /**
    * Resolves the image index based on the percentage value.
    * @returns {number} The index corresponding to the percentage range.
    */
    resolveImageIndex() {
        if (this.percentage === 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else if (this.percentage === 0) {
            return 0;
        }
    }
}