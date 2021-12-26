import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {
    constructor() {
        super('preload');
    }
    preload() {
        // ...
    }
    create() {
        this.scene.start('menu');
    }
}

export { PreloadScene };
