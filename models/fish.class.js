class Fish extends MoveableObject {
    height = 70;
    width = this.height / 0.82;
    speed = 0.25 + Math.random() * 0.25;

    images_swim = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];

    constructor(x, endX) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.images_swim);

        this.x = x + Math.random() * 300;
        this.y = 50 + Math.random() * 300;
        this.animateSwim(endX);
    }

    animateSwim(endX) {
        let turn = 0;
        setInterval(() => {
            if (turn < endX) {
                this.moveLeft(this.speed);
                turn += this.speed
                this.otherDirection = false;
            } else if (turn < endX * 2) {
                this.moveRight(this.speed);
                this.otherDirection = true;
                turn += this.speed
            } else {
                turn = 0;
            }
        }, 1000 / 60);
        setInterval(() => {
            this.playAnimation(this.images_swim)
        }, 180);
    };
}