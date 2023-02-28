input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    if (input.temperature() > 28) {
        basic.showIcon(IconNames.Sad)
    } else if (input.temperature() >= 20 && input.temperature() < 30) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
