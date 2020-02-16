namespace SpriteKind {
    export const Container = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Container, function (sprite, otherSprite) {
    music.baDing.play()
    music.magicWand.play()
    chestSprite1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 . . . . . . . . 
. . e e e e e e e e e e e . . . 
. . e e f f f f f f f e e . . . 
. . e e f f f f f f f e e . . . 
. . e e f f f f f f f e e . . . 
. . . e f f f f f f f e . . . . 
. . . . e e e e e e e . . . . . 
. . . . e e e e e e e . . . . . 
. . . . e e e e e e e . . . . . 
. . . . e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Container)
    chestSprite1.setPosition(42, 81)
    sword_lv1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . b . . . . . . . . . 
. . . . . . b . . . . . . . . . 
. . . . . . b . . . . . . . . . 
. . . . . e 2 e . . . . . . . . 
. . . . . . e . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    sword_lv1.setPosition(41, 60)
    swordcount += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("Swords: \"" + swordcount)
})
let swordcount = 0
let sword_lv1: Sprite = null
let chestSprite1: Sprite = null
scene.setBackgroundColor(15)
chestSprite1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e . . . . . . 
. . . . e e e e e e e . . . . . 
. . . f f f f 5 f f f f . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e e e e e e . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Container)
chestSprite1.setPosition(42, 81)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e e e e . . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . d d d f d d f d d d d . . 
. . . d d d d d d d d d d d . . 
. . . . d d d d d d d d d . . . 
. . . . d d d 1 1 1 d d d . . . 
. . . . . d d d d d d d . . . . 
. . . . . . d d d d d . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
