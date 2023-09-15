class Character extends MoveableObject {
    x = 150;
    y = 220;
    height = 250;
    width = 200;
    images_idle = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png',
    ];
    images_swim = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];
    otherDirection = false;
    world;
    // keyboard;

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.images_idle);
        this.loadImages(this.images_swim);

        this.animateIdle();
        this.animateSwim();
    }

    animateSwim() {
        setInterval(() => {
            if (world.character.keyboard.right) {
                this.updateSwimImage() // Aufruf der ausgelagerten Methode
                this.x += 10;
                this.otherDirection = false;
            }
            if (world.character.keyboard.left && this.x > 80) {
                this.updateSwimImage() // Aufruf der ausgelagerten Methode
                this.x -= 10;
                this.otherDirection = true;
            }
            if (world.character.keyboard.up && this.y > -110) {
                this.updateSwimImage() // Aufruf der ausgelagerten Methode
                this.y -= 10;
            }
            if (world.character.keyboard.down && this.y < 250) {
                this.updateSwimImage() // Aufruf der ausgelagerten Methode
                this.y += 10;
            }
            this.world.camera_x = -this.x +75;
        }, 1000 / 30);
    }

    updateSwimImage() {
        let i = this.currentImage % this.images_swim.length;
        let path = this.images_swim[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    animateIdle() {
        setInterval(() => {
            if (!world.character.keyboard.right && !world.character.keyboard.left && !world.character.keyboard.up && !world.character.keyboard.down) {
                let i = this.currentImage % this.images_idle.length;
                let path = this.images_idle[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 180)
    }
}