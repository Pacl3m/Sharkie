/**
 * Represents Level 1 of the game.
 * 
 * @constructor
 * @param {Fish[]} enemies - An array of Fish objects representing the enemies in the level.
 * @param {Background[]} backgroundObjects - An array of Background objects representing the level's background elements.
 * @param {Coins[]} coins - An array of Coins objects representing collectible coins in the level.
 */
const level1 = new Level(
    [
        /**
         * Represents a Fish enemy.
         *
         * @constructor
         * @param {number} - The initial x-coordinate of the object.
         * @param {number} - turnpoint of the object.
         */
        new Fish(350, 80),
        new Fish(350, 70),
        new Fish(350, 70),
        new Fish(700, 80),
        new Fish(700, 60),
        new Fish(700, 60),
        new Fish(1000, 100),
        new Fish(1000, 80),
        new Fish(1400, 80),
        new Fish(1400, 100),
        new Endboss(),
    ],
    [
        /**
         * Represents a background.
         * 
         * @constructor
         * @param {string} - the iamge-path of the object
         * @param {number} - The initial x-coordinate of the object.
         */
        new Background('img/3. Background/Legacy/Layers/5. Water/d1.png', 0),
        new Background('img/3. Background/Layers/4.Fondo 2/L1.png', 0),
        new Background('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new Background('img/3. Background/Layers/2. Floor/D1.png', 0),

        new Background('img/3. Background/Legacy/Layers/5. Water/D2.png', 719),
        new Background('img/3. Background/Layers/4.Fondo 2/L2.png', 719),
        new Background('img/3. Background/Layers/3.Fondo 1/D2.png', 719),
        new Background('img/3. Background/Layers/2. Floor/D2.png', 719),

        new Background('img/3. Background/Legacy/Layers/5. Water/d1.png', 719 * 2),
        new Background('img/3. Background/Layers/4.Fondo 2/L1.png', 719 * 2),
        new Background('img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 2),
        new Background('img/3. Background/Layers/2. Floor/D1.png', 719 * 2),

        new Background('img/3. Background/Legacy/Layers/5. Water/d2.png', 719 * 3),
        new Background('img/3. Background/Layers/4.Fondo 2/L2.png', 719 * 3),
        new Background('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 3),
        new Background('img/3. Background/Layers/2. Floor/D2.png', 719 * 3),
    ],
    [
        /**
         * Represents a coin.
         * 
         * @constructor
         * @param {number} x - The initial x-coordinate of the object.
         */
        new Coins(300),
        new Coins(500),
        new Coins(700),
        new Coins(900),
        new Coins(1100),
        new Coins(1300),
        new Coins(1400),
        new Coins(1600),
        new Coins(1700),
        new Coins(1800),
    ],
);