let start = 0
let timerun = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    timerun = input.runningTime()
    basic.showNumber(0)
})
