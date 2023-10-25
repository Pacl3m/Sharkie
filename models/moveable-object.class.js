class MoveableObject extends DrawableObject {
    speedY = 0;
    acceleration = 0.4;
    energy = 100;
    lastHit = 0;
    hitting = 0;
    coins = 0;
    attacking = false;
    bottles = 0;
    isShocked = false;
    timeBreak = false;
    lastMove = 0;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    };

    gameover_sound = new Audio('audio/gameover.mp3');
    winning_sound = new Audio('audio/finishSound.mp3');
    whale_died_sound = new Audio('audio/whaleDied.mp3');


    /**
    * Moves the object upwards.
    * @param {number} speed - The speed at which the object moves.
    * @returns {void}
    */
    moveUp(speed) {
        this.y -= speed;
    }


    /**
    * Moves the object downwards.
    * @param {number} speed - The speed at which the object moves.
    * @returns {void}
    */
    moveDown(speed) {
        this.y += speed;
    }


    /**
    * Moves the object to the right.
    * @param {number} speed - The speed at which the object moves.
    * @returns {void}
    */
    moveRight(speed) {
        this.x += speed;
    }


    /**
    * Moves the object to the left.
    * @param {number} speed - The speed at which the object moves.
    * @returns {void}
    */
    moveLeft(speed) {
        this.x -= speed;
    }


    /**
    * Plays an animation based on the provided array of image paths.
    * @param {string[]} arr - Array of image paths representing the frames of the animation.
    * @returns {void}
    */
    playAnimation(arr) {
        if (!isPaused) {
            if (arr !== this.currentAnimationArray) {
                this.currentImage = 0; // Resets currentImage when the array changes
                this.currentAnimationArray = arr; // Updates the current array
            }
            let i = this.currentImage % arr.length;
            let path = arr[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }
    }


    /**
    * Plays an attack animation based on the provided array of image paths.
    * If the animation is complete, it resets to the first frame.
    * @param {string[]} arr - Array of image paths representing the frames of the attack animation.
    * @returns {void}
    */
    playAttack(arr) {
        if (this.currentImage > arr.length) {
            this.currentImage = 0;
        }
        let i = this.currentImage % arr.length;
        let path = arr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
    * Applies gravity to the object, causing it to fall or rise.
    * @returns {void}
    */
    applyGravity() {
        setInterval(() => {
            if (!isPaused && !this.isDead()) {
                if (this.y < 220 || this.speedY > 0) {
                    this.speedY -= this.acceleration;
                    if (this.speedY < -5) {
                        this.speedY = -5;
                    }
                    this.y -= this.speedY;
                    this.resetTimeToSleep();
                } else if (!world.character.keyboard.up) {
                    this.speedY = 0;
                }
            }
        }, 1000 / 30)
    }


    /**
    * Checks if this object is colliding with another object.
    * @param {Object} obj - The object to check for collision.
    * @param {number} obj.x - The x-coordinate of the object.
    * @param {number} obj.y - The y-coordinate of the object.
    * @param {number} obj.width - The width of the object.
    * @param {number} obj.height - The height of the object.
    * @param {Object} obj.offset - The collision offset of the object.
    * @param {number} obj.offset.top - The top collision offset of the object.
    * @param {number} obj.offset.bottom - The bottom collision offset of the object.
    * @param {number} obj.offset.left - The left collision offset of the object.
    * @param {number} obj.offset.right - The right collision offset of the object.
    * @returns {boolean} Returns true if a collision is detected, otherwise false.
    */
    isColliding(obj) {
        return (this.x + this.width - this.offset.right) > obj.x + obj.offset.left &&
            (this.y + this.height - this.offset.bottom) > obj.y + obj.offset.top &&
            (this.x + this.offset.left) < obj.x + obj.width - obj.offset.right &&
            (this.y + this.offset.top) < (obj.y + obj.height - obj.offset.bottom);
    }


    /**
    * Handles the collision and interaction with another object.
    * @param {Object} obj - The object with which collision occurs.
    * @returns {void}
    */
    hit(obj) {
        if (!isPaused) {
            if (this instanceof Character && obj instanceof Fish && this.attacking) {
                obj.energy -= 200; // finslap
            }
            if (this instanceof Character && !this.attacking && !this.isDead() && obj instanceof Fish || obj instanceof Endboss || obj instanceof JellyFish) {
                this.characterGetsDamage(obj);
            }
            if (this instanceof Character && (obj instanceof Coins || obj instanceof Poisens)) {
                obj.width = 0;
                obj.x = 0;
                this.characterPicksUp(obj);
            }
            if (this instanceof BubbleObject) {
                this.bubbleAttack(obj);
            }
        }
    }


    /**
    * Handles the action when the character picks up an object.
    * @param {Object} obj - The object being picked up.
    * @returns {void}
    */
    characterPicksUp(obj) {
        if (obj instanceof Coins && !mute) {
            obj.pick_up_coin_sound.play();
        } if (obj instanceof Poisens && !mute) {
            obj.pick_up_poisen_sound.play();
        }
    }


    /**
    * Handles the bubble attack interaction with another object.
    * @param {Object} obj - The object being attacked.
    * @returns {void}
    */
    bubbleAttack(obj) {
        if (obj instanceof Fish) {
            if (obj.energy > 50) {
                obj.animateTransition();
            } obj.energy -= 50;
        }
        if (obj instanceof JellyFish) {
            obj.energy -= 100;
            if (!mute) {
                obj.jellyfish_gets_hit_sound.play();
            }
        }
        if (obj instanceof Endboss) {
            if (obj.energy > 0 && !obj.attacking && obj.hadFirstContact) {
                if (world.poisenbar.bottles > 0) {
                    obj.energy -= 10;
                }
                obj.energy -= 10;
                obj.lastHit = new Date().getTime();
            }
        }
        this.hideObj();
    }


    /**
    * Hides the object by resetting its position and dimensions.
    * Also clears any active intervals associated with the object.
    */
    hideObj() {
        this.x = 0;
        this.y = -200;
        this.width = 0;
        clearInterval(this.throwInterval);
    }


    /**
    * Handles the action when the character gets damaged.
    * @param {Object} obj - The object causing the damage.
    * @returns {void}
    */
    characterGetsDamage(obj) {
        this.energy -= 0.7;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
        if (obj instanceof JellyFish) {
            this.isShocked = true;
        } else {
            this.isShocked = false;
        }
    }


    /**
    * Checks if the character is currently hurt based on the last hit timestamp.
    * @returns {boolean} - True if hurt, false otherwise.
    */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.6;
    }


    /**
    * Checks if the character is dead based on its energy level.
    * @returns {boolean} - True if dead, false otherwise.
    */
    isDead() {
        return this.energy === 0;
    }


    /**
    * Checks if the character is sleeping based on its position and inactivity time.
    * @returns {boolean} - True if sleeping, false otherwise.
    */
    isSleeping() {
        if (this.y > 210) {
            let timepassed = new Date().getTime() - this.lastMove;
            timepassed = timepassed / 1000;
            return timepassed > 3;
        }
    }


    /**
    * Animates the game over sequence.
    * @returns {void}
    */
    animateGameOver() {
        if (!mute) {
            this.gameover_sound.play();
        }
        this.playAnimation(this.IMAGES_DEAD_POISONED);
        pauseButton.disabled = true;
        if (this.currentImage > this.IMAGES_DEAD_POISONED.length) {
            pauseGame();
            document.getElementById('gameoverOverlay').classList.add('zoomEffectGameover');
            setTimeout(() => {
                document.getElementById('tryAgain').classList.add('zoomEffectTryAgain');
            }, 1000);
        }
    }


    /**
    * Animates the winning sequence.
    * @returns {void}
    */
    animateWinning() {
        if (!mute) {
            this.winning_sound.play();
        }
        this.playAnimation(this.IMAGES_DEAD);
        if (this.currentImage > this.IMAGES_DEAD.length) {
            pauseGame();
            document.getElementById('winningOverlay').classList.add('zoomEffectGameover');
            setTimeout(() => {
                document.getElementById('backToMenu').classList.add('zoomEffectTryAgain');
            }, 1000);
        }
    }
}