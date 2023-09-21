class Fish extends MoveableObject {
    height = 60;
    width = this.height / 0.82;
    speed = 0.15 + Math.random() * 0.25;

    images_swim = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.images_swim);

        this.x = 200 + Math.random() * 500;
        this.y = 50 + Math.random() * 300;
        this.animateSwim();
    }

    animateSwim() {
        setInterval(() => { this.moveLeft(this.speed) }, 1000 / 60); // this.moveLeft(this.speed);

        setInterval(() => {
            this.playAnimation(this.images_swim)
        }, 180);
    };
}