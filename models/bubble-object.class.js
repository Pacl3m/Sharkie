class BubbleObject extends MoveableObject {
    width = 30;
    height = 30;
    normalBubble = 'img/1.Sharkie/4.Attack/Bubble trap/Bubble.png';
    poisenBubble = 'img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png';

    /**
     * 
     * @param {integer} x 
     * @param {integer} y 
     */
    constructor(x, y, type) {
        if (type === 'poisen') {
            super().loadImage(this.poisenBubble);
        } else {
            super().loadImage(this.normalBubble)
        }
        this.x = x + 100;
        this.y = y + 140;
        this.throw();
    }

    /**
     * create a bubble and moved it after 120ms 7 pixel up and 1 pixel right 
     */
    throw() {
        setTimeout(() => {
            setInterval(() => {
                this.x += 7;
                this.y -= 1;
            }, 25);
        }, 120);
    }
}