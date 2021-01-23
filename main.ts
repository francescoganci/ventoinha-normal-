input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.analogWritePin(AnalogPin.P1, 225)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
})
