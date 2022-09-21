input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(x, y)
            basic.pause(200)
            led.plot(y, x)
        }
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.unplot(x, y)
            basic.pause(200)
            led.unplot(y, x)
        }
    }
})
basic.showIcon(IconNames.Angry)
