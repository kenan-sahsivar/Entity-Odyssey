function continueDialogue() {
    if (dialogue.gameDialogue) {
        dialogue.gameDialogue = false
        document.getElementById('dialogue').style.opacity = '0'
        document.getElementById('dialogue').style.pointerEvents = 'none'
    }
}

var texty = 200
var endText = 'Entity Odyssey\n\nCongrats, this is the end.\nGame made by Kenan Sahsivar\nInspiration from Pokemon\n\nThe End.'
var lines = endText.split('\n');
var a = false

function endGame() {
    stop()
    black.draw()
    gameEnd = true
    requestAnimationFrame(scrollText);

}

function scrollText() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    black.draw();
    c.font = '30px "Press Start 2P", system-ui'
    c.fillStyle = "white";

    for (var i = 0; i < lines.length; i++) {
        var textWidth = c.measureText(lines[i]).width;
        var x = (canvas.width - textWidth) / 2;
        c.fillText(lines[i], x, texty + (i * 80));
    }

    texty -= 0.5;

    if (texty + (lines.length * 70) > 0) {
        requestAnimationFrame(scrollText);
    } else {
        if (a === false) {
            a = true
            gsap.to('#overlappingDiv', {
                opacity: 1,
            })
        }
    }
}

function stop() {
    window.cancelAnimationFrame(animationId)
}

function transitionMp2() {
    foregroundImage.src = 'Images/Maps/MapForegroundObjects2-1.png'
    image.src = 'Images/Maps/FinalMapIsland2-1.png'
    battleBackgroundImage.src = 'Images/battleBackgroundI2.png'
    maps.map1 = false
    maps.map2 = true
    maps.map3 = false
    dialogue.gameDialogue = true
    player.image = playerDownImage
    idle()
    gsap.to('#overlappingDiv', {
        opacity: 1,
        onComplete: () => {
            cancelAnimationFrame(battleAnimationID)
            gsap.to('#overlappingDiv', {
                opacity: 0
            })
            gsap.to('#battle', {
                opacity: 0,
                duration: 0
            })
        }
    })
    map2Spawn.tempX = 1600 - boundaries2[0].position.x
    map2Spawn.tempY = -975 - boundaries2[0].position.y
    movables.forEach((movable) => {
        movable.position.x += map2Spawn.tempX
        movable.position.y += map2Spawn.tempY
    })
    document.getElementById('dialogue').style.opacity = '1'
    document.getElementById('dialogue').style.pointerEvents = 'all'
    document.getElementById('dialogueP').innerHTML = "Summoned to The Forest. [Task: Reach level 45] <br> (click to continue)"
}

function transitionMp3() {
    foregroundImage.src = 'Images/Maps/MapForegroundObjects3.png'
    image.src = 'Images/Maps/FinalMapIsland3.png'
    battleBackgroundImage.src = 'Images/battleBackgroundI1.png'
    maps.map1 = false
    maps.map2 = false
    maps.map3 = true
    dialogue.gameDialogue = true
    player.image = playerDownImage
    idle()
    gsap.to('#overlappingDiv', {
        opacity: 1,
        onComplete: () => {
            cancelAnimationFrame(battleAnimationID)
            gsap.to('#overlappingDiv', {
                opacity: 0
            })
            gsap.to('#battle', {
                opacity: 0,
                duration: 0
            })
        }
    })
    map2Spawn.tempX = 1900 - boundaries3[0].position.x
    map2Spawn.tempY = -300 - boundaries3[0].position.y
    movables.forEach((movable) => {
        movable.position.x += map2Spawn.tempX
        movable.position.y += map2Spawn.tempY
    })
    document.getElementById('dialogue').style.opacity = '1'
    document.getElementById('dialogue').style.pointerEvents = 'all'
    document.getElementById('dialogueP').innerHTML = "Back where you started. Something is different. <br> [Task: Reach level 75] <br> (click to continue)"
}
function cheats(level) {
    hLevel = level
    hXP = hLevel * 100
    barriers.I1L2 = false
    barriers.I1Boss = false
    console.log('Cheats enabled: Map 1 barriers removed.')
}

function cheatsI2(level) {
    hLevel = level
    hXP = hLevel * 100
    barriers.I2L2 = false
    barriers.I2Boss = false
    foregroundImage.src = 'Images/Maps/MapForegroundObjects2-3.png'
    image.src = 'Images/Maps/FinalMapIsland2-3.png'
    console.log('Cheats enabled: Map 2 barriers removed.')
}

