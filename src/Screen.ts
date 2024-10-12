import { Application, Container } from "pixi.js";

export class Screen {
    static readonly WIDTH = 800
    static readonly HEIGHT = 480

    app: Application
    baseStage: Container

    constructor(app: Application) {
        this.app = app
        this.baseStage = new Container()
        app.stage.addChild(this.baseStage)
    }

    onClose(): void {
        this.baseStage.removeFromParent()
    }

    onNextFrame(): void {
        this.app.stage.x = window.innerWidtg / Screen.WIDTH
        this.app.stage.y = window.innerHeight / Screen.HEIGHT
    }
}