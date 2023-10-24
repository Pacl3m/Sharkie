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

    offset = {
        top: 120,
        bottom: 50,
        left: 40,
        right: 35,
    };

    IMAGES_IDLE = [
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
    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];
    IMAGES_FIN_SLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png',
    ];
    IMAGES_BUBBLE_ATTACK = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
    ];
    IMAGES_POISEN_ATTACK = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png',
    ];
    IMAGES_HURT_POISONED = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
    ];
    IMAGES_HURT_SHOCKED = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
    ];
    IMAGES_DEAD_POISONED = [
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
    IMAGES_LONG_IDLE_START = [
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
    IMAGES_LONG_IDLE_END = [
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
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_FIN_SLAP);
        this.loadImages(this.IMAGES_HURT_POISONED);
        this.loadImages(this.IMAGES_DEAD_POISONED);
        this.loadImages(this.IMAGES_BUBBLE_ATTACK);
        this.loadImages(this.IMAGES_POISEN_ATTACK);
        this.loadImages(this.IMAGES_HURT_SHOCKED);
        this.loadImages(this.IMAGES_LONG_IDLE_START);
        this.loadImages(this.IMAGES_LONG_IDLE_END);
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
                    this.playAnimation(this.IMAGES_HURT_SHOCKED);
                } else if (this.isHurt() && !this.isShocked) {
                    this.playAnimation(this.IMAGES_HURT_POISONED);
                } else if (this.isSleeping() && !this.isDead() && this.noKeyisActive()) {
                    this.animateSleep();
                } else if (this.isDead()) {
                    this.animateGameOver();
                } else {
                    if (this.noKeyisActive()) {
                        this.playAnimation(this.IMAGES_IDLE);
                    } else if (!this.noKeyisActive()) {
                        this.playAnimation(this.IMAGES_SWIM);
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
            this.playAnimation(this.IMAGES_LONG_IDLE_START);
        } else {
            this.playAnimation(this.IMAGES_LONG_IDLE_END);
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
            this.resetFinSlap();
            if (this.world.keyboard.D && !this.otherDirection) {
                if (world.poisenbar.bottles > 0 && (this.x > 1400 || world.hadFirstAttack)) {
                    this.playAttack(this.IMAGES_POISEN_ATTACK);
                } else {
                    this.playAttack(this.IMAGES_BUBBLE_ATTACK);
                }
            }
            if (this.world.keyboard.space && !this.isHurt()) {
                this.playAttack(this.IMAGES_FIN_SLAP);
                this.attacking = true;
                this.offset.left = 0;
                this.offset.right = -5;
            }
            this.resetTimeToSleep();
        }, 100);
    }

    resetFinSlap() {
        this.offset.left = 40;
        this.offset.right = 35;
        this.attacking = false;
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