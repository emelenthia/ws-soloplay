import { Application, Sprite, Assets, Graphics } from "pixi.js"
import {BackGround} from "./BackGround"

let imageSprite: Sprite|null = null

const app = new Application()
await app.init({ background: '#808080', resizeTo: window})

Assets.add({alias: 'image1', src: './resources/decks/frieren/1.png'})
Assets.load(['image1']).then(res => {
  imageSprite = new Sprite(res['image1'])
  imageSprite.scale._x = 0.5
  imageSprite.scale._y = 0.5
  imageSprite.anchor.set(0.5); // 中心に揃える
  app.stage.addChild(imageSprite)
})
new BackGround(app)
document.body.appendChild(app.canvas)
