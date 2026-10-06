function idle() {
    // playerRight spritesheet uses frame 1 as the idle pose
    if (player.image === playerRightImage) player.frames.val = 1
    else player.frames.val = 0
}

const collisionsMap = [];
for (let i = 0; i < collisions.length; i+= 80) {
    collisionsMap.push(collisions.slice(i, 80 + i))
}
const collisions2Map = [];
for (let i = 0; i < collisions2.length; i+= 80) {
    collisions2Map.push(collisions2.slice(i, 80 + i))
}
const collisions3Map = [];
for (let i = 0; i < collisions3.length; i+= 80) {
    collisions3Map.push(collisions3.slice(i, 80 + i))
}

const barrierI1L2Map = [];
for (let i = 0; i < barrierI1L2ZoneData.length; i+= 80) {
    barrierI1L2Map.push(barrierI1L2ZoneData.slice(i, 80 + i))
}
const barrierI1BossMap = [];
for (let i = 0; i < barrierBossI1L3Data.length; i+= 80) {
    barrierI1BossMap.push(barrierBossI1L3Data.slice(i, 80 + i))
}

const barrierI2L2Map = [];
for (let i = 0; i < barrierI2L2ZoneData.length; i+= 80) {
    barrierI2L2Map.push(barrierI2L2ZoneData.slice(i, 80 + i))
}
const barrierI2BossMap = [];
for (let i = 0; i < barrierBossI2L3Data.length; i+= 80) {
    barrierI2BossMap.push(barrierBossI2L3Data.slice(i, 80 + i))
}

const barrierI3L2Map = [];
for (let i = 0; i < barrierI3L2ZoneData.length; i+= 80) {
    barrierI3L2Map.push(barrierI3L2ZoneData.slice(i, 80 + i))
}
const barrierI3BossMap = [];
for (let i = 0; i < barrierBossI3L3Data.length; i+= 80) {
    barrierI3BossMap.push(barrierBossI3L3Data.slice(i, 80 + i))
}

const battleZoneI1L1Map = [];
for (let i = 0; i < battlezoneI1L1Data.length; i+= 80) {
    battleZoneI1L1Map.push(battlezoneI1L1Data.slice(i, 80 + i))
}
const battleZoneI1L2Map = [];
for (let i = 0; i < battlezoneI1L2Data.length; i+= 80) {
    battleZoneI1L2Map.push(battlezoneI1L2Data.slice(i, 80 + i))
}
const battleZoneI1L3Map = [];
for (let i = 0; i < battlezoneI1L3Data.length; i+= 80) {
    battleZoneI1L3Map.push(battlezoneI1L3Data.slice(i, 80 + i))
}

const battleZoneI2L1Map = [];
for (let i = 0; i < battlezoneI2L1Data.length; i+= 80) {
    battleZoneI2L1Map.push(battlezoneI2L1Data.slice(i, 80 + i))
}
const battleZoneI2L2Map = [];
for (let i = 0; i < battlezoneI2L2Data.length; i+= 80) {
    battleZoneI2L2Map.push(battlezoneI2L2Data.slice(i, 80 + i))
}
const battleZoneI2L3Map = [];
for (let i = 0; i < battlezoneI2L3Data.length; i+= 80) {
    battleZoneI2L3Map.push(battlezoneI2L3Data.slice(i, 80 + i))
}

const battleZoneI3L1Map = [];
for (let i = 0; i < battlezoneI3L1Data.length; i+= 80) {
    battleZoneI3L1Map.push(battlezoneI3L1Data.slice(i, 80 + i))
}
const battleZoneI3L2Map = [];
for (let i = 0; i < battlezoneI3L2Data.length; i+= 80) {
    battleZoneI3L2Map.push(battlezoneI3L2Data.slice(i, 80 + i))
}
const battleZoneI3L3Map = [];
for (let i = 0; i < battlezoneI3L3Data.length; i+= 80) {
    battleZoneI3L3Map.push(battlezoneI3L3Data.slice(i, 80 + i))
}

const boundaries = []
const barriersI1L2 = []
const barriersI1Boss = []
const battleZonesI1L1 = []
const battleZonesI1L2 = []
const battleZonesI1L3 = []

const boundaries2 = []
const battleZonesI2L1 = []
const battleZonesI2L2 = []
const battleZonesI2L3 = []
const barriersI2L2 = []
const barriersI2Boss = []

const boundaries3 = []
const battleZonesI3L1 = []
const battleZonesI3L2 = []
const battleZonesI3L3 = []
const barriersI3L2 = []
const barriersI3Boss = []

const offset = {
    x: -500.5,
    y: -340.5
}

barrierI1L2Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) {
            barriersI1L2.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})

barrierI2L2Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1625) {
            barriersI2L2.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})

barrierI3L2Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) {
            barriersI3L2.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})

barrierI1BossMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) {
            barriersI1Boss.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})

barrierI2BossMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1625) {
            barriersI2Boss.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})

barrierI3BossMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) {
            barriersI3Boss.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) {
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})

collisions2Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1625) {
            boundaries2.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})

collisions3Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) {
            boundaries3.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})

battleZoneI1L1Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) {
            battleZonesI1L1.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})
battleZoneI2L1Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1625) {
            battleZonesI2L1.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})
battleZoneI3L1Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) {
            battleZonesI3L1.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})
battleZoneI1L2Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) {
            battleZonesI1L2.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})
battleZoneI2L2Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1625) {
            battleZonesI2L2.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})
battleZoneI3L2Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) {
            battleZonesI3L2.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})
battleZoneI1L3Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) {
            battleZonesI1L3.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})
battleZoneI2L3Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1625) {
            battleZonesI2L3.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})
battleZoneI3L3Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) {
            battleZonesI3L3.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y,
                    }
                })
            )
        }
    })
})

const image = new Image();
image.src = 'Images/Maps/FinalMapIsland.png'

const foregroundImage = new Image();
foregroundImage.src = 'Images/Maps/MapForegroundObjects.png'

const playerDownImage = new Image()
playerDownImage.src = 'Images/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = 'Images/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = 'Images/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = 'Images/playerRight.png'

const blackImage = new Image()
blackImage.src = 'Images/Black.png'

const player = new Sprite({
    position: {
        x: canvas.width / 2 - (192 / 4) / 2,
        y: canvas.height / 2 - 68 / 2
    },
    image: playerDownImage,
    frames: {
        max: 4
    }
})

const background = new Sprite(
    {
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
})

const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: foregroundImage
})

const black = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: blackImage

})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
    none: {
        active: true
    }
}

const movables = [background, ...boundaries, ...boundaries2, ...boundaries3, foreground, ...battleZonesI1L1, ...battleZonesI2L1, ...battleZonesI3L1, ...battleZonesI1L2, ...battleZonesI2L2, ...battleZonesI3L2, ...battleZonesI1L3, ...battleZonesI2L3, ...battleZonesI3L3, ...barriersI1L2, ...barriersI1Boss, ...barriersI2L2, ...barriersI2Boss, ...barriersI3L2, ...barriersI3Boss]
