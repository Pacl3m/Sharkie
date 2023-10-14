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


    moveUp(speed) {
        this.y -= speed;
    }

    moveDown(speed) {
        this.y += speed;
    }

    moveRight(speed) {
        this.x += speed;
    }

    moveLeft(speed) {
        this.x -= speed;
    }

    playAnimation(arr) {
        if (!isPaused) {
            if (arr !== this.currentAnimationArray) {
                this.currentImage = 0; // Setzt currentImage zurück, wenn das Array wechselt
                this.currentAnimationArray = arr; // Aktualisiert das aktuelle Array
            }
            let i = this.currentImage % arr.length;
            let path = arr[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }

    }

    playAttack(arr) {
        if (this.currentImage > arr.length) {
            this.currentImage = 0;
        }
        let i = this.currentImage % arr.length;
        let path = arr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    applyGravity() {
        // this.swimming_sound.pause();
        setInterval(() => {
            if (!isPaused) {
                if (this.y < 220 || this.speedY > 0) {
                    this.speedY -= this.acceleration;
                    if (this.speedY < -5) {
                        this.speedY = -5;
                    }
                    this.y -= this.speedY;
                    this.resetTimeToSleep();
                    // this.swimming_sound.play();
                } else if (!world.character.keyboard.up) {
                    this.speedY = 0;
                }
            }
        }, 1000 / 30)
    }

    resetTimeToSleep() {
        this.lastMove = new Date().getTime();
        world.character.timeToSleep = 0;
    }

    isColliding(obj) {
        if (this instanceof Character) {
            if (obj instanceof Endboss) {
                return (this.x + 30 + this.width - 65) > obj.x + 15 &&
                    (this.y + 110 + this.height - 160) > obj.y + 120 &&
                    (this.x + 30) < obj.x + 15 + obj.width &&
                    (this.y + 110) < (obj.y + 120 + obj.height - 170);
            } if (obj instanceof Fish) {
                const offset = this.attacking ? 35 : 65;
                const leftOffset = this.attacking ? 20 : 0;
                return (this.x + 30 + this.width - offset) > obj.x &&
                    (this.y + 110 + this.height - 160) > obj.y &&
                    (this.x + 30 - leftOffset) < obj.x + obj.width &&
                    (this.y + 110) < (obj.y + obj.height - 15);
            } else {
                return (this.x + 30 + this.width - 65) > obj.x &&
                    (this.y + 110 + this.height - 160) > obj.y &&
                    (this.x + 30) < obj.x + obj.width &&
                    (this.y + 110) < (obj.y + obj.height);
            }
        } if (this instanceof BubbleObject) {
            if (obj instanceof Endboss) {
                return (this.x + this.width) > obj.x + 15 &&
                    (this.y + this.height - 80) > obj.y + 120 &&
                    this.x < obj.x + 15 + obj.width &&
                    this.y < (obj.y + 120 + obj.height - 170);
            } else {
                return this.x + this.width > obj.x &&
                    this.y + this.height > obj.y &&
                    this.x < obj.x &&
                    this.y < obj.y + obj.height;
            }
        }
    }

    hit(obj) {
        if (!isPaused) {
            if (this instanceof Character && obj instanceof Fish && this.attacking) {
                obj.energy -= 200; // finslap
            }
            if (this instanceof Character && !this.attacking && !this.isDead() && obj instanceof Fish || obj instanceof Endboss || obj instanceof JellyFish) {
                this.characterGetsDamage(obj);
            } if (this instanceof Character && (obj instanceof Coins || obj instanceof Poisens)) {
                obj.width = 0;
                obj.x = 0;
            } if (this instanceof BubbleObject) {
                this.bubbleAttack(obj);
            }
        }
    }

    bubbleAttack(obj) {
        if (obj instanceof Fish) {
            if (obj.energy > 50) {
                obj.animateTransition();
            } obj.energy -= 50;
        }
        if (obj instanceof JellyFish) {
            obj.energy -= 100;
        }
        if (obj instanceof Endboss) {
            if (obj.energy > 0) {
                if (world.poisenbar.bottles > 0) {
                    obj.energy -= 10;
                }
                obj.energy -= 10;
            }
            obj.lastHit = new Date().getTime();
        }
        this.hideObj();
    }

    characterGetsDamage(obj) {
        this.energy -= 0.6;
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

    hideObj() {
        this.x = 0;
        this.width = 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead() {
        return this.energy === 0;
    }

    isSleeping() {
        if (this.y > 210) {
            let timepassed = new Date().getTime() - this.lastMove;
            timepassed = timepassed / 1000;
            return timepassed > 3;
        }
    }

    animateGameOver() {
        this.playAnimation(this.images_dead_poisoned);
        
        if (this.currentImage > this.images_dead_poisoned.length) {
            world.pauseGame();
            // document.getElementById('gameoverOverlay').classList.remove('d-none');
            document.getElementById('gameoverOverlay').classList.add('zoomEffectGameover');
            setTimeout(() => {
                document.getElementById('tryAgain').classList.add('zoomEffectTryAgain');
                // this.energy = 100;
                // this.deleteGame();
                
                // world.character.Keyboard = new Keyboard();
                // world.character = new Character();
                
                // world = new World(canvas, keyboard);
            }, 2000);
        }   
    }
}