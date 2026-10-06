function rectangularCollision({rectangle1, rectangle2}) {
    return (rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y >= rectangle2.position.y - rectangle1.height - rectangle2.height &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height
    )
}

const battle = {
    initiated: false
}

let animationId
function animate() {
    if (gameEnd) return
    animationId = window.requestAnimationFrame(animate)
    background.draw()
    if (maps.map1) {
        boundaries.forEach(boundary => {
            boundary.draw()
        })
        barriersI1L2.forEach(barriersI1L2 => {
            barriersI1L2.draw()
        })
        barriersI1Boss.forEach(barriersI1Boss => {
            barriersI1Boss.draw()
        })
        battleZonesI1L1.forEach(battleZoneI1L1 => {
            battleZoneI1L1.draw()
        })
        battleZonesI1L2.forEach(battleZoneI1L2 => {
            battleZoneI1L2.draw()
        })
        battleZonesI1L3.forEach(battleZoneI1L3 => {
            battleZoneI1L3.draw()
        })
    }
    if (maps.map2) {
        boundaries2.forEach(boundary2 => {
            boundary2.draw()
        })
        battleZonesI2L1.forEach(battleZoneI2L1 => {
            battleZoneI2L1.draw()
        })
        battleZonesI2L2.forEach(battleZoneI2L2 => {
            battleZoneI2L2.draw()
        })
        battleZonesI2L3.forEach(battleZoneI2L3 => {
            battleZoneI2L3.draw()
        })
        barriersI2L2.forEach(barriersI2L2 => {
            barriersI2L2.draw()
        })
        barriersI2Boss.forEach(barriersI2Boss => {
            barriersI2Boss.draw()
        })
    }
    if (maps.map3) {
        boundaries3.forEach(boundary3 => {
            boundary3.draw()
        })
        barriersI3L2.forEach(barriersI3L2 => {
            barriersI3L2.draw()
        })
        barriersI3Boss.forEach(barriersI3Boss => {
            barriersI3Boss.draw()
        })
        battleZonesI3L1.forEach(battleZoneI3L1 => {
            battleZoneI3L1.draw()
        })
        battleZonesI3L2.forEach(battleZoneI3L2 => {
            battleZoneI3L2.draw()
        })
        battleZonesI3L3.forEach(battleZoneI3L3 => {
            battleZoneI3L3.draw()
        })
    }

    player.draw()
    foreground.draw()
    let moving = true
    player.moving = false
    if (battle.initiated || start.charSelect) return
    if (start.gameStart === false) {
        start.gameStart = true
        dialogue.gameDialogue = true
    }
    if (dialogue.gameDialogue) return

    if (keys.w.pressed === true || keys.a.pressed === true || keys.s.pressed === true || keys.d.pressed === true) {
        if (maps.map3) {
            for (let i = 0; i < battleZonesI3L1.length; i++) {
                const battleZoneI3L1 = battleZonesI3L1[i]
                const overlappingAreaI3L1 =
                    (Math.min(
                            player.position.x + player.width,
                            battleZoneI3L1.position.x + battleZoneI3L1.width
                        ) -
                        Math.max(player.position.x, battleZoneI3L1.position.x)) *
                    (Math.min(
                            player.position.y + player.height,
                            battleZoneI3L1.position.y + battleZoneI3L1.height
                        ) -
                        Math.max(player.position.y, battleZoneI3L1.position.y))
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: battleZoneI3L1
                    }) &&
                    overlappingAreaI3L1 > (player.width * player.height) / 2
                    && Math.random() < 0.005
                ) {
                    bZone.zone1 = true
                    bZone.zone2 = false
                    bZone.zone3 = false

                    window.cancelAnimationFrame(animationId)
                    battle.initiated = true
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.2,
                                onComplete() {
                                    enemySelector()
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.2
                                    })
                                }
                            })

                        }
                    })
                    break
                }
            }

            for (let i = 0; i < battleZonesI3L2.length; i++) {
                const battleZoneI3L2 = battleZonesI3L2[i]
                const overlappingAreaI3L2 =
                    (Math.min(
                            player.position.x + player.width,
                            battleZoneI3L2.position.x + battleZoneI3L2.width
                        ) -
                        Math.max(player.position.x, battleZoneI3L2.position.x)) *
                    (Math.min(
                            player.position.y + player.height,
                            battleZoneI3L2.position.y + battleZoneI3L2.height
                        ) -
                        Math.max(player.position.y, battleZoneI3L2.position.y))
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: battleZoneI3L2
                    }) &&
                    overlappingAreaI3L2 > (player.width * player.height) / 2
                    && Math.random() < 0.005
                ) {
                    bZone.zone1 = false
                    bZone.zone2 = true
                    bZone.zone3 = false

                    window.cancelAnimationFrame(animationId)
                    battle.initiated = true
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.2,
                                onComplete() {
                                    enemySelector()
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.2
                                    })
                                }
                            })

                        }
                    })
                    break
                }
            }
            for (let i = 0; i < battleZonesI3L3.length; i++) {
                const battleZoneI3L3 = battleZonesI3L3[i]
                const overlappingAreaI3L3 =
                    (Math.min(
                            player.position.x + player.width,
                            battleZoneI3L3.position.x + battleZoneI3L3.width
                        ) -
                        Math.max(player.position.x, battleZoneI3L3.position.x)) *
                    (Math.min(
                            player.position.y + player.height,
                            battleZoneI3L3.position.y + battleZoneI3L3.height
                        ) -
                        Math.max(player.position.y, battleZoneI3L3.position.y))
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: battleZoneI3L3
                    }) &&
                    overlappingAreaI3L3 > (player.width * player.height) / 2
                    && Math.random() < 0.005
                ) {
                    bZone.zone1 = false
                    bZone.zone2 = false
                    bZone.zone3 = true

                    window.cancelAnimationFrame(animationId)
                    battle.initiated = true
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.2,
                                onComplete() {
                                    enemySelector()
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.2
                                    })
                                }
                            })

                        }
                    })
                    break
                }
            }
        }
        if (maps.map2) {
            for (let i = 0; i < battleZonesI2L1.length; i++) {
                const battleZoneI2L1 = battleZonesI2L1[i]
                const overlappingAreaI2L1 =
                    (Math.min(
                            player.position.x + player.width,
                            battleZoneI2L1.position.x + battleZoneI2L1.width
                        ) -
                        Math.max(player.position.x, battleZoneI2L1.position.x)) *
                    (Math.min(
                            player.position.y + player.height,
                            battleZoneI2L1.position.y + battleZoneI2L1.height
                        ) -
                        Math.max(player.position.y, battleZoneI2L1.position.y))
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: battleZoneI2L1
                    }) &&
                    overlappingAreaI2L1 > (player.width * player.height) / 2
                    && Math.random() < 0.005
                ) {
                    bZone.zone1 = true
                    bZone.zone2 = false
                    bZone.zone3 = false

                    window.cancelAnimationFrame(animationId)
                    battle.initiated = true
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.2,
                                onComplete() {
                                    enemySelector()
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.2
                                    })
                                }
                            })

                        }
                    })
                    break
                }
            }

            for (let i = 0; i < battleZonesI2L2.length; i++) {
                const battleZoneI2L2 = battleZonesI2L2[i]
                const overlappingAreaI2L2 =
                    (Math.min(
                            player.position.x + player.width,
                            battleZoneI2L2.position.x + battleZoneI2L2.width
                        ) -
                        Math.max(player.position.x, battleZoneI2L2.position.x)) *
                    (Math.min(
                            player.position.y + player.height,
                            battleZoneI2L2.position.y + battleZoneI2L2.height
                        ) -
                        Math.max(player.position.y, battleZoneI2L2.position.y))
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: battleZoneI2L2
                    }) &&
                    overlappingAreaI2L2 > (player.width * player.height) / 2
                    && Math.random() < 0.005
                ) {
                    bZone.zone1 = false
                    bZone.zone2 = true
                    bZone.zone3 = false

                    window.cancelAnimationFrame(animationId)
                    battle.initiated = true
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.2,
                                onComplete() {
                                    enemySelector()
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.2
                                    })
                                }
                            })

                        }
                    })
                    break
                }
            }
            for (let i = 0; i < battleZonesI2L3.length; i++) {
                const battleZoneI2L3 = battleZonesI2L3[i]
                const overlappingAreaI2L3 =
                    (Math.min(
                            player.position.x + player.width,
                            battleZoneI2L3.position.x + battleZoneI2L3.width
                        ) -
                        Math.max(player.position.x, battleZoneI2L3.position.x)) *
                    (Math.min(
                            player.position.y + player.height,
                            battleZoneI2L3.position.y + battleZoneI2L3.height
                        ) -
                        Math.max(player.position.y, battleZoneI2L3.position.y))
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: battleZoneI2L3
                    }) &&
                    overlappingAreaI2L3 > (player.width * player.height) / 2
                    && Math.random() < 0.005
                ) {
                    bZone.zone1 = false
                    bZone.zone2 = false
                    bZone.zone3 = true

                    window.cancelAnimationFrame(animationId)
                    battle.initiated = true
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.2,
                                onComplete() {
                                    enemySelector()
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.2
                                    })
                                }
                            })

                        }
                    })
                    break
                }
            }
        }
        if (maps.map1) {
            for (let i = 0; i < battleZonesI1L1.length; i++) {
                const battleZoneI1L1 = battleZonesI1L1[i]
                const overlappingAreaI1L1 =
                    (Math.min(
                            player.position.x + player.width,
                            battleZoneI1L1.position.x + battleZoneI1L1.width
                        ) -
                        Math.max(player.position.x, battleZoneI1L1.position.x)) *
                    (Math.min(
                            player.position.y + player.height,
                            battleZoneI1L1.position.y + battleZoneI1L1.height
                        ) -
                        Math.max(player.position.y, battleZoneI1L1.position.y))
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: battleZoneI1L1
                    }) &&
                    overlappingAreaI1L1 > (player.width * player.height) / 2
                    && Math.random() < 0.005
                ) {
                    bZone.zone1 = true
                    bZone.zone2 = false
                    bZone.zone3 = false

                    window.cancelAnimationFrame(animationId)
                    battle.initiated = true
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.2,
                                onComplete() {
                                    enemySelector()
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.2
                                    })
                                }
                            })

                        }
                    })
                    break
                }
            }
            for (let i = 0; i < battleZonesI1L2.length; i++) {
                const battleZoneI1L2 = battleZonesI1L2[i]
                const overlappingAreaI1L2 =
                    (Math.min(
                            player.position.x + player.width,
                            battleZoneI1L2.position.x + battleZoneI1L2.width
                        ) -
                        Math.max(player.position.x, battleZoneI1L2.position.x)) *
                    (Math.min(
                            player.position.y + player.height,
                            battleZoneI1L2.position.y + battleZoneI1L2.height
                        ) -
                        Math.max(player.position.y, battleZoneI1L2.position.y))
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: battleZoneI1L2
                    }) &&
                    overlappingAreaI1L2 > (player.width * player.height) / 2
                    && Math.random() < 0.005
                ) {
                    bZone.zone1 = false
                    bZone.zone2 = true
                    bZone.zone3 = false

                    window.cancelAnimationFrame(animationId)
                    battle.initiated = true
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.2,
                                onComplete() {
                                    enemySelector()
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.2
                                    })
                                }
                            })

                        }
                    })
                    break
                }
            }
            for (let i = 0; i < battleZonesI1L3.length; i++) {
                const battleZoneI1L3 = battleZonesI1L3[i]
                const overlappingAreaI1L3 =
                    (Math.min(
                            player.position.x + player.width,
                            battleZoneI1L3.position.x + battleZoneI1L3.width
                        ) -
                        Math.max(player.position.x, battleZoneI1L3.position.x)) *
                    (Math.min(
                            player.position.y + player.height,
                            battleZoneI1L3.position.y + battleZoneI1L3.height
                        ) -
                        Math.max(player.position.y, battleZoneI1L3.position.y))
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: battleZoneI1L3
                    }) &&
                    overlappingAreaI1L3 > (player.width * player.height) / 2
                    && Math.random() < 0.005
                ) {
                    bZone.zone1 = false
                    bZone.zone2 = false
                    bZone.zone3 = true

                    window.cancelAnimationFrame(animationId)
                    battle.initiated = true
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.2,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.2,
                                onComplete() {
                                    enemySelector()
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.2
                                    })
                                }
                            })

                        }
                    })
                    break
                }
            }
        }

    }

    if (keys.w.pressed && lastKey === 'w') {
        player.moving = true
        player.image = playerUpImage
        if (maps.map1) {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {...boundary, position: {
                                x: boundary.position.x,
                                y: boundary.position.y + speed
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
            if (barriers.I1L2 === true) {
                for (let i = 0; i < barriersI1L2.length; i++) {
                    const barrierI1L2 = barriersI1L2[i]
                    if (
                        rectangularCollision({
                            rectangle1: player,
                            rectangle2: {
                                ...barrierI1L2, position: {
                                    x: barrierI1L2.position.x,
                                    y: barrierI1L2.position.y + speed
                                }
                            }
                        })
                    ) {
                        document.getElementById('dialogue').style.opacity = '1'
                        document.getElementById('dialogue').style.pointerEvents = 'all'
                        document.getElementById('dialogueP').innerHTML = "Area is too dangerous. Reach level 15 first! <br> (click to continue)"
                        dialogue.gameDialogue = true
                        idle()
                        moving = false
                        break
                    }
                }
            }
        } else if (maps.map2) {
            for (let i = 0; i < boundaries2.length; i++) {
                const boundary = boundaries2[i]
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {...boundary, position: {
                                x: boundary.position.x,
                                y: boundary.position.y + speed
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
            if (barriers.I2L2 === true) {
                for (let i = 0; i < barriersI2L2.length; i++) {
                    const barrierI2L2 = barriersI2L2[i]
                    if (
                        rectangularCollision({
                            rectangle1: player,
                            rectangle2: {
                                ...barrierI2L2, position: {
                                    x: barrierI2L2.position.x,
                                    y: barrierI2L2.position.y + speed
                                }
                            }
                        })
                    ) {
                        document.getElementById('dialogue').style.opacity = '1'
                        document.getElementById('dialogue').style.pointerEvents = 'all'
                        document.getElementById('dialogueP').innerHTML = "A tree blocks your path. Reach level 45 first! <br> (click to continue)"
                        dialogue.gameDialogue = true
                        idle()
                        moving = false
                        break
                    }
                }
            }
        } else if (maps.map3) {
            for (let i = 0; i < boundaries3.length; i++) {
                const boundary = boundaries3[i]
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {...boundary, position: {
                                x: boundary.position.x,
                                y: boundary.position.y + speed
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
            if (barriers.I3L2 === true) {
                for (let i = 0; i < barriersI3L2.length; i++) {
                    const barrierI3L2 = barriersI3L2[i]
                    if (
                        rectangularCollision({
                            rectangle1: player,
                            rectangle2: {
                                ...barrierI3L2, position: {
                                    x: barrierI3L2.position.x,
                                    y: barrierI3L2.position.y + speed
                                }
                            }
                        })
                    ) {
                        document.getElementById('dialogue').style.opacity = '1'
                        document.getElementById('dialogue').style.pointerEvents = 'all'
                        document.getElementById('dialogueP').innerHTML = "Area is too dangerous. Reach level 75 first! <br> (click to continue)"
                        dialogue.gameDialogue = true
                        idle()
                        moving = false
                        break
                    }
                }
            }
        }

        if (moving === true) {
            movables.forEach((movable) => {
                movable.position.y += speed
            })
        }
    }
    else if (keys.a.pressed && lastKey === 'a') {
        player.moving = true
        player.image = playerLeftImage
        if (maps.map1) {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {...boundary, position: {
                                x: boundary.position.x + speed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        }
        if (maps.map2) {
            for (let i = 0; i < boundaries2.length; i++) {
                const boundary = boundaries2[i]
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {...boundary, position: {
                                x: boundary.position.x + speed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
            if (barriers.I2L2 === true) {
                for (let i = 0; i < barriersI2L2.length; i++) {
                    const barrierI2L2 = barriersI2L2[i]
                    if (
                        rectangularCollision({
                            rectangle1: player,
                            rectangle2: {
                                ...barrierI2L2, position: {
                                    x: barrierI2L2.position.x + speed,
                                    y: barrierI2L2.position.y
                                }
                            }
                        })
                    ) {
                        document.getElementById('dialogue').style.opacity = '1'
                        document.getElementById('dialogue').style.pointerEvents = 'all'
                        document.getElementById('dialogueP').innerHTML = "A tree blocks your path. Reach level 45 first! <br> (click to continue)"
                        dialogue.gameDialogue = true
                        idle()
                        moving = false
                        break
                    }
                }
            }
        }
        if (maps.map3) {
            for (let i = 0; i < boundaries3.length; i++) {
                const boundary = boundaries3[i]
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {...boundary, position: {
                                x: boundary.position.x + speed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        }

        if (moving === true) {
            movables.forEach((movable) => {
                movable.position.x += speed
            })
        }
    }

    else if (keys.s.pressed && lastKey === 's') {
        player.moving = true
        player.image = playerDownImage
        if (maps.map1) {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {...boundary, position: {
                                x: boundary.position.x,
                                y: boundary.position.y - speed
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
            if (barriers.I1Boss === true) {
                for (let i = 0; i < barriersI1Boss.length; i++) {
                    const barrierI1Boss = barriersI1Boss[i]
                    if (
                        rectangularCollision({
                            rectangle1: player,
                            rectangle2: {
                                ...barrierI1Boss, position: {
                                    x: barrierI1Boss.position.x,
                                    y: barrierI1Boss.position.y - speed
                                }
                            }
                        })
                    ) {
                        document.getElementById('dialogue').style.opacity = '1'
                        document.getElementById('dialogue').style.pointerEvents = 'all'
                        document.getElementById('dialogueP').innerHTML = "Area is too dangerous. Reach level 30 first! <br> (click to continue)"
                        dialogue.gameDialogue = true
                        idle()
                        moving = false
                        break
                    }
                }
            }
        }
        if (maps.map2) {
            for (let i = 0; i < boundaries2.length; i++) {
                const boundary = boundaries2[i]
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {...boundary, position: {
                                x: boundary.position.x,
                                y: boundary.position.y - speed
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
            if (barriers.I2Boss === true) {
                for (let i = 0; i < barriersI2Boss.length; i++) {
                    const barrierI2Boss = barriersI2Boss[i]
                    if (
                        rectangularCollision({
                            rectangle1: player,
                            rectangle2: {
                                ...barrierI2Boss, position: {
                                    x: barrierI2Boss.position.x,
                                    y: barrierI2Boss.position.y - speed
                                }
                            }
                        })
                    ) {
                        document.getElementById('dialogue').style.opacity = '1'
                        document.getElementById('dialogue').style.pointerEvents = 'all'
                        document.getElementById('dialogueP').innerHTML = "A tree blocks your path. Reach level 60 first! <br> (click to continue)"
                        dialogue.gameDialogue = true
                        idle()
                        moving = false
                        break
                    }
                }
            }
        }
        if (maps.map3) {
            for (let i = 0; i < boundaries3.length; i++) {
                const boundary = boundaries3[i]
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {...boundary, position: {
                                x: boundary.position.x,
                                y: boundary.position.y - speed
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
            if (barriers.I3Boss === true) {
                for (let i = 0; i < barriersI3Boss.length; i++) {
                    const barrierI3Boss = barriersI3Boss[i]
                    if (
                        rectangularCollision({
                            rectangle1: player,
                            rectangle2: {
                                ...barrierI3Boss, position: {
                                    x: barrierI3Boss.position.x,
                                    y: barrierI3Boss.position.y - speed
                                }
                            }
                        })
                    ) {
                        document.getElementById('dialogue').style.opacity = '1'
                        document.getElementById('dialogue').style.pointerEvents = 'all'
                        document.getElementById('dialogueP').innerHTML = "Area is too dangerous. Reach level 90 first! <br> (click to continue)"
                        dialogue.gameDialogue = true
                        idle()
                        moving = false
                        break
                    }
                }
            }
        }

        if (moving === true) {
            movables.forEach((movable) => {
                movable.position.y -= speed
            })
        }
    }

    else if (keys.d.pressed && lastKey === 'd') {
        player.moving = true
        player.image = playerRightImage
        if (maps.map1) {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {
                            ...boundary, position: {
                                x: boundary.position.x - speed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        }
        if (maps.map2) {
            for (let i = 0; i < boundaries2.length; i++) {
                const boundary = boundaries2[i]
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {...boundary, position: {
                                x: boundary.position.x - speed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
            if (barriers.I2Boss === true) {
                for (let i = 0; i < barriersI2Boss.length; i++) {
                    const barrierI2Boss = barriersI2Boss[i]
                    if (
                        rectangularCollision({
                            rectangle1: player,
                            rectangle2: {
                                ...barrierI2Boss, position: {
                                    x: barrierI2Boss.position.x - speed,
                                    y: barrierI2Boss.position.y
                                }
                            }
                        })
                    ) {
                        document.getElementById('dialogue').style.opacity = '1'
                        document.getElementById('dialogue').style.pointerEvents = 'all'
                        document.getElementById('dialogueP').innerHTML = "A tree blocks your path. Reach level 60 first! <br> (click to continue)"
                        dialogue.gameDialogue = true
                        idle()
                        moving = false
                        break
                    }
                }
            }
        }
        if (maps.map3) {
            for (let i = 0; i < boundaries3.length; i++) {
                const boundary = boundaries3[i]
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {
                            ...boundary, position: {
                                x: boundary.position.x - speed,
                                y: boundary.position.y
                            }
                        }
                    })
                ) {
                    moving = false
                    break
                }
            }
        }

        if (moving === true) {
            movables.forEach((movable) => {
                movable.position.x -= speed
            })
        }
    }

    else if (keys.none.active === true) {
        idle()
    }
}

window.onload = function() {
    checkBrowser()
    document.getElementById('titleOverlap').style.opacity = '0'
    animate();
    gsap.to('#titleOverlap', {
        opacity: 0,
        duration: 3,
        onComplete() {
            document.getElementById('titleOverlap').style.pointerEvents = 'none'
        }
    })
};
