import { Application, Container, Graphics, Assets, Sprite, path } from "pixi.js"
import { Field } from "../Field"

export class LevelField extends Field {

    private srcList: String[] = []

    constructor(app: Application) {
        super(app, 10)
        let container = new Container()
        app.stage.addChild(container)

        this.posX = this.LEFT_X
        this.posY = this.BACK_Y + this.CARD_SIZE.x + 20
        this.sizeX = this.CARD_SIZE.y
        this.sizeY = this.CARD_SIZE.x * 2
        this.direction = 2
        this.color = this.OTHER_CARD_COLOR

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
                sprite.rotation = Math.PI / 2;

                // Y位置を設定
                sprite.position.set(
                    this.posX + this.CARD_SIZE.y - this.CARD_MARGIN_Y,
                    this.posY + this.CARD_MARGIN_Y + this.CARD_SIZE.x * 0.5 * index // indexを使って位置を調整
                );

                container.addChild(sprite); // コンテナにスプライトを追加
            }
        })
    }
}
