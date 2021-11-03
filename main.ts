basic.forever(function () {
    if (input.lightLevel() < 40) {
        basic.showNumber(1)
    } else if (input.lightLevel() < 60) {
        basic.showNumber(2)
    } else if (input.lightLevel() < 80) {
        basic.showNumber(3)
    } else if (input.lightLevel() < 100) {
        basic.showNumber(4)
    } else if (input.lightLevel() > 120) {
        basic.showNumber(5)
    }
})
