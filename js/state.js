const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const maps = {
    map1: true,
    map2: false,
    map3: false
}

const bZone = {
    zone1: false,
    zone2: false,
    zone3: false
}

var gameEnd = false
var speed = 2.5
var turbo = 5
var won = false

var map2Spawn = {
    X: 0,
    Y: 0
}

var canExitBattle = true

var start = {
    charSelect: true,
    gameStart: false
}

var dialogue = {
    gameDialogue: false,
    battleDialogue: false
}

var barriers = {
    I1L2: true,
    I1Boss: true,
    I2L2: true,
    I2Boss: true,
    I3L2: true,
    I3Boss: true
}

var eTurn = false
var bEnd = false
var lvUp = false

canvas.width = 1024;
canvas.height = 576;
