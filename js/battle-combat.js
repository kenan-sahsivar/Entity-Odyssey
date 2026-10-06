const battleBackgroundImage = new Image()
battleBackgroundImage.src = 'Images/battleBackgroundI1.png'
const battleBackground = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: battleBackgroundImage
})
var insanity = false
var enemyName = ''
var rNum = 0
var hLevel = 1
var eLevel = 1
var health = {
    eRatio: 0,
    eTotalHP: 0,
    hRatio: 0,
    hTotalHP: 0
}
var eDmg = 0
var hDmg = 0
var cEHP = 0
var eDef = 0
var eXP = 0
var hXP = 100
var tempDef = 0
var tempHealth
var tGas = false
var extraDmg = 0
var stun = {
    first: false,
    second: false
}
var superSaturated = false
var disabled = false
var shuffleS = false

const enemyImage = new Image()
enemyImage.src = 'Images/Characters/Enemy/SoldierI.png'
const enemy = new Sprite({
    position: {
        x: 600,
        y: 100
    },
    image: enemyImage
})

const heroImage = new Image()
heroImage.src = 'Images/Characters/Mage/MageBSprite.png'
const hero = new Sprite({
    position: {
        x: 275,
        y: 245
    },
    image: heroImage
})

function moveDesRes() {
    document.getElementById('moveDes').innerText = 'Choose a move to use!'
}
function hMove(moveN) {
    document.getElementById('Battledialogue').style.opacity = '1'
    document.getElementById('Battledialogue').style.pointerEvents = 'all'
    if (moveN === 1) {
        if (character === 'Brute') {
            hDmg = Math.round(((stats.baseDmg1 * hLevel * 0.01) + stats.baseDmg1) - eDef)
            if (hDmg < 0) hDmg = 0
            cEHP = cEHP - hDmg
            if (cEHP < 0) cEHP = 0
            document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move1 + " and deals " + hDmg + " damage!"
            document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
            document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
            eTurn = true
        }
        if (character === 'Mage') {
            hDmg = Math.round(((stats.baseDmg1 * hLevel * 0.01) + stats.baseDmg1) - eDef)
            if (hDmg < 0) hDmg = 0
            cEHP = cEHP - hDmg
            if (cEHP < 0) cEHP = 0
            document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move1 + " and deals " + hDmg + " damage!"
            document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
            document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
            eTurn = true
        }
        if (character === 'Jester') {
            hDmg = Math.round(((stats.baseDmg1 * hLevel * 0.01) + stats.baseDmg1) - eDef)
            if (hDmg < 0) hDmg = 0
            cEHP = cEHP - hDmg
            if (cEHP < 0) cEHP = 0
            document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move1 + " and deals " + hDmg + " damage!"
            document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
            document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
            eTurn = true
        }
    } else if (moveN === 2) {
        if (character === 'Brute') {
            rNum = Math.random()
            if (rNum > 0.5) {
                hDmg = Math.round(((stats.baseDmg2 * hLevel * 0.01) + stats.baseDmg2) - eDef)
                if (hDmg < 0) hDmg = 0
                cEHP = cEHP - hDmg
                if (cEHP < 0) cEHP = 0
                document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move2 + " and deals " + hDmg + " damage!"
                document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
                document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
                eTurn = true
            } else {
                document.getElementById('dialogueB').innerHTML = character + "'s Axe Swipe missed!"
                hDmg = 0
                eTurn = true
            }
        }
        if (character === 'Mage') {
            rNum = Math.random()
            if (rNum < 0.8) {
                hDmg = Math.round(((stats.baseDmg2 * hLevel * 0.01) + stats.baseDmg2) - eDef)
                if (hDmg < 0) hDmg = 0
                cEHP = cEHP - hDmg
                if (cEHP < 0) cEHP = 0
                document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move2 + " and deals " + hDmg + " damage!"
                document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
                document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
                eTurn = true
            } else {
                document.getElementById('dialogueB').innerHTML = character + "'s Orb Blast missed!"
                hDmg = 0
                eTurn = true
            }
        }
        if (character === 'Jester') {
            rNum = Math.random()
            if (rNum < 0.8) {
                hDmg = Math.round(((stats.baseDmg2 * hLevel * 0.01) + stats.baseDmg2) - eDef)
                if (hDmg < 0) hDmg = 0
                cEHP = cEHP - hDmg
                if (cEHP < 0) cEHP = 0
                document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move2 + " and deals " + hDmg + " damage!"
                document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
                document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
                eTurn = true
            } else {
                document.getElementById('dialogueB').innerHTML = character + "'s Ace of Blades missed!"
                hDmg = 0
                eTurn = true
            }
        }
    } else if (moveN === 3) {
        if (character === 'Brute') {
            hDmg = 0
            tempDef = tempDef + (5 * 0.05 * hLevel) + 5
            tempHealth = tempHealth + 50
            if (tempHealth > ((stats.baseHealth * hLevel * 0.01) + stats.baseHealth)) {
                if (tempDef > (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 15) {
                    tempHealth = ((stats.baseHealth * hLevel * 0.01) + stats.baseHealth)
                    tempDef = (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 15
                    document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move3 + " but has max health and defense!"
                    document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                    document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                    eTurn = true
                } else {
                    tempHealth = ((stats.baseHealth * hLevel * 0.01) + stats.baseHealth)
                    document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move3 + " and raises defense! (maxed health)"
                    document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                    document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                    eTurn = true
                }
            } else if (tempDef > (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 15) {
                tempDef = (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 15
                document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move3 + " and raises health! (maxed defense)"
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            } else {
                document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move3 + " and raises health and defense!"
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            }
        }
        if (character === 'Mage') {
            rNum = Math.random()
            if (rNum < 0.05) {
                hDmg = cEHP
                cEHP = cEHP - hDmg
                if (cEHP < 0) cEHP = 0
                document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move3 + " and obliterates the enemy!"
                document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
                document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
                eTurn = true
            } else {
                document.getElementById('dialogueB').innerHTML = character + "'s Incinerate failed!"
                eTurn = true
            }
        }
        if (character === 'Jester') {
            rNum = Math.random()
            if (rNum < 0.66) {
                tempDef = tempDef + (5 * 0.05 * hLevel) + 5
                hDmg = Math.round(((stats.baseDmg2 * hLevel * 0.01) + stats.baseDmg3) - eDef)
                cEHP = cEHP - hDmg
                if (cEHP < 0) cEHP = 0
                if (tempDef > (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 15) {
                    tempDef = (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 15
                    document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move3 + " and deals " + hDmg + " damage! (max defense)"
                    document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
                    document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
                    eTurn = true
                } else {
                    document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move3 + " and deals " + hDmg + " damage! (raised defense)"
                    document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
                    document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
                    eTurn = true
                }
            } else {
                document.getElementById('dialogueB').innerHTML = character + "'s Evasive Juggling failed!"
                hDmg = 0
                eTurn = true
            }
        }
    } else if (moveN === 4) {
        if (character === 'Brute') {
            rNum = Math.random()
            if (rNum < 0.66) {
                hDmg = 0
                stun.first = true
                document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move4 + " and immobilizes " + enemyName + "!"
                eTurn = true
            } else {
                document.getElementById('dialogueB').innerHTML = character + "'s Stun missed!"
                hDmg = 0
                eTurn = true
            }
        }
        if (character === 'Mage') {
            rNum = Math.random()
            if (rNum < 0.5) {
                hDmg = 0
                tempDef = tempDef + (5 * 0.05 * hLevel) + 10
                tempHealth = tempHealth + 150
                if (tempHealth > ((stats.baseHealth * hLevel * 0.01) + stats.baseHealth)) {
                    if (tempDef > (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 25) {
                        tempHealth = ((stats.baseHealth * hLevel * 0.01) + stats.baseHealth)
                        tempDef = (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 15
                        document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move4 + " but has max health and defense!"
                        document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                        document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                        eTurn = true
                    } else {
                        tempHealth = ((stats.baseHealth * hLevel * 0.01) + stats.baseHealth)
                        document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move4 + " and raises defense! (maxed health)"
                        document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                        document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                        eTurn = true
                    }
                } else if (tempDef > (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 25) {
                    tempDef = (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 25
                    document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move4 + " and raises health! (maxed defense)"
                    document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                    document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                    eTurn = true
                } else {
                    document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move4 + " and raises health and defense!"
                    document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                    document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                    eTurn = true
                }
            } else {
                document.getElementById('dialogueB').innerHTML = character + "'s Aura Heal missed!"
                hDmg = 0
                eTurn = true
            }

        }
        if (character === 'Jester') {
            rNum = Math.random()
            hDmg = 0
            if (rNum < 0.4) {
                tempDef = tempDef + eDef
                superSaturated = true //you have more than maximum defense (broken strategies incoming)
                eDef = 0
                document.getElementById('dialogueB').innerHTML = character + " uses the move " + moves.move4 + " and steals all the enemies defense!"
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            } else {
                document.getElementById('dialogueB').innerHTML = character + "'s Distraction missed!"
                hDmg = 0
                eTurn = true
            }
        }
    }
}

function enemySelector() {
    if (maps.map1) {
        if (bZone.zone1) {
            rNum = Math.random()
            if (rNum < 0.2) {
                eLevel = 1
            } else if (rNum < 0.4) {
                eLevel = 3
            } else if (rNum < 0.6) {
                eLevel = 5
            } else if (rNum < 0.8) {
                eLevel = 7
            } else {
                eLevel = 9
            }
            health.eTotalHP = (eStats.Soldier.baseHealth * eLevel * 0.01) + eStats.Soldier.baseHealth
            health.eRatio = health.eTotalHP / 300
            cEHP = health.eTotalHP
            eDef = eStats.Soldier.baseDef + (eStats.Soldier.baseDef * eLevel * 0.01)
            eXP = eStats.Soldier.xp
            enemyImage.src = 'Images/Characters/Enemy/SoldierI.png'
            enemyName = 'Soldier'
            document.getElementById('eName').innerHTML = "Soldier"
        } else if (bZone.zone2) {
            rNum = Math.random()
            if (rNum < 0.4) {
                rNum = Math.random()
                if (rNum < 0.2) {
                    eLevel = 16
                } else if (rNum < 0.4) {
                    eLevel = 18
                } else if (rNum < 0.6) {
                    eLevel = 20
                } else if (rNum < 0.8) {
                    eLevel = 22
                } else {
                    eLevel = 24
                }
                health.eTotalHP = (eStats.AdvSoldier.baseHealth * eLevel * 0.01) + eStats.AdvSoldier.baseHealth
                health.eRatio = health.eTotalHP / 300
                cEHP = health.eTotalHP
                eDef = eStats.AdvSoldier.baseDef + (eStats.AdvSoldier.baseDef * eLevel * 0.01)
                eXP = eStats.AdvSoldier.xp
                enemyImage.src = 'Images/Characters/Enemy/SoldierI.png'
                enemyName = 'Advanced Soldier'
                document.getElementById('eName').innerHTML = "Adv.Soldier"
            } else if (rNum >= 0.4) {
                rNum = Math.random()
                if (rNum < 0.2) {
                    eLevel = 16
                } else if (rNum < 0.4) {
                    eLevel = 18
                } else if (rNum < 0.6) {
                    eLevel = 20
                } else if (rNum < 0.8) {
                    eLevel = 22
                } else {
                    eLevel = 24
                }
                health.eTotalHP = (eStats.AdvGasman.baseHealth * eLevel * 0.01) + eStats.AdvGasman.baseHealth
                health.eRatio = health.eTotalHP / 300
                cEHP = health.eTotalHP
                eDef = eStats.AdvGasman.baseDef + (eStats.AdvGasman.baseDef * eLevel * 0.01)
                eXP = eStats.AdvGasman.xp
                enemyImage.src = "Images/Characters/Enemy/SoldierII.png"
                enemyName = 'Advanced Gasman'
                document.getElementById('eName').innerHTML = "Adv.Gasman"
            }
        } else if (bZone.zone3) {
            eLevel = 25
            health.eTotalHP = (eStats.Goliath.baseHealth * eLevel * 0.01) + eStats.Goliath.baseHealth
            health.eRatio = health.eTotalHP / 300
            cEHP = health.eTotalHP
            eDef = eStats.Goliath.baseDef
            eXP = eStats.Goliath.xp
            enemyImage.src = 'Images/Characters/Enemy/GoliathBoss.png'
            enemyName = 'Goliath'
            document.getElementById('eName').innerHTML = "Goliath"
        }
    }
    if (maps.map2) {
        if (bZone.zone1) {
            rNum = Math.random()
            if (rNum < 0.2) {
                eLevel = 31
            } else if (rNum < 0.4) {
                eLevel = 33
            } else if (rNum < 0.6) {
                eLevel = 35
            } else if (rNum < 0.8) {
                eLevel = 37
            } else {
                eLevel = 39
            }
            health.eTotalHP = (eStats.Skeleton.baseHealth * eLevel * 0.01) + eStats.Skeleton.baseHealth
            health.eRatio = health.eTotalHP / 300
            cEHP = health.eTotalHP
            eDef = eStats.Skeleton.baseDef + (eStats.Skeleton.baseDef * eLevel * 0.01)
            eXP = eStats.Skeleton.xp
            enemyImage.src = 'Images/Characters/Enemy/SkeletonI.png'
            enemyName = 'Skeleton'
            document.getElementById('eName').innerHTML = "Skeleton"
        } else if (bZone.zone2) {
            rNum = Math.random()
            if (rNum < 0.3) {
                rNum = Math.random()
                if (rNum < 0.2) {
                    eLevel = 46
                } else if (rNum < 0.4) {
                    eLevel = 48
                } else if (rNum < 0.6) {
                    eLevel = 50
                } else if (rNum < 0.8) {
                    eLevel = 52
                } else {
                    eLevel = 54
                }
                health.eTotalHP = (eStats.AdvSkeleton.baseHealth * eLevel * 0.01) + eStats.AdvSkeleton.baseHealth
                health.eRatio = health.eTotalHP / 300
                cEHP = health.eTotalHP
                eDef = eStats.AdvSkeleton.baseDef + (eStats.AdvSkeleton.baseDef * eLevel * 0.01)
                eXP = eStats.AdvSkeleton.xp
                enemyImage.src = 'Images/Characters/Enemy/SkeletonI.png'
                enemyName = 'Advanced Skeleton'
                document.getElementById('eName').innerHTML = "Adv.Skeleton"
            } else if (rNum >= 0.3) {
                rNum = Math.random()
                if (rNum < 0.2) {
                    eLevel = 46
                } else if (rNum < 0.4) {
                    eLevel = 48
                } else if (rNum < 0.6) {
                    eLevel = 50
                } else if (rNum < 0.8) {
                    eLevel = 52
                } else {
                    eLevel = 54
                }
                health.eTotalHP = (eStats.AdvSpecter.baseHealth * eLevel * 0.01) + eStats.AdvSpecter.baseHealth
                health.eRatio = health.eTotalHP / 300
                cEHP = health.eTotalHP
                eDef = eStats.AdvSpecter.baseDef + (eStats.AdvSpecter.baseDef * eLevel * 0.01)
                eXP = eStats.AdvSpecter.xp
                enemyImage.src = "Images/Characters/Enemy/SkeletonII.png"
                enemyName = 'Advanced Specter'
                document.getElementById('eName').innerHTML = "Adv.Specter"
            }
        } else if (bZone.zone3) {
            eLevel = 60
            health.eTotalHP = (eStats.Phantom.baseHealth * eLevel * 0.01) + eStats.Phantom.baseHealth
            health.eRatio = health.eTotalHP / 300
            cEHP = health.eTotalHP
            eDef = eStats.Phantom.baseDef
            eXP = eStats.Phantom.xp
            enemyImage.src = 'Images/Characters/Enemy/PhantomBoss.png'
            enemyName = 'Phantom'
            document.getElementById('eName').innerHTML = "Phantom"
        }
    }
    if (maps.map3) {
        if (bZone.zone1) {
            rNum = Math.random()
            if (rNum < 0.5) {
                rNum = Math.random()
                if (rNum < 0.2) {
                    eLevel = 61
                } else if (rNum < 0.4) {
                    eLevel = 63
                } else if (rNum < 0.6) {
                    eLevel = 65
                } else if (rNum < 0.8) {
                    eLevel = 67
                } else {
                    eLevel = 69
                }
                health.eTotalHP = (eStats.EltSkeleton.baseHealth * eLevel * 0.01) + eStats.EltSkeleton.baseHealth
                health.eRatio = health.eTotalHP / 300
                cEHP = health.eTotalHP
                eDef = eStats.EltSkeleton.baseDef + (eStats.EltSkeleton.baseDef * eLevel * 0.01)
                eXP = eStats.EltSkeleton.xp
                enemyImage.src = 'Images/Characters/Enemy/SkeletonI.png'
                enemyName = 'Elite Skeleton'
                document.getElementById('eName').innerHTML = "Elite Skeleton"
            } else {
                rNum = Math.random()
                if (rNum < 0.2) {
                    eLevel = 61
                } else if (rNum < 0.4) {
                    eLevel = 63
                } else if (rNum < 0.6) {
                    eLevel = 65
                } else if (rNum < 0.8) {
                    eLevel = 67
                } else {
                    eLevel = 69
                }
                health.eTotalHP = (eStats.EltSoldier.baseHealth * eLevel * 0.01) + eStats.EltSoldier.baseHealth
                health.eRatio = health.eTotalHP / 300
                cEHP = health.eTotalHP
                eDef = eStats.EltSoldier.baseDef + (eStats.EltSoldier.baseDef * eLevel * 0.01)
                eXP = eStats.EltSoldier.xp
                enemyImage.src = 'Images/Characters/Enemy/SoldierI.png'
                enemyName = 'Elite Soldier'
                document.getElementById('eName').innerHTML = "Elite Soldier"
            }
        } else if (bZone.zone2) {
            rNum = Math.random()
            if (rNum < 0.5) {
                rNum = Math.random()
                if (rNum < 0.2) {
                    eLevel = 75
                } else if (rNum < 0.4) {
                    eLevel = 77
                } else if (rNum < 0.6) {
                    eLevel = 79
                } else if (rNum < 0.8) {
                    eLevel = 81
                } else {
                    eLevel = 83
                }
                health.eTotalHP = (eStats.EltSpecter.baseHealth * eLevel * 0.01) + eStats.EltSpecter.baseHealth
                health.eRatio = health.eTotalHP / 300
                cEHP = health.eTotalHP
                eDef = eStats.EltSpecter.baseDef + (eStats.EltSpecter.baseDef * eLevel * 0.01)
                eXP = eStats.EltSpecter.xp
                enemyImage.src = 'Images/Characters/Enemy/SkeletonII.png'
                enemyName = 'Elite Specter'
                document.getElementById('eName').innerHTML = "Elite Specter"
            } else {
                rNum = Math.random()
                if (rNum < 0.2) {
                    eLevel = 75
                } else if (rNum < 0.4) {
                    eLevel = 77
                } else if (rNum < 0.6) {
                    eLevel = 79
                } else if (rNum < 0.8) {
                    eLevel = 81
                } else {
                    eLevel = 83
                }
                health.eTotalHP = (eStats.EltGasman.baseHealth * eLevel * 0.01) + eStats.EltGasman.baseHealth
                health.eRatio = health.eTotalHP / 300
                cEHP = health.eTotalHP
                eDef = eStats.EltGasman.baseDef + (eStats.EltGasman.baseDef * eLevel * 0.01)
                eXP = eStats.EltGasman.xp
                enemyImage.src = 'Images/Characters/Enemy/SoldierII.png'
                enemyName = 'Elite Gasman'
                document.getElementById('eName').innerHTML = "Elite Gasman"
            }
        } else if (bZone.zone3) {
            eLevel = 90
            health.eTotalHP = (eStats.Ironsoul.baseHealth * eLevel * 0.01) + eStats.Ironsoul.baseHealth
            health.eRatio = health.eTotalHP / 300
            cEHP = health.eTotalHP
            eDef = eStats.Ironsoul.baseDef
            eXP = eStats.Ironsoul.xp
            enemyImage.src = 'Images/Characters/Enemy/KnightBoss.png'
            enemyName = 'Ironsoul'
            document.getElementById('eName').innerHTML = "Ironsoul"
        }
    }

    tempDef = (stats.baseDef * hLevel * 0.01) + stats.baseDef
    tempHealth = (stats.baseHealth * hLevel * 0.01) + stats.baseHealth
    health.hRatio = tempHealth / 250
    bEnd = false
    lvUp = false
    tGas = false
    insanity = false
    extraDmg = 0
    disabled = false
    shuffleS = false
    stun.first = false
    stun.second = false
    superSaturated = false
    canExitBattle = true

    document.getElementById('mv1').style.pointerEvents = 'all'
    document.getElementById('mv2').style.pointerEvents = 'all'
    document.getElementById('mv3').style.pointerEvents = 'all'
    document.getElementById('mv4').style.pointerEvents = 'all'
    document.getElementById('mv1').style.color = ''
    document.getElementById('mv2').style.color = ''
    document.getElementById('mv3').style.color = ''
    document.getElementById('mv4').style.color = ''
    document.getElementById('battle').style.opacity = '1'
    document.getElementById('Battledialogue').style.opacity = '1'
    document.getElementById('bInterface').style.opacity = '1'
    document.getElementById('bInterface').style.pointerEvents = 'all'
    document.getElementById('hLevel').innerHTML = 'Lv' + hLevel
    document.getElementById('eLevel').innerHTML = 'Lv' + eLevel
    document.getElementById('hName').innerHTML = character
    document.getElementById('Battledialogue').style.pointerEvents = 'all'
    document.getElementById('eHealthBar').style.opacity = '1'
    document.getElementById('hHealthBar').style.opacity = '1'
    document.getElementById('dialogueB').innerHTML = character + " encounters a " + enemyName + '.<br> (click to continue)'
    document.getElementById('mv1').innerHTML = moves.move1
    document.getElementById('mv2').innerHTML = moves.move2
    document.getElementById('mv3').innerHTML = moves.move3
    document.getElementById('mv4').innerHTML = moves.move4

    animateBattle()
}

let battleAnimationID
function animateBattle() {
    battleAnimationID = window.requestAnimationFrame(animateBattle)
    battleBackground.draw()
    enemy.draw()
    hero.draw()
}
