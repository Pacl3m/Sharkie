function loadLevel1() {
    level1 = new Level();
        level1.enemies = [
            /**
             * Represents a Fish enemy.
             *
             * @constructor
             * @param {number} - The initial x-coordinate of the object.
             * @param {number} - turnpoint of the object.
             */
            new JellyFish(480, 380, 70),
            new JellyFish(480, 280, 70),
            new JellyFish(480, 180, 70),
            new JellyFish(480, 80, 70),
            new JellyFish(1260, 380, 150),
            new JellyFish(1160, 280, 100),
            new JellyFish(1060, 180, 120),
            new JellyFish(960, 80, 90),
            new Fish(400, 230, 70),
            new Fish(700, 100, 100),
            new Fish(700, 350, 80),
            new Fish(1000, 320, 100),
            new Fish(1400, 50, 80),
            new Fish(1400, 280, 100),
            new Endboss(),
        ];
        
        level1.backgroundObjects = [
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

            new Background('img/3. Background/Legacy/Layers/5. Water/D2.png', 719 * 3),
            new Background('img/3. Background/Layers/4.Fondo 2/L2.png', 719 * 3),
            new Background('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 3),
            new Background('img/3. Background/Layers/2. Floor/D2.png', 719 * 3),
        ];

        level1.coins = [
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
        ];

        level1.poisenBottles = [
            /**
            * Represents a poisen bottle.
            * 
            * @constructor
            * @param {number} x - The initial x-coordinate of the object.
            */
            new Poisens(300),
            new Poisens(500),
            new Poisens(700),
            new Poisens(900),
            new Poisens(1100),
            new Poisens(1300),
            new Poisens(1400),
            new Poisens(1600),
            new Poisens(1700),
            new Poisens(1800),
        ];
}