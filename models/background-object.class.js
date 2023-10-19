class Background extends MoveableObject {
    width = 720;
    height = 480;

    /**
    * Creates an instance of Background.
    * @param {string} imagePath - The path to the image.
    * @param {number} x - The initial x-coordinate of the object.
    */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 0;
        this.x = x;
    }
}