import Phaser from 'phaser';

class MenuScene extends Phaser.Scene {
    constructor() {
        super('menu');
    }
    create() {
        console.log('create menuscene');
    }
}

export { MenuScene };
