class CoinsBar extends DrawableObject {
    x = 10;
    y = 35; 
    height = 40;
    width = this.height * 3.76;
    coins = 0;

    images_coins = [
        'img/4. Marcadores/green/Coin/0_  copia 4.png',
        'img/4. Marcadores/green/Coin/20_  copia 2.png',
        'img/4. Marcadores/green/Coin/40_  copia 4.png',
        'img/4. Marcadores/green/Coin/60_  copia 4.png',
        'img/4. Marcadores/green/Coin/80_  copia 4.png',
        'img/4. Marcadores/green/Coin/100_ copia 4.png',
    ]

    constructor() {
        super().loadImage('img/4. Marcadores/green/Coin/100_ copia 4.png');
        this.loadImages(this.images_coins);
        this.setCoinsStatus(this.coins);
    }

    setCoinsStatus(coins) {
        this.coins = coins;
        let path = this.images_coins[this.calcutateCoins()];
        this.img = this.imageCache[path];
    }

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