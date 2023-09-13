class MoveableObject {
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