class JellyFish extends MoveableObject {
    height = 90;
    width = this.height * 0.7;
    speed = 1;
    counter = 0;

    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 4.png',
    ];
    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',
    ];

    jellyfish_gets_hit_sound = new Audio('audio/jeelyfishGetsHit.mp3');

    /**
    * Creates a new JellyFish enemy with flowing and swimming animations.
    * @constructor
    * @param {number} x - The initial x-coordinate of the JellyFish.
    * @param {number} y - The initial y-coordinate of the JellyFish.
    * @param {number} endY - The target y-coordinate for the turning behavior.
    */
    constructor(x, y, endY) {
        super().loadImage('img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);

        this.x = x;
        this.y = y;
        this.animateFlowing(endY);
        this.animateSwim();
    }


    /**
    * Animates the flowing behavior of the JellyFish.
    * @param {number} turnY - The target y-coordinate for the turning behavior.
    * @function
    */
    animateFlowing(turnY) {
        let turn = 0;
        this.intervall1 = setInterval(() => {
            if (!isPaused) {
                if (this.energy > 0) {
                    turn = this.animateTurn(turn, turnY);
                } else {
                    this.moveUp(2);
                }
            }
        }, 1000 / 60);
    }


    /**
    * Animates the swimming behavior of the JellyFish.
    * @function
    */
    animateSwim() {
        setInterval(() => {
            if (this.energy > 0) {
                this.playAnimation(this.IMAGES_SWIM);
            } else {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 200);
    }

    
    /**
    * Animates the turning behavior of the JellyFish.
    * @param {number} turn - The current turn value.
    * @param {number} turnX - The target turn value.
    * @returns {number} The updated turn value.
    * @function
    */
    animateTurn(turn, turnX) {
        if (turn < turnX) {
            this.moveUp(this.speed);
            turn += this.speed
        } else if (turn < turnX * 2) {
            this.moveDown(this.speed);
            turn += this.speed
        } else {
            turn = 0;
        }
        return turn;
    }
}