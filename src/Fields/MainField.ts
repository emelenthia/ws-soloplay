import { Application, Container, Graphics, Assets, Sprite } from "pixi.js"
import { Field } from "../Field"

export class MainField extends Field {

    private imageSprites: Sprite | null = null

    constructor(app: Application, position: number) {
        super(app, position)
        let container = new Container()
        app.stage.addChild(container)
        switch (position) {
            case 0: // 左上フロント想定
                this.posX = this.BASE_PLACE.x + (this.CARD_SIZE.x + this.FRONT_MARGIN) * 0
                this.posY = this.FRONT_Y
                this.color = this.FRONT_CARD_COLOR
                break
            case 1: // 真ん中フロント想定
                this.posX = this.BASE_PLACE.x + (this.CARD_SIZE.x + this.FRONT_MARGIN) * 1
                this.posY = this.FRONT_Y
                this.color = this.FRONT_CARD_COLOR
                break
            case 2: // 右上フロント想定
                this.posX = this.BASE_PLACE.x + (this.CARD_SIZE.x + this.FRONT_MARGIN) * 2
                this.posY = this.FRONT_Y
                this.color = this.FRONT_CARD_COLOR
                break
            case 3: // 左バック想定
                this.posX = this.BASE_PLACE.x + 70 + (this.CARD_SIZE.x + this.BACK_MARGIN) * 0
                this.posY = this.BACK_Y
                this.color = this.BACK_CARD_COLOR
                break
            case 4: // 右バック想定
                this.posX = this.BASE_PLACE.x + 70 + (this.CARD_SIZE.x + this.BACK_MARGIN) * 1
                this.posY = this.BACK_Y
                this.color = this.BACK_CARD_COLOR
                break
        }

        if (this.direction == 0) {
            this.sizeX = this.CARD_SIZE.x
            this.sizeY = this.CARD_SIZE.y
        } else if (this.direction == 1) {
            this.sizeX = this.CARD_SIZE.y
            this.sizeY = this.CARD_SIZE.x
        }

        container.addChild(
            new Graphics().rect(
                this.posX,
                this.posY,
                this.sizeX,
                this.sizeY
            ).stroke(this.color),
        )

        Assets.add({ alias: 'image1', src: './resources/decks/frieren/1.png' })
        Assets.load(['image1']).then(res => {
            this.imageSprites = new Sprite(res['image1'])
            this.imageSprites.scale._x = 0.3
            this.imageSprites.scale._y = 0.3
            this.imageSprites.position._x = this.posX + this.CARD_MARGIN_X
            this.imageSprites.position._y = this.posY + this.CARD_MARGIN_Y
            if (this.direction == 1) {
                this.imageSprites.rotation = Math.PI / 2
                this.imageSprites.position._x = this.posX + this.CARD_SIZE.y - this.CARD_MARGIN_Y
            }
            container.addChild(this.imageSprites)
        })
    }
}