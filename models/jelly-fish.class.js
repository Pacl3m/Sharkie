class JellyFish extends MoveableObject {
    height = 90;
    width = this.height * 0.7;
    speed = 1;
    counter = 0;

    images_swim = [
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 4.png',
    ];
    images_dead = [
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',
    ];

    constructor(x, y, endY) {
        super().loadImage('img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 1.png');
        this.loadImages(this.images_swim);
        this.loadImages(this.images_dead);

        this.x = x;
        this.y = y;
        this.animateSwim(endY);
    }

    animateSwim(turnY) {
        let turn = 0;
        this.intervall1 = setInterval(() => {
            if (this.energy > 50) {
                turn = this.animateTurn(turn, turnY);
            }
            else if (this.energy <= 0) {
                this.moveUp(2);
            }
        }, 1000 / 60);
        setInterval(() => {
            if (this.energy <= 0) {
                this.playAnimation(this.images_dead);
            } else if (this.energy > 0) {
                this.playAnimation(this.images_swim);
            }
        }, 200);
    }

    animateTurn(turn, turnX) {
        if (turn < turnX) {
            this.moveUp(this.speed);
            turn += this.speed
            // this.otherDirection = false;
        } else if (turn < turnX * 2) {
            this.moveDown(this.speed);
            // this.otherDirection = true;
            turn += this.speed
        } else {
            turn = 0;
        }
        return turn;
    }
}