import {Application, Graphics} from 'pixi.js'

export class BackGround {
    private CARD_SIZE = {x: 63 * 2, y: 88 * 2}
    private FRONT_Y: number = 200
    private FRONT_CARD_COLOR = 0xFF0000
    private BACK_Y: number = 400
    private BACK_CARD_COLOR = 0x0000FF
    constructor(app: Application) {
        let cardPositionList = [
            // front
            new Graphics().rect(200, this.FRONT_Y, this.CARD_SIZE.x, this.CARD_SIZE.y).stroke(this.FRONT_CARD_COLOR),
            new Graphics().rect(400, this.FRONT_Y, this.CARD_SIZE.x, this.CARD_SIZE.y).stroke(this.FRONT_CARD_COLOR),
            new Graphics().rect(600, this.FRONT_Y, this.CARD_SIZE.x, this.CARD_SIZE.y).stroke(this.FRONT_CARD_COLOR),
            // back
            new Graphics().rect(300, this.BACK_Y, this.CARD_SIZE.x, this.CARD_SIZE.y).stroke(this.BACK_CARD_COLOR),
            new Graphics().rect(500, this.BACK_Y, this.CARD_SIZE.x, this.CARD_SIZE.y).stroke(this.BACK_CARD_COLOR),
        ]
        cardPositionList.forEach(cardPosition => {
            app.stage.addChild(cardPosition)
        });
    } 
}