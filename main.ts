input.onButtonPressed(Button.A, function () {
    Jugador_arriba.change(LedSpriteProperty.Y, -1)
    Jugador_abajo.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    Jugador_arriba.change(LedSpriteProperty.Y, 1)
    Jugador_abajo.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
	
})
let Jugador_abajo: game.LedSprite = null
let Jugador_arriba: game.LedSprite = null
Jugador_arriba = game.createSprite(1, 3)
Jugador_abajo = game.createSprite(1, 4)
let Objeto = game.createSprite(4, 4)
basic.forever(function () {
    Objeto.change(LedSpriteProperty.X, -1)
    basic.pause(500)
    if (Objeto.get(LedSpriteProperty.X) == 0) {
        Objeto.set(LedSpriteProperty.X, 4)
    }
})
