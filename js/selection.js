var character = ""
var moves = {
    move1: '',
    move2: '',
    move3: '',
    move4: '',
    desMove1: '',
    desMove2: '',
    desMove3: '',
    desMove4: ''
}

var stats = {
    baseHealth: 0,
    xpGap: 0,
    baseDmg1: 0,
    baseDmg2: 0,
    baseDmg3: 0,
    baseDmg4: 0,
    hEvasive: 0,
    baseDef: 0
}


function hoverChar(character, img) {
    document.getElementById(character).style.opacity = "1"
    document.getElementById(img).style.filter = "brightness(90%)"
    document.getElementById(img).style.boxShadow = "0 0 40px rgba(255, 255, 255, 0.8)"
}

function leaveChar(character, img) {
    document.getElementById(character).style.opacity = "0"
    document.getElementById(img).style.filter = "brightness(100%)"
    document.getElementById(img).style.boxShadow = "0 0 40px rgba(255, 255, 255, 0)"
}

function select(char) {
    character = char

    document.getElementById('charSelect').style.backgroundColor = "white"
    document.getElementById('charSelect').style.pointerEvents = "none"

    gsap.to('#charSelect', {
        opacity: 0,
        duration: 3,
        onComplete() {
            document.getElementById('dialogue').style.opacity = '1'
            document.getElementById('dialogue').style.pointerEvents = 'all'
            document.getElementById('dialogueP').innerHTML = character + " selected. [Task: Reach level 15] <br> (click to continue)"
        }
    })
    document.getElementById('imgB').style.opacity = "0"
    document.getElementById('imgM').style.opacity = "0"
    document.getElementById('imgS').style.opacity = "0"

    if (character === 'Brute') {
        heroImage.src = 'Images/Characters/Brute/BruteBSprite.png'
        stats.baseHealth = 500
        stats.baseDef = 15
        stats.xpGap = 0.4
        moves.move1 = 'Brute Force'
        moves.move2 = 'Axe Swipe'
        moves.move3 = 'Bulk'
        moves.move4 = 'Stun'
        moves.desMove1 = 'Use sheer power dealing 100 base damage. 100% accuracy.'
        moves.desMove2 = 'Use your axe, dealing 250 base damage. 50% accuracy.'
        moves.desMove3 = 'Heal 50HP and gain 50 defense. Has 100% accuracy.'
        moves.desMove4 = 'This move stuns the enemy for 2 turns. 40% accuracy.'
        stats.baseDmg1 = 100
        stats.baseDmg2 = 150
        stats.baseDmg3 = 0
        stats.baseDmg4 = 0
    }
    if (character === 'Jester') {
        heroImage.src = 'Images/Characters/Jester/SwiftBSprite.png'
        stats.baseHealth = 400
        stats.baseDef = 40
        stats.hEvasive = 0
        stats.xpGap = 0.2
        moves.move1 = 'Swift Kick'
        moves.move2 = 'Ace of Blades'
        moves.move3 = 'Evasive Juggling'
        moves.move4 = 'Distraction'
        moves.desMove1 = 'Kicks the opponent, dealing 100 base damage. 100% accuracy.'
        moves.desMove2 = 'Sends a barrage of blades, dealing 150 base damage. 80% accuracy.'
        moves.desMove3 = 'Increase evasiveness, dealing 75 base damage and gaining 5 defense. 66% accuracy.'
        moves.desMove4 = "This move transfers all of the enemy's defense to you. 40% accuracy."
        stats.baseDmg1 = 100
        stats.baseDmg2 = 150
        stats.baseDmg3 = 75
        stats.baseDmg4 = 0
    }
    if (character === 'Mage') {
        heroImage.src = 'Images/Characters/Mage/MageBSprite.png'
        stats.baseHealth = 325
        stats.baseDef = 25
        moves.move1 = 'Staff Strike'
        moves.move2 = 'Orb Blast'
        moves.move3 = 'Incinerate'
        moves.move4 = 'Aura Heal'
        moves.desMove1 = 'Strike the enemy, dealing 75 base damage. 100% accuracy.'
        moves.desMove2 = 'Send an orb blast, dealing 200 base damage. 80% accuracy.'
        moves.desMove3 = 'Incinerate the enemy, killing them instantly. 5% accuracy.'
        moves.desMove4 = 'Heal yourself for 150 HP and gain 10 Defense. 50% accuracy.'
        stats.baseDmg1 = 75
        stats.baseDmg2 = 200
        stats.baseDmg3 = 9999
        stats.baseDmg4 = 0
    }
    start.charSelect = false
}
