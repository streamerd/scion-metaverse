import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
    constructor() {
        super('boot');
    }
    preload() {
        console.log('preload bootscene');
    }
    create() {
        this.scene.start('preload');
    }
}

export { BootScene };