function setLevel(level) {
    hLevel = level
    hXP = hLevel * 100
    if (hLevel >= 15) barriers.I1L2 = false
    if (hLevel >= 30) barriers.I1Boss = false
    if (hLevel >= 45) barriers.I2L2 = false
    if (hLevel >= 60) barriers.I2Boss = false
    if (hLevel >= 75) barriers.I3L2 = false
    if (hLevel >= 90) barriers.I3Boss = false
    if (maps.map2) {
        if (barriers.I2L2 === false) {
            foregroundImage.src = 'Images/Maps/MapForegroundObjects2-2.png'
            image.src = 'Images/Maps/FinalMapIsland2-2.png'
        }
        if (barriers.I2Boss === false) {
            foregroundImage.src = 'Images/Maps/MapForegroundObjects2-3.png'
            image.src = 'Images/Maps/FinalMapIsland2-3.png'
        }
    }
}

function continueBDialogue() {
    if (eTurn === false) {
        if (tempHealth === 0) {
            hXP = hXP - eXP
            if (hXP < 100) hXP = 100
            hLevel = Math.trunc((hXP / 100))
            document.getElementById('dialogueB').innerHTML = character + " has lost the battle and dropped to level " + hLevel + "! <br> (click to leave battle)"
            cEHP = 0
            tempHealth = 1
            won = false
            bEnd = true
            lvUp = true
        } else if (cEHP === 0) {
            if (bEnd === false) {
                eXP = ((eXP * stats.xpGap) + eXP)
                document.getElementById('dialogueB').innerHTML = character + " has defeated " + enemyName + ". <br> You earned " + eXP + " XP!"
                bEnd = true
                won = true
            } else {
                if (lvUp === false) {
                    hXP = hXP + eXP
                    hLevel = Math.trunc((hXP / 100))
                    document.getElementById('dialogueB').innerHTML = character + " has leveled up to level " + hLevel + "! <br> (click to leave battle)"
                    if (hLevel >= 15) barriers.I1L2 = false
                    if (hLevel >= 30) barriers.I1Boss = false
		            if (hLevel >= 45) barriers.I2L2 = false
		            if (hLevel >= 60) barriers.I2Boss = false
                    if (hLevel >= 75) barriers.I3L2 = false
                    if (hLevel >= 90) barriers.I3Boss = false
                    if (maps.map2) {
                        if (barriers.I2L2 === false) {
                            foregroundImage.src = 'Images/Maps/MapForegroundObjects2-2.png'
                            image.src = 'Images/Maps/FinalMapIsland2-2.png'
                        }
                        if (barriers.I2Boss === false) {
                            foregroundImage.src = 'Images/Maps/MapForegroundObjects2-3.png'
                            image.src = 'Images/Maps/FinalMapIsland2-3.png'
                        }
                    }

                    lvUp = true
                } else { //end the battle
                    if (canExitBattle) {
                        canExitBattle = false
                        gsap.to('#overlappingDiv', {
                            opacity: 1,
                            onComplete: () => {
                                cancelAnimationFrame(battleAnimationID)
                                if (enemyName === 'Ironsoul') {
                                    if (won) endGame()
                                    won = false
                                }
                                gsap.to('#overlappingDiv', {
                                    opacity: 0
                                })
                                gsap.to('#battle', {
                                    opacity: 0,
                                    duration: 0
                                })
                            }
                        })
                        document.getElementById('overlappingDiv').style.opacity = '1'
                        cancelAnimationFrame(battleAnimationID)
                        animate()
                        document.getElementById('hCurrentHP').style.width = '250px'
                        document.getElementById('hDmgHP').style.width = '250px'
                        document.getElementById('eCurrentHP').style.width = '300px'
                        document.getElementById('eDmgHP').style.width = '300px'
                        battle.initiated = false
                        if (enemyName === 'Goliath') {
                            if (won) transitionMp2()
                            won = false
                        } else if (enemyName === 'Phantom') {
                            if (won) transitionMp3()
                            won = false
                        }
                    }
                }
            }
        } else {
            document.getElementById('Battledialogue').style.opacity = '0'
            document.getElementById('Battledialogue').style.pointerEvents = 'none'
        }
    } else {
        if (stun.first === false && stun.second === false) {
            if (cEHP === 0) {
                eTurn = false
                continueBDialogue()
            } else {
                enemyMove()
                eTurn = false
            }
        }
        if (stun.second === true) {
            stun.second = false
            document.getElementById('dialogueB').innerHTML = enemyName + " is regaining consciousness!"
            eTurn = false
        }
        if (stun.first === true) {
            stun.second = true
            stun.first = false
            document.getElementById('dialogueB').innerHTML = enemyName + " is unresponsive!"
            eTurn = false
        }
    }
}
