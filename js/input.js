let lastKey = ''

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'Shift':
            speed = 2.5
            movementSpeed = 10
            break;
    }
})

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'Shift':
            speed = turbo
            movementSpeed = 12 - speed
            if (movementSpeed < 3) movementSpeed = 3
            break;
    }
})

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            keys.none.active = false
            speed = 2.5
            movementSpeed = 10
            break;
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            keys.none.active = false
            speed = 2.5
            movementSpeed = 10
            break;
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            keys.none.active = false
            speed = 2.5
            movementSpeed = 10
            break;
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            keys.none.active = false
            speed = 2.5
            movementSpeed = 10
            break;
        case 'W':
            keys.w.pressed = true
            lastKey = 'w'
            keys.none.active = false
            speed = turbo
            movementSpeed = 12 - speed
            if (movementSpeed < 3) movementSpeed = 3
            break;
        case 'A':
            keys.a.pressed = true
            lastKey = 'a'
            keys.none.active = false
            speed = turbo
            movementSpeed = 12 - speed
            if (movementSpeed < 3) movementSpeed = 3
            break;
        case 'S':
            keys.s.pressed = true
            lastKey = 's'
            keys.none.active = false
            speed = turbo
            movementSpeed = 12 - speed
            if (movementSpeed < 3) movementSpeed = 3
            break;
        case 'D':
            keys.d.pressed = true
            lastKey = 'd'
            keys.none.active = false
            speed = turbo
            movementSpeed = 12 - speed
            if (movementSpeed < 3) movementSpeed = 3
            break;
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            keys.none.active = true
            break;
        case 'a':
            keys.a.pressed = false
            keys.none.active = true
            break;
        case 's':
            keys.s.pressed = false
            keys.none.active = true
            break;
        case 'd':
            keys.d.pressed = false
            keys.none.active = true
            break;
        case 'W':
            keys.w.pressed = false
            keys.none.active = true
            break;
        case 'A':
            keys.a.pressed = false
            keys.none.active = true
            break;
        case 'S':
            keys.s.pressed = false
            keys.none.active = true
            break;
        case 'D':
            keys.d.pressed = false
            keys.none.active = true
            break;
    }
})
