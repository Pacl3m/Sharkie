class Endboss extends MoveableObject {
    x = 1960;
    // x = 300;
    y = -40;
    height = 450;
    width = this.height * 0.86;

    images_swim = [
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
    images_hurt = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png',
    ];
    images_dead = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ];
    images_attack = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png',
    ];
    images_spawning = [
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
    hadFirstContact = false;

    whale_get_hit_sound = new Audio('audio/whaleGetHit.mp3');
    whale_attack_sound = new Audio('audio/whaleAttack.mp3');
    whale_intro_sound = new Audio('audio/whaleIntro.mp3');

    constructor() {
        super().loadImage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
        this.loadImages(this.images_swim);
        this.loadImages(this.images_hurt);
        this.loadImages(this.images_dead);
        this.loadImages(this.images_attack);
        this.loadImages(this.images_spawning);

        this.animate();
        this.enableSoundEndboss();
    }

    i = 0;

    enableSoundEndboss() {
        setInterval(() => {
            if (!mute && !isPaused) {
                if (this.i < 10 && this.hadFirstContact) {
                    this.whale_intro_sound.play();
                }
                else if (this.isHurt()) {
                    this.whale_attack_sound.pause();
                    this.whale_get_hit_sound.play();
                } else if (this.i > 15 && this.hadFirstContact) {
                    this.whale_attack_sound.play();
                } 
            }
        }, 200);
    }

    animate() {
        // let i = 0;
        setInterval(() => {
            if (!isPaused) {
                if (this.i < 10 && this.hadFirstContact) {
                    this.playAnimation(this.images_spawning);
                } else if (this.hadFirstContact) {
                    if (this.isHurt()) {
                        // this.whale_attack_sound.pause();
                        // this.whale_get_hit_sound.play();
                        this.playAnimation(this.images_hurt);
                    } else if (this.isDead()) {
                        this.animateWinning();
                    } else if (this.i > 15) {
                        // this.whale_attack_sound.play();
                        this.playAnimation(this.images_attack);
                        this.moveLeft(40);
                        if (this.i > 20) {
                            this.i = 10;
                        }
                    } else {
                        this.playAnimation(this.images_swim);
                        if (this.x < 1960) {
                            this.moveRight(25);
                        }
                    }
                }
                this.i++;
                if (world) {
                    if (world.character.x > 1500 && !this.hadFirstContact) {
                        this.i = 0;
                        this.hadFirstContact = true;
                    }
                }
            }
        }, 250)
    }
}