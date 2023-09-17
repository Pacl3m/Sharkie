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
    images_fin_slap = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png',
    ];
    otherDirection = false;
    world;
    swimming_sound = new Audio('audio/swimming.mp3');
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
            this.swimming_sound.pause();
            if (world.character.keyboard.right && this.x < 2110) {
                this.playAnimation(this.images_swim);
                this.x += 10;
                this.otherDirection = false;
                this.swimming_sound.play();
            }
            if (world.character.keyboard.left && this.x > 80) {
                this.playAnimation(this.images_swim);
                this.x -= 10;
                this.otherDirection = true;
                this.swimming_sound.play();
            }
            if (world.character.keyboard.up && this.y > -110) {
                this.playAnimation(this.images_swim);
                this.y -= 10;
                this.swimming_sound.play();
            }
            if (world.character.keyboard.down && this.y < 250) {
                this.playAnimation(this.images_swim);
                this.y += 10;
                this.swimming_sound.play();
            }
            this.world.camera_x = -this.x + 75;
        }, 1000 / 30);
    }


    animateIdle() {
        setInterval(() => {
            if (!world.character.keyboard.right && !world.character.keyboard.left && !world.character.keyboard.up && !world.character.keyboard.down) {
                this.playAnimation(this.images_idle);
            }
        }, 180);

    }
}