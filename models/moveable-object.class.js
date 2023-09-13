class MoveableObject {
    x = 75;
    y = 300;
    height = 150;
    width = 100;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveUp() {

    }

    moveDown() {

    }

    moveRight() {
        console.log('Moving right')
    }

    moveLeft() {

    }
}