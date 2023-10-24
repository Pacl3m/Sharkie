class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;

    /**
    * Loads an image from the specified path.
    * @param {string} path - The path to the image.
    * @returns {void}
    */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
    * Loads multiple images from an array of paths and stores them in the image cache.
    * @param {string[]} arr - An array of image paths.
    * @returns {void}
    */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    /**
    * Draws a blue outlined rectangle using the provided 2D context.
    * @param {CanvasRenderingContext2D} ctx - The 2D context of the canvas.
    * @returns {void}
    */
    drawLine(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
    }


    /**
    * Draws a frame around the object using the provided 2D context.
    * @param {CanvasRenderingContext2D} ctx - The 2D context of the canvas.
    * @returns {void}
    */
    drawFrame(ctx) {
        if (this instanceof Character) {
            this.drawLine(ctx);
            ctx.rect(this.x + 40, this.y + 120, this.width - 75, this.height - 170);
            ctx.stroke();
        }
        if (this instanceof Endboss) {
            this.drawLine(ctx);
            ctx.rect(this.x + 20, this.y + 150, this.width - 30, this.height - 230);
            ctx.stroke();
        }
        if (this instanceof Fish) {
            this.drawLine(ctx);
            ctx.rect(this.x, this.y, this.width, this.height - 15);
            ctx.stroke();
        }
        if (this instanceof JellyFish || this instanceof Coins || this instanceof Poisens) {
            this.drawLine(ctx);
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}