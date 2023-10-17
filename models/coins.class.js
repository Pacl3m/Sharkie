class Coins extends MoveableObject {
    width = 40;
    height = this.width;

    images_coins = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png',
    ];

    pick_up_coin_sound = new Audio('audio/pickUpCoin.mp3');

    constructor(x) {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.images_coins);
        this.x = x;
        this.y = 50 + Math.random() * 300;

        this.setCoin()
    }

    setCoin() {
        setInterval(() => {
            this.playAnimation(this.images_coins);
        }, 200);
    }
}