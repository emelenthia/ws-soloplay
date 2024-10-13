import { Application, Sprite, Assets, Graphics } from "pixi.js"
import { BackGround } from "./BackGround"
import { Field } from "./Field"
import { LevelField } from "./Fields/LevelField"
import { MainField } from "./Fields/MainField"

const app = new Application()
await app.init({ background: '#808080', resizeTo: window })

//new BackGround(app)
new LevelField(app)
new MainField(app, 0)
new MainField(app, 1)
new MainField(app, 2)
new MainField(app, 3)
new MainField(app, 4)
new Field(app, 5)
new Field(app, 6)
new Field(app, 7)
new Field(app, 8)
new Field(app, 9)
new Field(app, 11)
new Field(app, 12)
document.body.appendChild(app.canvas)
