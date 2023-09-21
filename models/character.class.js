class Character extends MoveableObject {
    x = 150;
    y = 220;
    height = 250;
    width = 200;
    speed = 10;

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
    images_bubble_attack = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ];
    images_hurt_poisoned = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    ];
    images_dead_poisoned = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png',
    ];
    otherDirection = false;
    world;
    swimming_sound = new Audio('audio/swimming.mp3');
    // keyboard;

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.images_idle);
        this.loadImages(this.images_swim);
        this.loadImages(this.images_fin_slap);
        this.loadImages(this.images_hurt_poisoned);
        this.loadImages(this.images_dead_poisoned);
        this.loadImages(this.images_bubble_attack);

        this.animateSwim();
        this.animateAttack();
    }

    animateSwim() {
        setInterval(() => {
            if (!world.character.keyboard.space && !this.isDead()) {
                if (world.character.keyboard.right && this.x < 2110  && !world.character.keyboard.D) {
                    this.moveRight(this.speed)
                    this.otherDirection = false;
                }
                if (world.character.keyboard.left && this.x > 80) {
                    this.moveLeft(this.speed);
                    this.otherDirection = true;
                }
                if (world.character.keyboard.up && this.y > -110) {
                    this.moveUp(this.speed);
                }
                if (world.character.keyboard.down && this.y < 250) {
                    this.moveDown(this.speed);
                }
            }
            this.world.camera_x = -this.x + 50;
        }, 1000 / 30);

        setInterval(() => {
            this.swimming_sound.pause();
            if (this.isHurt()) {
                this.playAnimation(this.images_hurt_poisoned);
            } else if (this.isDead()) {
                this.playAnimation(this.images_dead_poisoned);
                // } else if (world.character.keyboard.D) {
                //      this.playAnimation(this.images_bubble_attack)
                // } else if (this.isAttackingTime()) {
                //     this.playAnimation(this.images_fin_slap);
            } else {
                if (this.noKeyisActive()) {
                    this.playAnimation(this.images_idle);
                } else if (!this.noKeyisActive()) {
                    this.playAnimation(this.images_swim);
                    this.swimming_sound.play();
                }
            }
        }, 180);
    }

    animateAttack() {
        setInterval(() => {
                if (world.character.keyboard.D && !this.otherDirection) {
                    this.playAttack(this.images_bubble_attack);
                }
                if (world.character.keyboard.space && !this.otherDirection) {
                    this.playAttack(this.images_fin_slap);
                }
        }, 100);

    }




    arrowKeyIsActive() {
        return world.character.keyboard.right && world.character.keyboard.left && world.character.keyboard.up && world.character.keyboard.down;
    }

    noKeyisActive() {
        return !world.character.keyboard.right && !world.character.keyboard.left && !world.character.keyboard.up && !world.character.keyboard.down;
    }

    // animateIdle() {
    //     setInterval(() => {
    //         if (this.noKeyisActive()) {
    //             this.playAnimation(this.images_idle);
    //         }
    //     }, 180);
    // }

    // animateHurtPoisoned() {
    //     setInterval(() => {
    //         this.playAnimation(this.images_hurt_poisoned);
    //     }, 200);
    // }

    // animateDead() {
    //     setInterval(() => {
    //         if (this.isDead()) {
    //             this.playAnimation(this.images_dead_poisoned);
    //         }
    //     }, 200);
    // }
} 