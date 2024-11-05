radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1001) {
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (receivedNumber == 1002) {
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            `)
    } else {
        basic.clearScreen()
        basic.showString("err")
        basic.showNumber(receivedNumber)
        basic.clearScreen()
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
