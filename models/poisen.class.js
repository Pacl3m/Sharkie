class Poisens extends MoveableObject {
    width = 40;
    height = this.width / 0.73;

    images_poisens = [
        'img/4. Marcadores/Posiขn/Animada/1.png',
        'img/4. Marcadores/Posiขn/Animada/2.png',
        'img/4. Marcadores/Posiขn/Animada/3.png',
        'img/4. Marcadores/Posiขn/Animada/4.png',
        'img/4. Marcadores/Posiขn/Animada/5.png',
        'img/4. Marcadores/Posiขn/Animada/6.png',
        'img/4. Marcadores/Posiขn/Animada/7.png',
        'img/4. Marcadores/Posiขn/Animada/8.png',
    ];

    pick_up_poisen_sound = new Audio('audio/pickUpPoisen.mp3');

    constructor(x) {
        super().loadImage('img/4. Marcadores/Posiขn/Animada/1.png');
        this.loadImages(this.images_poisens);
        this.x = x;
        this.y = 50 + Math.random() * 300;

        this.setPoisens();
    }

    setPoisens() {
        setInterval(() => {
            this.playAnimation(this.images_poisens);
        }, 200);
    }
}