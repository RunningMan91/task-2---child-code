radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1001) {
        basic.clearScreen()
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.pause(2000)
        basic.clearScreen()
    } else {
        basic.clearScreen()
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(100)
        basic.showIcon(IconNames.Square)
        basic.pause(200)
        basic.showString("err")
        basic.showNumber(receivedNumber)
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (UserID))
})
let UserID = 0
UserID = 102
radio.setGroup(UserID)
basic.showString("" + (UserID))
basic.clearScreen()
basic.forever(function () {
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
