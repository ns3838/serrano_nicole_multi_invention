light.set_brightness(10000)
while True:
    print("Light Level:" + input.light_level())
    print("Sound Level:" + input.sound_level())
    if input.light_level() > 5:
        if input.sound_level() > 109:
            light.set_all(light.rgb(255,255,255))
        else:
            light.set_all(light.rgb(0,0,0))
    else:
        light.set_all(light.rgb(0,0,0))
