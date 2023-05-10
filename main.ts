

const m1 = PCAmotor.Motors.M1
const m4 = PCAmotor.Motors.M4

let speedM1 = 0
let speedM4 = 0

input.onButtonPressed(Button.A, function() {
    speedM1 += 10
    speedM4 += 10
    radio.sendNumber(speedM1)
    radio.sendNumber(speedM4)
    basic.pause(100)
})

input.onButtonPressed(Button.B, function () {
    speedM1 -= 10
    speedM4 -= 10
    radio.sendNumber(speedM1)
    radio.sendNumber(speedM4)
    basic.pause(100)
})

input.onButtonPressed(Button.AB, function () {
    
    speedM1 = 0
    speedM4 = 0
    radio.sendNumber(speedM1)
    radio.sendNumber(speedM4)
    basic.pause(100)
})







basic.forever(function () {
    radio.setGroup(3)
})
