class Background extends MoveableObject {
    width = 720;
    height = 480;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 0;
        this.x = x;
    }
}