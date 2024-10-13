import { Application, Graphics, Assets, Sprite, Container } from "pixi.js"

export class Field {
    private position: number = 0 // 後でenumにする
    private imageSprite: Sprite | null = null
    protected FRONT_Y: number = 50
    protected BASE_PLACE = { x: 400, y: this.FRONT_Y }
    protected CARD_SIZE = { x: 63 * 2, y: 88 * 2 }
    protected FRONT_MARGIN = 50
    protected BACK_MARGIN = 80
    protected FRONT_CARD_COLOR = 0xFF0000
    protected BACK_Y: number = this.BASE_PLACE.y + this.CARD_SIZE.y + 40
    protected BACK_CARD_COLOR = 0x0000FF
    protected OTHER_CARD_COLOR = 0x000000
    protected CLIMAX_CARD_COLOR = 0xFFFF00
    protected HAND_CARD_COLOR = 0x00FF00
    protected CARD_MARGIN_X = 3
    protected CARD_MARGIN_Y = 4
    protected posX: number = 0
    protected posY: number = 0
    protected sizeX: number = this.CARD_SIZE.x
    protected sizeY: number = this.CARD_SIZE.y
    protected color: number = 0
    protected direction: number = 0 // TODO:enumに。0がスタンド
    protected LEFT_X = this.BASE_PLACE.x - this.CARD_SIZE.y + 30
    protected RIGHT_X = this.BASE_PLACE.x + (this.CARD_SIZE.x + this.FRONT_MARGIN) * 3;
    protected clockY = this.BACK_Y + this.CARD_SIZE.y + 30

    constructor(app: Application, position: number) {
        this.position = position
        let container = new Container()
        app.stage.addChild(container)
        // 枠を作成

        switch (this.position) {
            // case 0: // 左上フロント想定
            //     this.posX = this.BASE_PLACE.x + (this.CARD_SIZE.x + this.FRONT_MARGIN) * 0
            //     this.posY = this.FRONT_Y
            //     this.color = this.FRONT_CARD_COLOR
            //     break
            // case 1: // 真ん中フロント想定
            //     this.posX = this.BASE_PLACE.x + (this.CARD_SIZE.x + this.FRONT_MARGIN) * 1
            //     this.posY = this.FRONT_Y
            //     this.color = this.FRONT_CARD_COLOR
            //     break
            // case 2: // 右上フロント想定
            //     this.posX = this.BASE_PLACE.x + (this.CARD_SIZE.x + this.FRONT_MARGIN) * 2
            //     this.posY = this.FRONT_Y
            //     this.color = this.FRONT_CARD_COLOR
            //     break
            // case 3: // 左バック想定
            //     this.posX = this.BASE_PLACE.x + 70 + (this.CARD_SIZE.x + this.BACK_MARGIN) * 0
            //     this.posY = this.BACK_Y
            //     this.color = this.BACK_CARD_COLOR
            //     break
            // case 4: // 右バック想定
            //     this.posX = this.BASE_PLACE.x + 70 + (this.CARD_SIZE.x + this.BACK_MARGIN) * 1
            //     this.posY = this.BACK_Y
            //     this.color = this.BACK_CARD_COLOR
            //     break
            case 5: // 思い出想定
                this.posX = this.RIGHT_X
                this.posY = this.FRONT_Y
                this.direction = 1
                this.color = this.OTHER_CARD_COLOR
                break
            case 6: // デッキ想定
                this.posX = this.RIGHT_X
                this.posY = this.FRONT_Y + this.CARD_SIZE.x + 20
                this.color = this.OTHER_CARD_COLOR
                break
            case 7: // 控室想定
                this.posX = this.RIGHT_X
                this.posY = this.FRONT_Y + this.CARD_SIZE.x + 20 + this.CARD_SIZE.y + 20
                this.color = this.OTHER_CARD_COLOR
                break
            case 8: // クロック想定
                this.posX = this.BASE_PLACE.x + 100
                this.posY = this.clockY
                this.sizeX = this.CARD_SIZE.x * 3
                this.sizeY = this.CARD_SIZE.y
                this.direction = 2
                this.color = this.OTHER_CARD_COLOR
                break
            case 9: // クライマックス想定
                this.posX = this.LEFT_X
                this.posY = this.BACK_Y
                this.direction = 1
                this.color = this.CLIMAX_CARD_COLOR
                break
            // case 10: // レベル想定
            //     this.posX = this.LEFT_X
            //     this.posY = this.BACK_Y + this.CARD_SIZE.x + 20
            //     this.sizeX = this.CARD_SIZE.y
            //     this.sizeY = this.CARD_SIZE.x * 2
            //     this.direction = 2
            //     this.color = this.OTHER_CARD_COLOR
            //     break
            case 11: // ストック想定
                this.posX = 0
                this.posY = this.BACK_Y + 10
                this.sizeX = this.CARD_SIZE.y
                this.sizeY = this.CARD_SIZE.x * 3
                this.direction = 2
                this.color = this.OTHER_CARD_COLOR
                break
            case 12: // ハンド想定
                this.posX = this.LEFT_X
                this.posY = this.clockY + this.CARD_SIZE.y + 50
                this.sizeX = this.CARD_SIZE.x * 5
                this.sizeY = this.CARD_SIZE.y
                this.direction = 2
                this.color = this.HAND_CARD_COLOR
                break
            default:
                return
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
            this.imageSprite = new Sprite(res['image1'])
            this.imageSprite.scale._x = 0.3
            this.imageSprite.scale._y = 0.3
            this.imageSprite.position._x = this.posX + this.CARD_MARGIN_X
            this.imageSprite.position._y = this.posY + this.CARD_MARGIN_Y
            if (this.direction == 1) {
                this.imageSprite.rotation = Math.PI / 2
                this.imageSprite.position._x = this.posX + this.CARD_SIZE.y - this.CARD_MARGIN_Y
            }
            container.addChild(this.imageSprite)
        })
    }
}


