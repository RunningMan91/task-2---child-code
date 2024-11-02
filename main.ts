radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1001) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(100)
        basic.showIcon(IconNames.Square)
        basic.pause(200)
        basic.showString("err")
        basic.showNumber(receivedNumber)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (UserID))
})
let UserID = 0
UserID = 101
radio.setGroup(UserID)
basic.showString("" + (UserID))
basic.forever(function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
