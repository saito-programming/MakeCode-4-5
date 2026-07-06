function ハートの明るさを変える (明るさ: number) {
    led.setBrightness(明るさ)
    basic.showIcon(IconNames.Heart)
}
input.onButtonPressed(Button.A, function () {
    ハートの明るさを変える(0)
    basic.pause(200)
    ハートの明るさを変える(50)
    basic.pause(200)
    ハートの明るさを変える(100)
    basic.pause(200)
    ハートの明るさを変える(150)
    basic.pause(200)
    ハートの明るさを変える(200)
    basic.pause(200)
    ハートの明るさを変える(250)
})
basic.showIcon(IconNames.Happy)
