class MoveableObject extends DrawableObject {
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    hitting = 0;
    coins = 0;
    attacking = false;
    bottles = 0;
    isShocked = false;
    timeBreak = false;


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
        let i = this.currentImage % arr.length;
        let path = arr[i];
        this.img = this.imageCache[path];
        this.currentImage++;
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
        setInterval(() => {
            this.speedY -= this.acceleration;
            this.y -= this.speedY;
        }, 1000 / 25)
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
                return (this.x + 30 + this.width - offset) > obj.x &&
                    (this.y + 110 + this.height - 160) > obj.y &&
                    (this.x + 30) < obj.x + obj.width &&
                    (this.y + 110) < (obj.y + obj.height - 15);
            } if (obj instanceof JellyFish) {
                const offset = this.attacking ? 35 : 65;
                return (this.x + 30 + this.width - offset) > obj.x &&
                    (this.y + 110 + this.height - 160) > obj.y &&
                    (this.x + 30) < obj.x + obj.width &&
                    (this.y + 110) < (obj.y + obj.height);
            }
            else {
                return (this.x + 30 + this.width - 65) > obj.x &&
                    (this.y + 110 + this.height - 160) > obj.y &&
                    (this.x + 30) < obj.x + obj.width &&
                    (this.y + 110) < (obj.y + obj.height);
            }
        } if (this instanceof Endboss) {
            if (obj instanceof Endboss) {
                return this.x + this.width > obj.x &&
                    this.y + this.height > obj.y &&
                    this.x < obj.x &&
                    this.y < obj.y + obj.height;
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
        if (this instanceof Character && obj instanceof Fish && this.attacking) {
            obj.energy -= 200; // finslap
        }
        if (this instanceof Character && !this.attacking && obj instanceof Fish || obj instanceof Endboss || obj instanceof JellyFish) {
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
        } if (this instanceof Character && obj instanceof Coins) {
            obj.width = 0;
            obj.x = 0;
        } if (this instanceof Character && obj instanceof Poisens) {
            obj.width = 0;
            obj.x = 0;
        } if (this instanceof BubbleObject) {
            if (obj instanceof Fish) {
                if (obj.energy > 50) {
                    obj.energy -= 50;
                    this.x = 0;
                    this.width = 0;
                    obj.animateTransition();
                } else {
                    obj.energy -= 50;
                    this.x = 0;
                    this.width = 0;
                }
            } 
            if (obj instanceof JellyFish) {
                    obj.energy -= 100;
                    this.x = 0;
                    this.width = 0;
                    // obj.animateTransition();
            }
            if (obj instanceof Endboss) {
                if (obj.energy > 0) {
                    if (world.poisenbar.bottles > 0) {
                        obj.energy -= 20;
                        this.x = 0;
                        this.width = 0;
                        obj.lastHit = new Date().getTime();
                        // obj.animateTransition();
                    } else {
                        obj.energy -= 10;
                        this.x = 0;
                        this.width = 0;
                        obj.lastHit = new Date().getTime();
                    }
                } else {
                    obj.energy === 0;
                }
            }
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead() {
        return this.energy === 0;
    }

    
}