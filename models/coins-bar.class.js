class CoinsBar extends DrawableObject {
    x = 10;
    y = 35; 
    height = 40;
    width = this.height * 3.76;
    coins = 0;

    IMAGES_COINSBAR = [
        'img/4. Marcadores/green/Coin/0_  copia 4.png',
        'img/4. Marcadores/green/Coin/20_  copia 2.png',
        'img/4. Marcadores/green/Coin/40_  copia 4.png',
        'img/4. Marcadores/green/Coin/60_  copia 4.png',
        'img/4. Marcadores/green/Coin/80_  copia 4.png',
        'img/4. Marcadores/green/Coin/100_ copia 4.png',
    ]

    /**
    * Constructor for the Coins class. Loads initial images, additional coin images, and sets coin status.
    * @constructor
    * @returns {void}
    */
    constructor() {
        super().loadImage('img/4. Marcadores/green/Coin/100_ copia 4.png');
        this.loadImages(this.IMAGES_COINSBAR);
        this.setCoinsStatus(this.coins);
    }


    /**
    * Sets the status of coins based on the provided array.
    * @function
    * @param {Array} coins - The array of coin objects.
    * @returns {void}
    */
    setCoinsStatus(coins) {
        this.coins = coins;
        let path = this.IMAGES_COINSBAR[this.calcutateCoins()];
        this.img = this.imageCache[path];
    }

    
    /**
    * Calculates the coin index based on the number of coins.
    * @function
    * @returns {number} - The index of the coin image.
    */
    calcutateCoins() {
        if (this.coins === 10) {
            return 5;
        } else if (this.coins > 8) {
            return 4;
        } else if (this.coins > 6) {
            return 3;
        } else if (this.coins > 4) {
            return 2;
        } else if (this.coins > 2) {
            return 1;
        } else if (this.coins >= 0) {
            return 0;
        }
    }
}