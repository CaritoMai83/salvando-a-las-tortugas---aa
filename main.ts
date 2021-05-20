basic.forever(function () {
    while (input.temperature() > 27 && input.temperature() < 35) {
        basic.showString("T. NORMAL")
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
    }
    while (input.temperature() > 34) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.showString("T. ALTA")
        basic.pause(1000)
        basic.clearScreen()
    }
    while (input.temperature() < 26) {
        basic.showString("T. BAJA")
        basic.showIcon(IconNames.Confused)
        basic.clearScreen()
    }
})
