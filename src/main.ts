import { Application, Sprite, Assets, Graphics } from "pixi.js"
import { BackGround } from "./BackGround"
import { Field } from "./Field"

const app = new Application()
await app.init({ background: '#808080', resizeTo: window })

//new BackGround(app)
new Field(app, 0)
new Field(app, 1)
new Field(app, 2)
new Field(app, 3)
new Field(app, 4)
document.body.appendChild(app.canvas)
