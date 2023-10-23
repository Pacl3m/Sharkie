class Poisens extends MoveableObject {
    width = 40;
    height = this.width / 0.73;

    IMAGES_POISEN = [
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

    /**
    * Constructor for creating a Poison object.
    * @constructor
    * @param {number} x - The x-coordinate of the Poison object.
    */
    constructor(x) {
        super().loadImage('img/4. Marcadores/Posiขn/Animada/1.png');
        this.loadImages(this.IMAGES_POISEN);
        this.x = x;
        this.y = 50 + Math.random() * 300;

        this.setPoisens();
    }

    
    /**
    * Sets up the animation for the Poison object.
    * @returns {void}
    */
    setPoisens() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_POISEN);
        }, 200);
    }
}