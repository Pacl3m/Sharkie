/**
 * Loads the first level of the game.
 * Creates a new instance of Level, initializes enemies, background, coins, and poisons.
 */
function loadLevel1() {
    level1 = new Level();
    createEnemies();
    createBackground();
    createCoins();
    createPoisens();
}


/**
 * Creates and initializes the enemies for Level 1.
 */
function createEnemies() {
    level1.enemies = [
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
}


/**
 * Creates and initializes the background objects for Level 1.
 */
function createBackground() {
    level1.backgroundObjects = [
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
}


/**
 * Creates and initializes the coins for Level 1.
 */
function createCoins() {
    level1.coins = [
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
}


/**
 * Creates and initializes the poison bottles for Level 1.
 */
function createPoisens() {
    level1.poisenBottles = [
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