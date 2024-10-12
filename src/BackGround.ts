import {Application, Graphics} from 'pixi.js'

export class BackGround {
    private FRONT_Y: number = 200
    private BASE_PLACE = {x: 400, y: this.FRONT_Y}
    private CARD_SIZE = {x: 63 * 2, y: 88 * 2}
    private FRONT_MARGIN = 50
    private BACK_MARGIN = 80
    private FRONT_CARD_COLOR = 0xFF0000
    private BACK_Y: number = this.BASE_PLACE.y + this.CARD_SIZE.y + 40
    private BACK_CARD_COLOR = 0x0000FF
    private OTHER_CARD_COLOR = 0x000000
    private CLIMAX_CARD_COLOR = 0xFFFF00
    constructor(app: Application) {
        let cardPositionList = []
        // front
        for (let i = 0; i < 3; i++) {
            cardPositionList.push(
                new Graphics().rect(
                    this.BASE_PLACE.x + (this.CARD_SIZE.x + this.FRONT_MARGIN) * i,
                    this.FRONT_Y, 
                    this.CARD_SIZE.x, 
                    this.CARD_SIZE.y
                ).stroke(this.FRONT_CARD_COLOR),
            )
        }
        // back
        for (let i = 0; i< 2; i++) {
            cardPositionList.push(
                new Graphics().rect(
                    this.BASE_PLACE.x + 70 + (this.CARD_SIZE.x + this.BACK_MARGIN) * i, 
                    this.BACK_Y, 
                    this.CARD_SIZE.x, 
                    this.CARD_SIZE.y
                ).stroke(this.BACK_CARD_COLOR),
            )
        }
        const RIGHT_X = this.BASE_PLACE.x + (this.CARD_SIZE.x + this.FRONT_MARGIN) * 3;
        cardPositionList.push(
            // memory
            new Graphics().rect(
                RIGHT_X,
                this.FRONT_Y,
                this.CARD_SIZE.y,
                this.CARD_SIZE.x
            ).stroke(this.OTHER_CARD_COLOR),
            // deck
            new Graphics().rect(
                RIGHT_X,
                this.FRONT_Y + this.CARD_SIZE.x + 20,
                this.CARD_SIZE.x,
                this.CARD_SIZE.y
            ).stroke(this.OTHER_CARD_COLOR),
            // reserve
            new Graphics().rect(
                RIGHT_X,
                this.FRONT_Y + this.CARD_SIZE.x + 20 + this.CARD_SIZE.y + 20,
                this.CARD_SIZE.x,
                this.CARD_SIZE.y
            ).stroke(this.OTHER_CARD_COLOR),
        )
        // clock
        const clockY = this.BACK_Y + this.CARD_SIZE.y + 30
        for (let i = 0; i < 7; i++) {
            cardPositionList.push(
                new Graphics().rect(
                    this.BASE_PLACE.x + 100 + i * 30, 
                    clockY, 
                    this.CARD_SIZE.x, 
                    this.CARD_SIZE.y
                ).stroke(this.OTHER_CARD_COLOR),
            )
        }
        // climax
        cardPositionList.push(
            new Graphics().rect(
                this.BASE_PLACE.x - this.CARD_SIZE.y + 30, 
                this.BACK_Y,
                this.CARD_SIZE.y,
                this.CARD_SIZE.x
            ).stroke(this.CLIMAX_CARD_COLOR)
        )
        // level
        for(let i = 0; i< 3; i++){
            cardPositionList.push(
                new Graphics().rect(
                    this.BASE_PLACE.x - this.CARD_SIZE.y + 30, 
                    this.BACK_Y + this.CARD_SIZE.x + 20 + i * 30, 
                    this.CARD_SIZE.y, 
                    this.CARD_SIZE.x
                ).stroke(this.OTHER_CARD_COLOR)
            )
        }
        // stock
        cardPositionList.push(
            new Graphics().rect(
                10,
                this.BACK_Y + 10,
                this.CARD_SIZE.y, 
                this.CARD_SIZE.x * 3, 
            ).stroke(this.OTHER_CARD_COLOR)
        )

        cardPositionList.forEach(cardPosition => {
            app.stage.addChild(cardPosition)
        });
    } 
}