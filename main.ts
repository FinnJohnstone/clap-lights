input.onSound(DetectedSound.Loud, function () {
    lights0n = !(lights0n)
    if (lights0n) {
        basic.showIcon(IconNames.EigthNote)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            # . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            # . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            . . # . #
            # . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            # . # . .
            # . # . .
            . . . . #
            # # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            . . # . #
            # . . . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            # . # . .
            # . # . .
            . . . . #
            # # # # .
            `)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . # #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            # . . . #
            . # # # .
            `)
    } else {
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    lights0n = !(lights0n)
    if (true) {
        basic.showString("Hello! I'm Bleep ^U^")
    }
})
let lights0n = false
input.setSoundThreshold(SoundThreshold.Loud, 200)
