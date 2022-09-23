let strip: neopixel.Strip = null
let range: neopixel.Strip = null
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 200) {
        strip = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
        range = strip.range(0, 1)
        range.showRainbow(350, 360)
    } else if (pins.analogReadPin(AnalogPin.P1) < 400) {
        strip = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
        range = strip.range(0, 2)
        range.showRainbow(350, 360)
    } else if (pins.analogReadPin(AnalogPin.P1) < 600) {
        strip = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
        range = strip.range(0, 3)
        range.showRainbow(350, 360)
    } else if (pins.analogReadPin(AnalogPin.P1) < 800) {
        strip = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
        range = strip.range(0, 4)
        range.showRainbow(350, 360)
    } else if (pins.analogReadPin(AnalogPin.P1) < 900) {
        strip = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
        range = strip.range(0, 5)
        range.showRainbow(350, 360)
    } else if (pins.analogReadPin(AnalogPin.P1) < 1000) {
        strip = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
        range = strip.range(0, 6)
        range.showRainbow(350, 360)
    } else if (pins.analogReadPin(AnalogPin.P1) < 1023) {
        strip = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
        range = strip.range(0, 7)
        range.showRainbow(350, 360)
    }
})
