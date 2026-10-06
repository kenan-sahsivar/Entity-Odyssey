function enemyMove() {

    if (enemyName === 'Soldier') {
        rNum = Math.random()
        if (rNum < 0.5) {
            eDmg = Math.round(((eStats.Soldier.baseDmg1 * eLevel * 0.01) + eStats.Soldier.baseDmg1) - tempDef)
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Soldier.move1 + " and deals " + eDmg + " damage!"

            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        } else if (rNum < 0.95) {
            eDef = eDef + (10 * 0.05 * hLevel) + 10
            if (eDef > (eStats.Soldier.baseDef * 0.01 * eLevel) + eStats.Soldier.baseDef + 15) {
                eDef = (eStats.Soldier.baseDef * 0.01 * eLevel) + eStats.Soldier.baseDef + 15
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Soldier.move2 + " but already has max defense!"
                eTurn = true
            } else {
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Soldier.move2 + " and increases his defense!"
                eTurn = true
            }
        } else {
            cEHP = ((eStats.Soldier.baseHealth * eLevel * 0.01) + eStats.Soldier.baseHealth)
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Soldier.move3 + " and fully heals up!"
            document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
            document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
            eTurn = true
        }
    }
    if (enemyName === 'Advanced Soldier') {
        rNum = Math.random()
        if (cEHP < (((eStats.AdvSoldier.baseHealth * 0.01 * eLevel) + eStats.AdvSoldier.baseHealth)/5)) {//20% of total health = heals up using medkit
            cEHP = ((eStats.AdvSoldier.baseHealth * eLevel * 0.01) + eStats.AdvSoldier.baseHealth)
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Soldier.move3 + " and fully heals up!"

            document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
            document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
            eTurn = true
        } else if (rNum < 0.5) {
                eDmg = Math.round(((eStats.AdvSoldier.baseDmg1 * eLevel * 0.01) + eStats.AdvSoldier.baseDmg1) - tempDef)
                tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Soldier.move1 + " and deals " + eDmg + " damage!"

                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
        } else if (rNum < 0.9) {
            if (eDef === (eStats.AdvSoldier.baseDef * 0.01 * eLevel) + eStats.AdvSoldier.baseDef + 15) {
                eDmg = Math.round(((eStats.AdvSoldier.baseDmg1 * eLevel * 0.01) + eStats.AdvSoldier.baseDmg1) - tempDef)
                tempHealth = tempHealth - eDmg
                if (tempHealth < 0) tempHealth = 0
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Soldier.move1 + " and deals " + eDmg + " damage!"

                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            } else {
                eDef = eDef + (10 * 0.05 * hLevel) + 10
                if (eDef > (eStats.AdvSoldier.baseDef * 0.01 * eLevel) + eStats.AdvSoldier.baseDef + 15) {
                    eDef = (eStats.AdvSoldier.baseDef * 0.01 * eLevel) + eStats.AdvSoldier.baseDef + 15
                    document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Soldier.move2 + " but already has max defense!"
                    eTurn = true
                } else {
                    document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Soldier.move2 + " and increases his defense!"
                    eTurn = true
                }
            }
        } else {
            cEHP = ((eStats.AdvSoldier.baseHealth * eLevel * 0.01) + eStats.AdvSoldier.baseHealth)
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Soldier.move3 + " and fully heals up!"
            document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
            document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
            eTurn = true
        }
    }
    if (enemyName === 'Elite Soldier') {
        rNum = Math.random()
        if (cEHP < (eStats.EltSoldier.baseHealth/2) && insanity === false) {
            insanity = true
            eLevel = eLevel + 5
            cEHP = cEHP - 50
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltSoldier.move3 + " and trades his health for stronger attacks! (defense and attack)"
            document.getElementById('eLevel').innerHTML = 'Lv' + eLevel
            document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
            document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
            eTurn = true
        } else if (eDef < (eStats.EltSoldier.baseDef * 0.01 * eLevel) + eStats.EltSoldier.baseDef + 5) {
            eDef = eDef + 5
            if (eDef > (eStats.EltSoldier.baseDef * 0.01 * eLevel) + eStats.EltSoldier.baseDef + 15) {
                eDef = (eStats.EltSoldier.baseDef * 0.01 * eLevel) + eStats.EltSoldier.baseDef + 15
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltSoldier.move2 + " but already has max defense!"
                eTurn = true
            } else {
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltSoldier.move2 + " and increases his defense!"
                eTurn = true
            }
        } else {
            rNum = Math.random()
            eDmg = Math.round(((rNum*350) - tempDef))
            if (eDmg < 0) eDmg = 0
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltSoldier.move1 + " and deals " + eDmg + " damage!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        }
    }
    if (enemyName === 'Advanced Gasman') {
        rNum = Math.random()
        if (tGas === false) {
            eDmg = 50
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.AdvGasman.move2 + " and poisons " + character + " for 50 damage!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
            tGas = true
            extraDmg = 50
        } else if (rNum < 0.5) {
            eDmg = Math.round(((eStats.AdvGasman.baseDmg1 * eLevel * 0.01) + eStats.AdvGasman.baseDmg1) - tempDef + extraDmg)
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            if (tGas) {
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.AdvGasman.move1 + " and deals " + eDmg + " damage! <br> (You take poison damage from Toxic Gas)"
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            } else {
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.AdvGasman.move1 + " and deals " + eDmg + " damage!"
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            }
        } else {
            eDmg = Math.round(((eStats.AdvGasman.baseDmg3 * eLevel * 0.01) + eStats.AdvGasman.baseDmg3) - tempDef + extraDmg)
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            if (tGas) {
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.AdvGasman.move3 + " and deals " + eDmg + " damage! <br> (You take poison damage from Toxic Gas)"
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            } else {
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.AdvGasman.move3 + " and deals " + eDmg + " damage!"
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            }
        }
    } else if (enemyName === 'Elite Gasman') {
        if (tGas === false) {
            eDmg = 75
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltGasman.move1 + " and poisons " + character + " for 75 damage!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
            tGas = true
            extraDmg = 75
        } else if (eDef < 10) {
            eDef = eDef + 20
            eDmg = extraDmg
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltGasman.move3 + " and raises defense! <br> (You take poison damage from Biohazard)"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        } else {
            eDmg = Math.round(((eStats.EltGasman.baseDmg2 * eLevel * 0.01) + eStats.EltGasman.baseDmg2) - tempDef + extraDmg)
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltGasman.move2 + " and deals " + eDmg + " damage! <br> (You take poison damage from Biohazard)"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        }
    } else  if (enemyName === 'Goliath') {
        rNum = Math.random()
        if (cEHP < (eStats.Goliath.baseHealth/5)) {
            eDmg = 250 - Math.round((cEHP / health.eTotalHP) * 250)
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Goliath.move4 + " and deals " + eDmg + " damage!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        } else if (tempDef === (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 15) {
            eDmg = 60
            tempDef = tempDef - 10
            if (tempDef < 0) tempDef = 0
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Goliath.move2 + " and deals " + eDmg + " damage and reduces defense! "
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        } else if (rNum < 0.6) {
            eDmg = Math.round(((eStats.Goliath.baseDmg1 * eLevel * 0.01) + eStats.Goliath.baseDmg1) - tempDef)
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Goliath.move1 + " and deals " + eDmg + " damage!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        } else {
            eLevel = eLevel + 1
            eDef = (eStats.Goliath.baseDef * 0.01 * eLevel) + eStats.Goliath.baseDef + 5
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Goliath.move3 + " and increases his stats! (defense and attack)"
            document.getElementById('eLevel').innerHTML = 'Lv' + eLevel
            eTurn = true
        }
    } else if (enemyName === 'Skeleton') {
        if (tempDef >= (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 15) {
            tempDef = tempDef - 10
            if (tempDef < 0) tempDef = 0
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Skeleton.move3 + " and reduces " + character + "'s defense!"

            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        } else if (cEHP < (((eStats.Skeleton.baseHealth * 0.01 * eLevel) + eStats.Skeleton.baseHealth)/10)) {
            rNum = Math.trunc(((eStats.Skeleton.baseHealth * eLevel * 0.01) + eStats.Skeleton.baseHealth) * (Math.random()))
            cEHP = rNum + cEHP
            if (cEHP > ((eStats.Skeleton.baseHealth * eLevel * 0.01) + eStats.Skeleton.baseHealth)) {
                cEHP = ((eStats.Skeleton.baseHealth * eLevel * 0.01) + eStats.Skeleton.baseHealth)
            }
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Skeleton.move2 + " and heals " + rNum + " health!"

            document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
            document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
            eTurn = true
        } else {
            eDmg = Math.round(((eStats.Skeleton.baseDmg1 * eLevel * 0.01) + eStats.Skeleton.baseDmg1) - tempDef)
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Skeleton.move1 + " and deals " + eDmg + " damage!"

            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        }
    } else if (enemyName === 'Advanced Skeleton') {
        if (tempDef >= (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 15) {
            tempDef = tempDef - 10
            if (tempDef < 0) tempDef = 0
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Skeleton.move3 + " and reduces " + character + "'s defense!"

            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        } else if (cEHP < (((eStats.Skeleton.baseHealth * 0.01 * eLevel) + eStats.Skeleton.baseHealth)/5)) {
            rNum = Math.trunc(((eStats.Skeleton.baseHealth * eLevel * 0.01) + eStats.Skeleton.baseHealth) * Math.random())
            cEHP = rNum + cEHP
            if (cEHP > ((eStats.Skeleton.baseHealth * eLevel * 0.01) + eStats.Skeleton.baseHealth)) {
                cEHP = ((eStats.Skeleton.baseHealth * eLevel * 0.01) + eStats.Skeleton.baseHealth)
            }
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Skeleton.move2 + " and heals " + rNum + " health!"

            document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
            document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
            eTurn = true
        } else {
            eDmg = Math.round(((eStats.Skeleton.baseDmg1 * eLevel * 0.01) + eStats.Skeleton.baseDmg1) - tempDef)
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Skeleton.move1 + " and deals " + eDmg + " damage!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        }
    } else if (enemyName === 'Elite Skeleton') {
        if (tempDef >= (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 15) {
            tempDef = tempDef - 10
            if (tempDef < 0) tempDef = 0
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltSkeleton.move3 + " and reduces " + character + "'s defense!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        } else if (cEHP < (((eStats.EltSkeleton.baseHealth * 0.01 * eLevel) + eStats.EltSkeleton.baseHealth)/5)) {
            rNum = Math.trunc(((eStats.EltSkeleton.baseHealth * eLevel * 0.01) + eStats.EltSkeleton.baseHealth) * Math.random()) //using rnum for a temporary value
            rNum = rNum / 2
            cEHP = rNum + cEHP
            if (cEHP > ((eStats.EltSkeleton.baseHealth * eLevel * 0.01) + eStats.EltSkeleton.baseHealth)) {
                cEHP = ((eStats.EltSkeleton.baseHealth * eLevel * 0.01) + eStats.EltSkeleton.baseHealth)
            }
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltSkeleton.move2 + " and heals " + rNum + " health!"
            document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
            document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
            eTurn = true
        } else {
            eDmg = Math.round(((eStats.EltSkeleton.baseDmg1 * eLevel * 0.01) + eStats.EltSkeleton.baseDmg1) - tempDef)
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltSkeleton.move1 + " and deals " + eDmg + " damage!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        }
    } else if (enemyName === 'Advanced Specter') {
        rNum = Math.random()
        if (rNum > 0.5) {
            eDmg = Math.round(((eStats.AdvSpecter.baseDmg1 * eLevel * 0.01) + eStats.AdvSpecter.baseDmg1) - tempDef)
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.AdvSpecter.move1 + " and deals " + eDmg + " damage!"

            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        } else if (tempDef >= (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 15) {
            tempDef = tempDef - 15
            if (tempDef < 0) tempDef = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.AdvSpecter.move2 + " and reduces " + character + "'s defense!"

            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        } else {
            rNum = Math.random()
            if (rNum < 0.5) {
                if (hDmg === 0) {
                    eDmg = Math.round(((eStats.AdvSpecter.baseDmg1 * eLevel * 0.01) + eStats.AdvSpecter.baseDmg1) - tempDef)
                    tempHealth = tempHealth - eDmg
                    if (tempHealth < 0) tempHealth = 0
                    document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.AdvSpecter.move1 + " and deals " + eDmg + " damage!"

                    document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                    document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                    eTurn = true
                } else {
                    cEHP = hDmg + cEHP
                    if (cEHP > ((eStats.AdvSpecter.baseHealth * eLevel * 0.01) + eStats.AdvSpecter.baseHealth)) {
                        cEHP = ((eStats.AdvSpecter.baseHealth * eLevel * 0.01) + eStats.AdvSpecter.baseHealth)
                    }
                    document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.AdvSpecter.move3 + " and successfully blocks the previous attack!"

                    document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
                    document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
                    eTurn = true
                }

            } else {
                eDmg = Math.round(((eStats.AdvSpecter.baseDmg1 * eLevel * 0.01) + eStats.AdvSpecter.baseDmg1) - tempDef)
                tempHealth = tempHealth - eDmg
                if (tempHealth < 0) tempHealth = 0
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.AdvSpecter.move1 + " and deals " + eDmg + " damage!"
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            }
        }
    } else if (enemyName === 'Elite Specter') {
        rNum = Math.random()
        if (rNum > 0.4) {
            eDmg = Math.round(((eStats.EltSpecter.baseDmg1 * eLevel * 0.01) + eStats.EltSpecter.baseDmg1) - tempDef)
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltSpecter.move1 + " and deals " + eDmg + " damage!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        } else if (tempDef >= (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 15) {
            tempDef = tempDef - 15
            if (tempDef < 0) tempDef = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltSpecter.move2 + " and reduces " + character + "'s defense!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        } else {
            rNum = Math.random()
            if (rNum < 0.5) {
                if (hDmg === 0) {
                    eDmg = Math.round(((eStats.EltSpecter.baseDmg1 * eLevel * 0.01) + eStats.EltSpecter.baseDmg1) - tempDef)
                    tempHealth = tempHealth - eDmg
                    if (tempHealth < 0) tempHealth = 0
                    document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltSpecter.move1 + " and deals " + eDmg + " damage!"
                    document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                    document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                    eTurn = true
                } else {
                    cEHP = hDmg + cEHP
                    if (cEHP > ((eStats.EltSpecter.baseHealth * eLevel * 0.01) + eStats.EltSpecter.baseHealth)) {
                        cEHP = ((eStats.EltSpecter.baseHealth * eLevel * 0.01) + eStats.EltSpecter.baseHealth)
                    }
                    document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltSpecter.move3 + " and successfully blocks the previous attack!"
                    document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
                    document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
                    eTurn = true
                }
            } else {
                eDmg = Math.round(((eStats.EltSpecter.baseDmg1 * eLevel * 0.01) + eStats.EltSpecter.baseDmg1) - tempDef)
                tempHealth = tempHealth - eDmg
                if (tempHealth < 0) tempHealth = 0
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.EltSpecter.move1 + " and deals " + eDmg + " damage!"
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            }
        }
    } else if (enemyName === 'Phantom') {
        rNum = Math.random()
        if (disabled === false) {
            disabled = true
            rNum = Math.random()
            if (rNum < 0.25) {
                document.getElementById('mv1').style.pointerEvents = 'none'
                document.getElementById('mv1').style.color = 'gray'
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Phantom.move2 + " and disables " + character + "'s " + moves.move1
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            } else if (rNum < 0.5) {
                document.getElementById('mv2').style.pointerEvents = 'none'
                document.getElementById('mv2').style.color = 'gray'
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Phantom.move2 + " and disables " + character + "'s " + moves.move2
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            } else if (rNum < 0.75) {
                document.getElementById('mv3').style.pointerEvents = 'none'
                document.getElementById('mv3').style.color = 'gray'
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Phantom.move2 + " and disables " + character + "'s " + moves.move3
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            } else {
                document.getElementById('mv4').style.pointerEvents = 'none'
                document.getElementById('mv4').style.color = 'gray'
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Phantom.move2 + " and disables " + character + "'s " + moves.move4
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            }
        } else if (rNum < 0.25) {
            rNum = Math.random()
            if (rNum < 0.5) {
                eDmg = Math.round(((stats.baseDmg1 * eLevel * 0.01) + stats.baseDmg1) - tempDef)
                if (eDmg < 0) eDmg = 0
                tempHealth = tempHealth - eDmg
                if (tempHealth < 0) tempHealth = 0
                document.getElementById('dialogueB').innerHTML = character + " was possessed and used " + moves.move1 + " against himself dealing " + eDmg + " damage!"
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            } else {
                eDmg = Math.round(((stats.baseDmg2 * eLevel * 0.01) + stats.baseDmg2) - tempDef)
                if (eDmg < 0) eDmg = 0
                tempHealth = tempHealth - eDmg
                if (tempHealth < 0) tempHealth = 0
                document.getElementById('dialogueB').innerHTML = character + " was possessed and used " + moves.move2 + " against himself dealing " + eDmg + " damage!"
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            }
        } else if (tempHealth < (((stats.baseHealth * hLevel * 0.01) + stats.baseHealth)/5)) {
            eDmg = Math.round(((eStats.Phantom.baseDmg1 * eLevel * 0.01) + eStats.Phantom.baseDmg1) - tempDef)
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Phantom.move1 + " and deals " + eDmg + " damage!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        } else if (cEHP < (((eStats.Phantom.baseHealth * 0.01 * eLevel) + eStats.Phantom.baseHealth)/5)) {
            eDmg = Math.round(((eStats.Phantom.baseDmg3 * eLevel * 0.01) + eStats.Phantom.baseDmg3) - tempDef)
            if (eDmg < 0) eDmg = 0
            tempHealth = tempHealth - eDmg
            cEHP = eDmg + cEHP
            if (cEHP > ((eStats.Phantom.baseHealth * eLevel * 0.01) + eStats.Phantom.baseHealth)) {
                cEHP = ((eStats.Phantom.baseHealth * eLevel * 0.01) + eStats.Phantom.baseHealth)
            }
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Phantom.move3 + " and syphons " + eDmg + " health from " + character + "!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
            document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
            eTurn = true
        } else if (rNum < 0.55) {
            eDmg = Math.round(((eStats.Phantom.baseDmg3 * eLevel * 0.01) + eStats.Phantom.baseDmg3) - tempDef)
            if (eDmg < 0) eDmg = 0
            tempHealth = tempHealth - eDmg
            cEHP = eDmg + cEHP
            if (cEHP > ((eStats.Phantom.baseHealth * eLevel * 0.01) + eStats.Phantom.baseHealth)) {
                cEHP = ((eStats.Phantom.baseHealth * eLevel * 0.01) + eStats.Phantom.baseHealth)
            }
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Phantom.move3 + " and syphons " + eDmg + " health from " + character + "!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
            document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
            eTurn = true
        } else {
            eDmg = Math.round(((eStats.Phantom.baseDmg1 * eLevel * 0.01) + eStats.Phantom.baseDmg1) - tempDef)
            tempHealth = tempHealth - eDmg
            if (tempHealth < 0) tempHealth = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Phantom.move1 + " and deals " + eDmg + " damage!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        }
    } else if (enemyName === 'Ironsoul') {
        if (shuffleS === false) {
            shuffleS = true
            rNum = Math.random()
            if (rNum < 0.25) {
                document.getElementById('mv1').style.pointerEvents = 'none'
                document.getElementById('mv1').style.color = 'gray'
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Ironsoul.move2 + " and disables " + character + "'s " + moves.move1
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            } else if (rNum < 0.5) {
                document.getElementById('mv2').style.pointerEvents = 'none'
                document.getElementById('mv2').style.color = 'gray'
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Ironsoul.move2 + " and disables " + character + "'s " + moves.move2
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            } else if (rNum < 0.75) {
                document.getElementById('mv3').style.pointerEvents = 'none'
                document.getElementById('mv3').style.color = 'gray'
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Ironsoul.move2 + " and disables " + character + "'s " + moves.move3
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            } else {
                document.getElementById('mv4').style.pointerEvents = 'none'
                document.getElementById('mv4').style.color = 'gray'
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Ironsoul.move2 + " and disables " + character + "'s " + moves.move4
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            }
        } else if (cEHP < (((eStats.Ironsoul.baseHealth * 0.01 * eLevel) + eStats.Ironsoul.baseHealth)/5)) {
            cEHP = cEHP + 200
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Ironsoul.move3 + " and heals 200 health!"
            document.getElementById('eCurrentHP').style.width = (cEHP / health.eRatio) + 'px'
            document.getElementById('eDmgHP').style.width = (cEHP / health.eRatio) + 'px'
            eTurn = true
        } else if (tempDef >= (stats.baseDef * 0.01 * hLevel) + stats.baseDef + 15) {
            tempDef = tempDef - 20
            if (tempDef < 0) tempDef = 0
            document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Ironsoul.move4 + " and reduces " + character + "'s defense!"
            document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
            document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
            eTurn = true
        } else {
            rNum = Math.random()
            if (rNum > 0.3) {
                eDmg = Math.round(((eStats.Ironsoul.baseDmg1 * eLevel * 0.01) + eStats.Ironsoul.baseDmg1) - tempDef)
                tempHealth = tempHealth - eDmg
                if (tempHealth < 0) tempHealth = 0
                document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Ironsoul.move1 + " and deals " + eDmg + " damage!"
                document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                eTurn = true
            } else {
                document.getElementById('mv1').style.pointerEvents = 'all'
                document.getElementById('mv2').style.pointerEvents = 'all'
                document.getElementById('mv3').style.pointerEvents = 'all'
                document.getElementById('mv4').style.pointerEvents = 'all'
                document.getElementById('mv1').style.color = ''
                document.getElementById('mv2').style.color = ''
                document.getElementById('mv3').style.color = ''
                document.getElementById('mv4').style.color = ''
                rNum = Math.random()
                if (rNum < 0.25) {
                    document.getElementById('mv1').style.pointerEvents = 'none'
                    document.getElementById('mv1').style.color = 'gray'
                    document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Ironsoul.move2 + " and shuffles the disable to " + character + "'s " + moves.move1
                    document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                    document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                    eTurn = true
                } else if (rNum < 0.5) {
                    document.getElementById('mv2').style.pointerEvents = 'none'
                    document.getElementById('mv2').style.color = 'gray'
                    document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Ironsoul.move2 + " and shuffles the disable to " + character + "'s " + moves.move2
                    document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                    document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                    eTurn = true
                } else if (rNum < 0.75) {
                    document.getElementById('mv3').style.pointerEvents = 'none'
                    document.getElementById('mv3').style.color = 'gray'
                    document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Ironsoul.move2 + " and shuffles the disable to " + character + "'s " + moves.move3
                    document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                    document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                    eTurn = true
                } else {
                    document.getElementById('mv4').style.pointerEvents = 'none'
                    document.getElementById('mv4').style.color = 'gray'
                    document.getElementById('dialogueB').innerHTML = enemyName + " uses the move " + eMoves.Ironsoul.move2 + " and shuffles the disable to " + character + "'s " + moves.move4
                    document.getElementById('hCurrentHP').style.width = (tempHealth / health.hRatio) + 'px'
                    document.getElementById('hDmgHP').style.width = (tempHealth / health.hRatio) + 'px'
                    eTurn = true
                }
            }
        }
    }
}
