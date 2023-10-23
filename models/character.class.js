class Character extends MoveableObject {
    x = 150;
    y = 220;
    height = 250;
    width = 200;
    speed = 10;
    otherDirection = false;
    timeBreak = false;
    world;
    timeToSleep = 0;

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
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
    ];
    images_long_idle_end = [
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png',
    ];

    swimming_sound = new Audio('audio/swimming.mp3');
    blitz_sound = new Audio('audio/blitz.mp3');
    gethit_sound = new Audio('audio/gethit.mp3');
    finSlap_sound = new Audio('audio/finslap5.mp3');


    /**
    * Constructor for the character class. Loads initial images, starts animations, applies gravity, and enables sound effects.
    * @constructor
    * @returns {void}
    */
    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadCharacterImages();

        this.animateSwim();
        this.animateOther();
        this.animateAttack();
        this.applyGravity();
        this.enableSound();
    }

    /**
    * Loads all images for different animations of the character.
    * @function
    * @returns {void}
    */
    loadCharacterImages() {
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
    }

    /**
    * Initiates the swimming animation.
    * @function
    * @returns {void}
    */
    animateSwim() {
        setInterval(() => {
            if (!this.world.keyboard.space && !this.isDead()) {
                if (world.character.keyboard.right && this.x < 2110 && !world.character.keyboard.D) {
                    this.moveRight(this.speed)
                    this.otherDirection = false;
                }
                if (this.world.keyboard.left && this.x > 80) {
                    this.moveLeft(this.speed);
                    this.otherDirection = true;
                }
                if (this.world.keyboard.up && this.y > -110) {
                    this.speedY = 6.5;
                }
                if (this.world.keyboard.down && this.y < 250) {
                    this.moveDown(this.speed / 2);
                }
                this.resetTimeToSleep();
            }
            this.world.camera_x = -this.x + 50;
        }, 1000 / 30);
    }

    /**
    * Initiates another type of animation.
    * @function
    * @returns {void}
    */
    animateOther() {
        setInterval(() => {
            if (!isPaused) {
                if (this.isHurt() && this.isShocked) {
                    this.playAnimation(this.images_hurt_shocked);
                } else if (this.isHurt() && !this.isShocked) {
                    this.playAnimation(this.images_hurt_poisoned);
                } else if (this.isSleeping() && !this.isDead() && this.noKeyisActive()) {
                    this.animateSleep();
                } else if (this.isDead()) {
                    this.animateGameOver();
                } else {
                    if (this.noKeyisActive()) {
                        this.playAnimation(this.images_idle);
                    } else if (!this.noKeyisActive()) {
                        this.playAnimation(this.images_swim);
                    }
                }
            }
        }, 200);
        this.lastMove = new Date().getTime();
    }

    /**
    * Enables sound effects and manages their playback.
    * @function
    * @returns {void}
    */
    enableSound() {
        setInterval(() => {
            this.pauseSoundEffect();
            if (!mute && !isPaused) {
                if (this.isHurt() && this.isShocked) {
                    this.blitz_sound.play();
                } else if (this.isHurt() && !this.isShocked) {
                    this.gethit_sound.play();
                } else if (!this.noKeyisActive()) {
                    this.swimming_sound.play();
                } else if (this.world.keyboard.space && !this.isHurt()) {
                    this.finSlap_sound.currentTime = 0;
                    this.finSlap_sound.play();
                }
            }
        }, 200);
    }

    /**
    * Pauses all sound effects.
    * @function
    * @returns {void}
    */
    pauseSoundEffect() {
        this.blitz_sound.pause();
        this.swimming_sound.pause();
        this.gethit_sound.pause();
    }

    /**
    * Animates the character when sleeping.
    * @function
    * @returns {void}
    */
    animateSleep() {
        if (this.timeToSleep < 9) {
            this.playAnimation(this.images_long_idle_start);
        } else {
            this.playAnimation(this.images_long_idle_end);
        }
        this.timeToSleep++;
    }

    /**
    * Animates the character's attacks.
    * @function
    * @returns {void}
    */
    animateAttack() {
        setInterval(() => {
            this.finSlap_sound.pause();
            this.attacking = false;
            if (this.world.keyboard.D && !this.otherDirection) {
                if (world.poisenbar.bottles > 0 && (this.x > 1400 || world.hadFirstAttack)) {
                    this.playAttack(this.images_poisen_attack);
                } else {
                    this.playAttack(this.images_bubble_attack);
                }
            }
            if (this.world.keyboard.space && !this.isHurt()) {
                this.playAttack(this.images_fin_slap);
                this.attacking = true;
            }
            this.resetTimeToSleep();
        }, 100);

    }

    /**
    * Checks if no movement keys are active.
    * @function
    * @returns {boolean} - Returns true if no movement keys are active, otherwise false.
    */
    noKeyisActive() {
        return !this.world.keyboard.right && !this.world.keyboard.left && !this.world.keyboard.up && !this.world.keyboard.down;
    }

    /**
    * Resets the sleep timer when any movement key or attack key is active.
    * @function
    * @returns {void}
    */
    resetTimeToSleep() {
        if (!this.noKeyisActive() || this.world.keyboard.space || this.world.keyboard.D) {
            this.lastMove = new Date().getTime();
            this.timeToSleep = 0;
        }
    }
}