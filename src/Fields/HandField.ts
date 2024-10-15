import { Application, Container, Graphics, Assets, Sprite } from "pixi.js"
import { Field } from "../Field"

export class HandField extends Field {

    constructor(app: Application) {
        super(app, 15)

        let container = new Container()
        app.stage.addChild(container)

        this.posX = this.LEFT_X
        this.posY = this.clockY + this.CARD_SIZE.y + 50
        this.sizeX = (this.CARD_SIZE.x + this.CARD_MARGIN_X) * 6
        this.sizeY = this.CARD_SIZE.y * 2
        this.direction = 2
        this.color = this.HAND_CARD_COLOR

        container.addChild(
            new Graphics().rect(
                this.posX,
                this.posY,
                this.sizeX,
                this.sizeY
            ).stroke(this.color),
        )


        Assets.add({ alias: 'image1', src: './resources/decks/frieren/1.png' })
        Assets.add({ alias: 'image2', src: './resources/decks/frieren/2.png' })
        Assets.add({ alias: 'image3', src: './resources/decks/frieren/3.png' })

        // 画像を読み込む
        Assets.load(['image1', 'image2', 'image3']).then(() => {
            // 画像の数
            const imageCount = 3;

            // スプライトを作成するためのループ
            for (let index = 0; index < imageCount; index++) {
                const sprite = new Sprite(Assets.get(`image${index + 1}`));
                sprite.scale.set(0.3);

                // Y位置を設定
                sprite.position.set(
                    this.posX + this.CARD_MARGIN_X * (index + 1) + this.CARD_SIZE.x * index,
                    this.posY + this.CARD_MARGIN_Y
                );

                container.addChild(sprite); // コンテナにスプライトを追加
            }
        })
    }
}
