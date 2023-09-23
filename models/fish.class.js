class Fish extends MoveableObject {
    height = 70;
    width = this.height / 0.82;
    speed = 0.25 + Math.random() * 0.25;
    counter = 0;

    images_swim = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];

    images_transition = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
    ];

    images_attack = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
    ]

    images_dead = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going up).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going up).png',
    ];

    constructor(x, endX) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.images_swim);
        this.loadImages(this.images_transition);
        this.loadImages(this.images_attack);

        this.x = x + Math.random() * 300;
        this.y = 50 + Math.random() * 300;
        this.animateSwim(endX);
    }

    intervall1;

    animateSwim(turnX) {
        let turn = 0;
        this.intervall1 = setInterval(() => {
            if (this.energy > 50) {
                if (turn < turnX) {
                    this.moveLeft(this.speed);
                    turn += this.speed
                    this.otherDirection = false;
                } else if (turn < turnX * 2) {
                    this.moveRight(this.speed);
                    this.otherDirection = true;
                    turn += this.speed
                } else {
                    turn = 0;
                }
            } else {
                this.moveLeft(5);
            }
        }, 1000 / 60);
        setInterval(() => {
            if (this.energy > 50) {
                this.playAnimation(this.images_swim);
            } else if (this.energy < 50) {
                this.playAnimation(this.images_attack);
            }
        }, 150);
    };

    animateTransition() {
        this.currentImage = 0;
        clearInterval(this.intervall1);
        let intervall2 = setInterval(() => {
            this.otherDirection = false;
            this.playAnimation(this.images_transition);
            this.counter++;
            if (this.counter > 4) {
                clearInterval(intervall2); // Das Intervall nach 5 Wiederholungen beenden
                console.log('5mal');
                this.energy -= 25;
                this.animateSwim();
            }
        }, 30);
    }
}