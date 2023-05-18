export default class StartMenu extends Phaser.Scene {
  constructor() {
    super("StartMenu");
  }

  create() {
    this.add.image(400, 300, "menuBackGround").setScale(0.555);
    this.add.image(400, 150, "menuTitle");
    let menuMusic = this.sound.add("menuMusic", { loop: true });
    menuMusic.play();
    let startButton = this.add.image(400, 300, "startButton").setInteractive();

    startButton.on("pointerdown", () => {
      startButton.setTexture("startButtonPressed");
    });

    startButton.on("pointerup", () => {
      menuMusic.stop();
      this.scene.start("Game");
    });

    startButton.on("pointerout", () => {
      startButton.setTexture("startButton");
    });
  }
}
