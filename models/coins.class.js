class Coins extends MoveableObject {
    width = 40;
    height = this.width;

    IMAGES_COINS = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png',
    ];

    pick_up_coin_sound = new Audio('audio/pickUpCoin.mp3');

    /**
    * Creates a coin object at the specified x-coordinate.
    * @param {number} x - The initial x-coordinate of the coin.
    */
    constructor(x) {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_COINS);
        this.x = x;
        this.y = 50 + Math.random() * 300;

        this.setCoin()
    }


    /**
     * Sets the coin animation to play at regular intervals.
     */
    setCoin() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 200);
    }
}