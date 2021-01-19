light.setBrightness(10000)
while (true) {
    console.log("Light Level:" + input.lightLevel())
    console.log("Sound Level:" + input.soundLevel())
    if (input.lightLevel() > 5) {
        if (input.soundLevel() > 109) {
            light.setAll(light.rgb(255, 255, 255))
        } else {
            light.setAll(light.rgb(0, 0, 0))
        }
        
    } else {
        light.setAll(light.rgb(0, 0, 0))
    }
    
}
