import { Application, Graphics, Assets, Sprite, Container } from "pixi.js"

export class Field {
    private position: number = 0 // 後でenumにする
    private imageSprite: Sprite | null = null
    private FRONT_Y: number = 50
    private BASE_PLACE = { x: 400, y: this.FRONT_Y }
    private CARD_SIZE = { x: 63 * 2, y: 88 * 2 }
    private FRONT_MARGIN = 50
    private BACK_MARGIN = 80
    private FRONT_CARD_COLOR = 0xFF0000
    private BACK_Y: number = this.BASE_PLACE.y + this.CARD_SIZE.y + 40
    private BACK_CARD_COLOR = 0x0000FF
    private OTHER_CARD_COLOR = 0x000000
    private CLIMAX_CARD_COLOR = 0xFFFF00
    private HAND_CARD_COLOR = 0x00FF00
    private CARD_MARGIN_X = 3
    private CARD_MARGIN_Y = 4

    constructor(app: Application, position: number) {
        this.position = position
        let container = new Container()
        app.stage.addChild(container)
        // 枠を作成

        let posX: number = 0
        let posY: number = 0
        let color: number = 0
        switch (this.position) {
            case 0: // 左上フロント想定
                posX = this.BASE_PLACE.x + (this.CARD_SIZE.x + this.FRONT_MARGIN) * 0
                posY = this.FRONT_Y
                color = this.FRONT_CARD_COLOR
                break
            case 1: // 真ん中フロント想定
                posX = this.BASE_PLACE.x + (this.CARD_SIZE.x + this.FRONT_MARGIN) * 1
                posY = this.FRONT_Y
                color = this.FRONT_CARD_COLOR
                break
            case 2: // 右上フロント想定
                posX = this.BASE_PLACE.x + (this.CARD_SIZE.x + this.FRONT_MARGIN) * 2
                posY = this.FRONT_Y
                color = this.FRONT_CARD_COLOR
                break
            case 3: // 左バック想定
                posX = this.BASE_PLACE.x + 70 + (this.CARD_SIZE.x + this.BACK_MARGIN) * 0
                posY = this.BACK_Y
                color = this.BACK_CARD_COLOR
                break
            case 4: // 右バック想定
                posX = this.BASE_PLACE.x + 70 + (this.CARD_SIZE.x + this.BACK_MARGIN) * 1
                posY = this.BACK_Y
                color = this.BACK_CARD_COLOR
                break
        }
        container.addChild(
            new Graphics().rect(
                posX,
                posY,
                this.CARD_SIZE.x,
                this.CARD_SIZE.y
            ).stroke(color),
        )

        Assets.add({ alias: 'image1', src: './resources/decks/frieren/1.png' })
        Assets.load(['image1']).then(res => {
            this.imageSprite = new Sprite(res['image1'])
            this.imageSprite.scale._x = 0.3
            this.imageSprite.scale._y = 0.3
            this.imageSprite.position._x = posX + this.CARD_MARGIN_X
            this.imageSprite.position._y = posY + this.CARD_MARGIN_Y
            container.addChild(this.imageSprite)
        })
    }
}


