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
    images_poisen_attack = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
    ];
    images_hurt_poisoned = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    ];
    images_hurt_shocked = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
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
    images_long_idle_start = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/i2.png',
        'img/1.Sharkie/2.Long_IDLE/i3.png',
        'img/1.Sharkie/2.Long_IDLE/i4.png',
        'img/1.Sharkie/2.Long_IDLE/i5.png',
        'img/1.Sharkie/2.Long_IDLE/i6.png',
        'img/1.Sharkie/2.Long_IDLE/i7.png',
        'img/1.Sharkie/2.Long_IDLE/i8.png',
        'img/1.Sharkie/2.Long_IDLE/i9.png',
        'img/1.Sharkie/2.Long_IDLE/i10.png',
    ];
    images_long_idle_end = [
        'img/1.Sharkie/2.Long_IDLE/i11.png',
        'img/1.Sharkie/2.Long_IDLE/i12.png',
        'img/1.Sharkie/2.Long_IDLE/i13.png',
        'img/1.Sharkie/2.Long_IDLE/i14.png',
    ];

    otherDirection = false;
    timeBreak = false;
    world;
    swimming_sound = new Audio('audio/swimming.mp3');
    // keyboard;
    timeToSleep = 0;

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.images_idle);
        this.loadImages(this.images_swim);
        this.loadImages(this.images_fin_slap);
        this.loadImages(this.images_hurt_poisoned);
        this.loadImages(this.images_dead_poisoned);
        this.loadImages(this.images_bubble_attack);
        this.loadImages(this.images_poisen_attack);
        this.loadImages(this.images_hurt_shocked);
        this.loadImages(this.images_long_idle_start);
        this.loadImages(this.images_long_idle_end);

        this.animateSwim();
        this.animateAttack();
        this.applyGravity();
    }

    animateSwim() {
        setInterval(() => {
            if (!this.world.keyboard.space && !this.isDead()) {
                if (world.character.keyboard.right && this.x < 2110 && !world.character.keyboard.D) {
                    this.moveRight(this.speed)
                    this.otherDirection = false;
                    this.resetTimeToSleep();
                }
                if (this.world.keyboard.left && this.x > 80) {
                    this.moveLeft(this.speed);
                    this.otherDirection = true;
                    this.resetTimeToSleep();
                }
                if (this.world.keyboard.up && this.y > -110) {
                    // this.moveUp(this.speed);
                    this.speedY = 6.5;
                    this.resetTimeToSleep();
                }
                if (this.world.keyboard.down && this.y < 250) {
                    this.moveDown(this.speed);
                    this.resetTimeToSleep();
                }
            }
            this.world.camera_x = -this.x + 50;
        }, 1000 / 30);

        setInterval(() => {
            if (!isPaused) {
                this.swimming_sound.pause();
                if (this.isHurt() && this.isShocked) {
                    this.playAnimation(this.images_hurt_shocked);
                } else if (this.isHurt() && !this.isShocked) {
                    this.playAnimation(this.images_hurt_poisoned);
                } else if (this.isSleeping() && !this.isDead() && this.noKeyisActive()) {
                    this.animateSleep();
                } else if (this.isDead() && !restart) {
                    this.animateGameOver();
                    // this.playAnimation(this.images_dead_poisoned);
                } else {
                    if (this.noKeyisActive()) {
                        this.playAnimation(this.images_idle);
                        // this.lastMove = new Date().getTime();
                    } else if (!this.noKeyisActive()) {
                        this.playAnimation(this.images_swim);
                        this.swimming_sound.play();
                    }
                }
            }
        }, 200);
        this.lastMove = new Date().getTime();
    }

    animateSleep() {
        if (this.timeToSleep < 9) {
            this.playAnimation(this.images_long_idle_start);
        } else {
            this.playAnimation(this.images_long_idle_end);
        }
        this.timeToSleep++;
    }

    animateAttack() {
        setInterval(() => {
            this.attacking = false;
            if (this.world.keyboard.D && !this.otherDirection) {
                if (world.poisenbar.bottles > 0 && (this.x > 1400 || world.hadFirstAttack)) {
                    this.playAttack(this.images_poisen_attack);
                    this.resetTimeToSleep();
                } else {
                    this.playAttack(this.images_bubble_attack);
                    this.resetTimeToSleep();
                }
            }
            if (this.world.keyboard.space && !this.isHurt()) {
                this.playAttack(this.images_fin_slap);
                this.attacking = true;
                this.resetTimeToSleep();
            }
        }, 100);

    }


    noKeyisActive() {
        return !this.world.keyboard.right && !this.world.keyboard.left && !this.world.keyboard.up && !this.world.keyboard.down;
    }
} 