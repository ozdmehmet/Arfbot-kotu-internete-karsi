namespace SpriteKind {
    export const para = SpriteKind.create()
    export const çiçek = SpriteKind.create()
    export const kötüinternetinabisi = SpriteKind.create()
    export const internet = SpriteKind.create()
    export const K = SpriteKind.create()
}
let list: number[] = []
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    game.over(false, effects.melt)
})
function level_başlangıcı () {
    if (level_akımı == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else if (false) {
        tiles.setTilemap(tilemap`level5`)
    } else if (false) {
        tiles.setTilemap(tilemap`level6`)
    } else {
        tiles.setTilemap(tilemap`level7`)
    }
    tiles.placeOnRandomTile(Arfbot, assets.tile`tile`)
    for (let value of tiles.getTilesByType(assets.tile`tile`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    Arfbot.ay = 200
    scene.cameraFollowSprite(Arfbot)
    info.setLife(5)
    for (let value of list) {
    	
    }
    for (let value of tiles.getTilesByType(assets.tile`tile7`)) {
        para = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 4 4 4 4 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 5 5 4 4 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            `, SpriteKind.para)
        animation.runImageAnimation(
        para,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 4 4 4 4 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 f . . . 
            . . . f 5 4 5 5 5 5 5 5 f . . . 
            . . . f 5 4 5 5 5 5 5 5 f . . . 
            . . . f 5 4 5 5 5 5 5 5 f . . . 
            . . . f 5 4 5 5 5 5 5 5 f . . . 
            . . . f 5 4 5 5 5 5 5 5 f . . . 
            . . . . f 5 5 4 4 5 5 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . . f 5 4 5 5 f . . . . . 
            . . . . . f 5 4 5 5 f . . . . . 
            . . . . . f 5 4 5 5 f . . . . . 
            . . . . . f 5 4 5 5 f . . . . . 
            . . . . . f 5 4 5 5 f . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . f 5 5 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . . f 5 4 5 5 f . . . . . 
            . . . . . f 5 4 5 5 f . . . . . 
            . . . . . f 5 4 5 5 f . . . . . 
            . . . . . f 5 4 5 5 f . . . . . 
            . . . . . f 5 4 5 5 f . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . f 5 5 4 4 5 5 f . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . . f 5 4 5 5 5 5 f . . . . 
            . . . . f 5 4 5 5 5 5 f . . . . 
            . . . . f 5 4 5 5 5 5 f . . . . 
            . . . . f 5 4 5 5 5 5 f . . . . 
            . . . . f 5 4 5 5 5 5 f . . . . 
            . . . . . f 5 5 4 5 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 4 4 4 4 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 f . . . 
            . . . f 5 4 5 5 5 5 5 5 f . . . 
            . . . f 5 4 5 5 5 5 5 5 f . . . 
            . . . f 5 4 5 5 5 5 5 5 f . . . 
            . . . f 5 4 5 5 5 5 5 5 f . . . 
            . . . f 5 4 5 5 5 5 5 5 f . . . 
            . . . . f 5 5 4 4 5 5 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(para, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`tile9`)) {
        kötü_internet = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . 2 . . . . . . 2 . . . . 
            . . . 2 . . 2 2 2 2 . . 2 . . . 
            . . . 2 . 2 2 . . 2 2 . 2 . . . 
            . . . 2 . 2 . . . . 2 . 2 . . . 
            . . . . . 2 . 2 2 . 2 . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            `, SpriteKind.internet)
        tiles.placeOnTile(kötü_internet, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.para, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Arfbot.vy == 0) {
        Arfbot.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile5`, function (sprite, location) {
    level_akımı += 1
    level_başlangıcı()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.internet, function (sprite, otherSprite) {
    Kötü_internetin_abisi = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Kötü_internetin_abisi,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 . . . . . . . 2 . . . . 
        . . 2 . . 2 2 2 2 2 . . 2 . . . 
        . . 2 . 2 2 . . . 2 2 . 2 . . . 
        . . . . 2 . . . . . 2 . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 . . . 2 2 . . . . . 
        . . . . 2 . . . . . 2 . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 . . . 2 2 . . . . . 
        . . . . 2 . . . . . 2 . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 . . . . . . . 2 . . . . 
        . . 2 . . 2 2 2 2 2 . . 2 . . . 
        . . 2 . 2 2 . . . 2 2 . 2 . . . 
        . . . . 2 . . . . . 2 . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    1000,
    true
    )
    Kötü_internetin_abisi.setPosition(Arfbot.x + 80, Arfbot.y - 80)
    Kötü_internetin_abisi.follow(Arfbot)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    if (Arfbot.y < otherSprite.y) {
        info.changeScoreBy(1)
    } else {
    	
    }
})
let Kötü_internetin_abisi: Sprite = null
let kötü_internet: Sprite = null
let para: Sprite = null
let Arfbot: Sprite = null
let level_akımı = 0
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .................................................................................................1111111........................................................
    ...............................................................................................1111111111.......................................................
    .............................................................................................1111111111111......................................................
    ............................................................................................11111111111111......................................................
    ..........................................................................................1111111111111111......................................................
    .......................11111................................11...........................111111111111111111.....................................................
    ......................111111............................11111111.........................111111111111111111.........1111111.....................................
    .....................11111111..........................11111111111.......................111111111111111111.......1111111111111.................................
    .....................111111111......................111111111111111......................1111111111111111111....1111111111111111................................
    ....................1111111111.....................11111111111111111.....................1111111111111111111111111111111111111111...............................
    ....................11111111111...................111111111111111111....................111111111111111111111111111111111111111111..............................
    ................111111111111111..................11111111111111111111.................111111111111111111111111111111111111111111111.............................
    ............11111111111111111111................111111111111111111111...............111111111111111111111111111111111111111111111111............................
    ............1111111111111111111111............11111111111111111111111.............111111111111111111111111111111111111111111111111111...........................
    ...........11111111111111111111111111......11111111111111111111111111............1111111111111111111111111111111111111111111111111111...........111111111.......
    ...........1111111111111111111111111111111111111111111111111111111111............11111111111111111111111111111111111111111111111111111111111111111111111111.....
    ...........11111111111111111111111111111111111111111111111111111111111...........11111111111111111111111111111111111111111111111111111111111111111111111111.....
    ...........11111111111111111111111111111111111111111111111111111111111...........111111111111111111111111111111111111111111111111111111111111111111111111111....
    ............1111111111111111111111111111111111111111111111111111111111............111111111111111111111111111111111111111111111111111111111111111111111111111...
    ............111111111111111111111111111111111111111111111111111111111.............111111111111111111111111111111111111111111111111111111111111111111111111111...
    .............1111111111111111111111111111111111111111111111111111111...............11111111111111111111111111111111111111111111111111111111111111111111111111...
    ..............111111111111111111111111111111111111111111111111111....................111111111111111111111111111111111111111111111111111111111111111111111111...
    ................11111111111111111111111111111111111111111...............................11111111111111111111111111111111111111111111111111.111111111111111111...
    ....................11111111111111111111111111111111.......................................1111111111..111111111111111111111111111111111....11111111111111111...
    .....................111111111111111111111111111...............................................111111................11111111111111111........11111111111111....
    ...............................................................................................................................................11111111111......
    ...................................................................................................................................................1111.........
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .................................................6..............................................................................................................
    ................................................66..............................................................................................................
    ................................................66.........................................6..............................................................6.....
    ...............................................666.........................................6666..........................................................66.....
    ..............................................6666........................................666666........................................................66......
    ............................................666666.......................................6666666.......................................................6666.....
    ............................................6666666.....................................666666666.....................................................66666.....
    ...........................................66666666.....................................666666666....................................................6666666....
    ........................................66666666666....................................66666666666...................................................6666666....
    .......................................666666666666....................................666666666666.................................................666666666...
    .....................................666666666666666..................................66666666666666...............................................6666666666...
    .....................................666666666666666.................................6666666666666666..............................................66666666666..
    ....................................66666666666666666...............................666666666666666666666.......................................66666666666666..
    ...................................666666666666666666..............................6666666666666666666666...................................6666666666666666666.
    ..................................66666666666666666666............................66666666666666666666666666.............................6666666666666666666666.
    .................................666666666666666666666...........................6666666666666666666666666666........................666666666666666666666666666
    ...............................666666666666666666666666.........................66666666666666666666666666666...................66666666666666666666666666666666
    ..............................66666666666666666666666666.......................6666666666666666666666666666666................6666666666666666666666666666666666
    .............................666666666666666666666666666......................66666666666666666666666666666666666..........6666666666666666666666666666666666666
    ...........................6666666666666666666666666666666...................66666666666666666666666666666666666666....66666666666666666666666666666666666666666
    ..........................666666666666666666666666666666666.................666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    ........................6666666666666666666666666666666666666..............6666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    ......................66666666666666666666666666666666666666666...........66666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    ...................6666666666666666666666666666666666666666666666........666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    .................666666666666666666666666666666666666666666666666666...66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    ...............6666666666666666666666666666666666666666666666666666666.66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    .666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
level_akımı = 0
Arfbot = sprites.create(img`
    b b b . . . . . . . . b b b . . 
    b 9 b . . . . . . . . b 9 b . . 
    b b b b b b b b b b b b b b . . 
    . . b 8 9 8 8 8 8 9 8 b . . . . 
    . . b 8 8 8 8 8 8 8 8 b . . . . 
    . . b 8 6 6 6 6 6 6 8 b . . . . 
    . . b 8 8 6 6 6 6 8 8 b . . . . 
    . . b 8 8 8 8 8 8 8 8 b . . . . 
    . . b b b b b b b b b b . . . . 
    . . . . . b b b b . . . . . . . 
    . b b b b b b b b b b b b . . . 
    . b b . b b b b b b . b b . . . 
    . b b . b 9 9 9 9 b . b b . . . 
    . b b . b 9 9 9 9 b . b b . . . 
    . . . . b b b b b b . . . . . . 
    . . . . b b . . b b . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Arfbot, 100, 0)
level_başlangıcı()
