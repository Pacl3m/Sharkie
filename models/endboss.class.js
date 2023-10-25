class Endboss extends MoveableObject {
    x = 1960;
    y = -40;
    height = 450;
    width = this.height * 0.86;
    hadFirstContact = false;
    animateOrder = 0;

    offset = {
        top: 150,
        bottom: 80,
        left: 20,
        right: 10,
    };


    IMAGES_SWIM = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];
    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png',
    ];
    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ];
    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png',
    ];
    IMAGES_SPAWNING = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ];

    whale_get_hit_sound = new Audio('audio/whaleGetHit.mp3');
    whale_attack_sound = new Audio('audio/whaleAttack.mp3');
    whale_intro_sound = new Audio('audio/whaleIntro.mp3');

    /**
    * Constructor for the endboss class. Loads initial images, starts animations, applies gravity, and enables sound effects.
    * @constructor
    * @returns {void}
    */
    constructor() {
        super().loadImage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
        this.loadEndbossImages();

        this.animate();
        this.enableSoundEndboss();
    }


    /**
   * Loads all images for different animations of the endboss.
   * @function
   * @returns {void}
   */
    loadEndbossImages() {
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_SPAWNING);
    }


    /**
    * Enables sound effects and manages their playback.
    * @function
    * @returns {void}
    */
    enableSoundEndboss() {
        setInterval(() => {
            if (!mute && !isPaused) {
                if (this.animateOrder < 10 && this.hadFirstContact) {
                    this.whale_intro_sound.play();
                } else if (this.isHurt()) {
                    this.whale_attack_sound.pause();
                    this.whale_get_hit_sound.play();
                } else if (this.attacking) {
                    this.whale_attack_sound.play();
                }
            }
        }, 200);
    }


    /**
    * Handles the animation of the character.
    * @function
    * @returns {void}
    */
    animate() {
        setInterval(() => {
            this.attacking = false;

            if (!isPaused) {
                if (this.hadFirstContact) {
                    if (this.animateOrder < 10) {
                        this.playAnimation(this.IMAGES_SPAWNING);
                    } else {
                        this.handleNonSpawningAnimations();
                    }
                }
                this.animateOrder++;
                this.setFirstContact();
            }
        }, 250);
    }


    /**
    * Handles non-spawning animations based on the character's state.
    * @function
    * @returns {void}
    */
    handleNonSpawningAnimations() {
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isDead()) {
            this.animateWinning();
        } else if (this.animateOrder > 20) {
            this.handleAttackAnimation();
        } else {
            this.handleSwimAnimation();
        }
    }


    /**
    * Handles the attack animation of the character.
    * @function
    * @returns {void}
    */
    handleAttackAnimation() {
        this.playAnimation(this.IMAGES_ATTACK);
        this.attacking = true;
        this.moveLeft(40);
        if (this.animateOrder > 25) {
            this.animateOrder = 10;
        }
    }

    /**
    * Handles the swim animation of the character.
    * @function
    * @returns {void}
    */
    handleSwimAnimation() {
        this.playAnimation(this.IMAGES_SWIM);
        if (this.x < 1960) {
            this.moveRight(10);
        }
    }


    /**
    * Checks if the character has made first contact with the object and updates properties accordingly.
    * @function
    * @returns {void}
    */
    setFirstContact() {
        if (world) {
            if (world.character.x > 1500 && !this.hadFirstContact) {
                this.animateOrder = 0;
                this.hadFirstContact = true;
            }
        }
    }
}