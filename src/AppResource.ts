import { Assets, Spritesheet } from "pixi.js"

const ALL_RESROUCE_COUNT = 1

let loadedResourceCount = 0

export let spritesheet: Spritesheet|null = null

let progressFunc: (allCount: number, finishCount: number) => void

export function load(progressCallback: (allCount: number, finishCount: number) => void) {
    progressFunc = progressCallback
    Assets.load('resrouces/decks/frieren/deck.json').then(sheet => {
        spritesheet = sheet
        onLoadResource()
    })
}

function onLoadResource(){
    loadedResourceCount++
    progressFunc(ALL_RESROUCE_COUNT, loadedResourceCount)
}