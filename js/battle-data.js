const eStats = {

    Soldier: {
        baseHealth: 300,
        xp: 150,
        baseDmg1: 100,
        baseDmg2: 0,
        baseDmg3: 0,
        hEvasive: 0,
        baseDef: 10
    },
    AdvSoldier: {
        baseHealth: 400,
        xp: 175,
        baseDmg1: 125,
        baseDmg2: 0,
        baseDmg3: 0,
        hEvasive: 0,
        baseDef: 15
    },
    EltSoldier: {
        baseHealth: 400,
        xp: 200,
        baseDmg1: 125,
        baseDmg2: 0,
        baseDmg3: 0,
        hEvasive: 0,
        baseDef: 20
    },
    AdvGasman: {
        baseHealth: 500,
        xp: 160,
        baseDmg1: 25,
        baseDmg2: 50,
        baseDmg3: 75,
        hEvasive: 0,
        baseDef: 20
    },
    EltGasman: {
        baseHealth: 550,
        xp: 200,
        baseDmg1: 50,
        baseDmg2: 75,
        baseDmg3: 0,
        hEvasive: 0,
        baseDef: 25
    },
    Goliath: {
        baseHealth: 650,
        xp: 200,
        baseDmg1: 125,
        baseDmg2: 50,
        baseDmg3: 0,
        hEvasive: 0,
        baseDef: 25
    },
    Skeleton: {
        baseHealth: 450,
        xp: 115,
        baseDmg1: 90,
        baseDmg2: 0,
        baseDmg3: 0,
        hEvasive: 0,
        baseDef: 25
    },
    AdvSkeleton: {
        baseHealth: 500,
        xp: 130,
        baseDmg1: 100,
        baseDmg2: 0,
        baseDmg3: 0,
        hEvasive: 0,
        baseDef: 30
    },
    EltSkeleton: {
        baseHealth: 500,
        xp: 200,
        baseDmg1: 100,
        baseDmg2: 0,
        baseDmg3: 0,
        hEvasive: 0,
        baseDef: 15
    },
    AdvSpecter: {
        baseHealth: 550,
        xp: 150,
        baseDmg1: 120,
        baseDmg2: 0,
        baseDmg3: 0,
        hEvasive: 0,
        baseDef: 40
    },
    EltSpecter: {
        baseHealth: 550,
        xp: 200,
        baseDmg1: 125,
        baseDmg2: 50,
        baseDmg3: 0,
        hEvasive: 0,
        baseDef: 15
    },
    Phantom: {
        baseHealth: 750,
        xp: 200,
        baseDmg1: 100,
        baseDmg2: 0,
        baseDmg3: 50,
        hEvasive: 0,
        baseDef: 35
    },
    Ironsoul: {
        baseHealth: 650,
        xp: 500,
        baseDmg1: 125,
        baseDmg2: 0,
        baseDmg3: 0,
        hEvasive: 0,
        baseDef: 30
    }
}
const eMoves = {
    Soldier: {
        move1: 'Shoot',
        move2: 'Camouflage',
        move3: 'Med Kit'
    },
    EltSoldier: {
        move1: 'Grenade',
        move2: 'Trench',
        move3: 'Insanity'
    },
    AdvGasman: {
        move1: 'Shovel Smack',
        move2: 'Toxic Gas',
        move3: 'Shovel Stab'
    },
    EltGasman: {
        move1: 'Biohazard',
        move2: 'Blunt Force',
        move3: 'Gas Mask'
    },
    Goliath: {
        move1: 'Club Swing',
        move2: 'Stomp',
        move3: 'Pump Up',
        move4: 'Body Slam'
    },
    Skeleton: {
        move1: 'Knuckle Punch',
        move2: 'Regrowth',
        move3: 'Taunt'
    },
    EltSkeleton: {
        move1: 'Bone Crusher',
        move2: 'Revitalize',
        move3: 'Defense Lock'
    },
    AdvSpecter: {
        move1: 'Slash',
        move2: 'Shield Push',
        move3: 'Block'
    },
    EltSpecter: {
        move1: 'Spectral Strike',
        move2: 'Shield Ram',
        move3: 'Bone Barrier'
    },
    Phantom: {
        move1: 'Chaos Swipe',
        move2: 'Disable',
        move3: 'Syphon',
        move4: 'Possess'
    },
    Ironsoul: {
        move1: 'Sword Surge',
        move2: 'Locked Shuffle',
        move3: 'Soul Recovery',
        move4: "Knight's Defiance"
    }
}
