// clock
function clock() {
    var day = new Date();
    var h = day.getHours();
    var m = day.getMinutes();
    h = clockNum(h);
    m = clockNum(m);
    document.getElementById("clock").innerHTML = h + ":" + m;
    var t = setTimeout(clock, 1000);
};

function clockNum(c) {
    if (c < 10) { c = "0" + c };
    return c;
};

// calculate

const springNumber = 2.8875;

//document.getElementById('pcalcr').innerHTML = `Result: ${rn}%`

function calculate() {
    //from car info
    let carClass = document.querySelector('input[name = "carClass"]:checked').value;
    let carDrive = document.querySelector('input[name = "driveType"]:checked').value;
    let carBuild = document.querySelector('input[name = "carBuild"]:checked').value;
    let carPower = document.getElementById('carPower').value;
    let carTorque = document.getElementById('carTorque').value;
    let carWeight = document.getElementById('carWeight').value;
    let carFront = document.getElementById('carFront').value;
    let carDispl = document.getElementById('carDisplacement').value;
    let carTopSpd = document.getElementById('carTopSpeed').value;
    //settings
    let arbRatio = document.getElementById('arbRatio').value;

    //antiroll bars
    let arbMin = 1;
    let arbMax = 65;
    let arbFront = (arbRatio/10)*(carFront/100*(arbMax-arbMin))+arbMin;
    document.getElementById('arbFront').innerHTML = Math.round(arbFront*10)/10;
    
    let arbRear = (arbRatio/10)*((100-carFront)/100*(arbMax-arbMin))+arbMin;
    document.getElementById('arbRear').innerHTML = Math.round(arbRear*10)/10;

    //springs
    let frontHeight = document.getElementById('frontHeight').value;
    let rearHeight = document.getElementById('rearHeight').value;
    let avgHeight = (parseFloat(frontHeight)+parseFloat(rearHeight))/2;

    let frontSpring = carFront/100*springNumber/avgHeight*carWeight;
    document.getElementById('frontSpring').innerHTML = Math.round(frontSpring*10)/10;
    
    let rearSpring = (100-carFront)/100*springNumber/avgHeight*carWeight;
    document.getElementById('rearSpring').innerHTML = Math.round(rearSpring*10)/10;

    //damping
    let reboundRatio = document.getElementById('reboundRatio').value;
    let bumpRatio = document.getElementById('bumpRatio').value;
    let reboundMin = 1;
    let reboundMax = 20;
    let bumpMin = 1;
    let bumpMax= 20;

    let fRebound = carFront/100*(reboundMax-reboundMin)*reboundRatio/10+reboundMin;
    let rRebound = (100-carFront)/100*(reboundMax-reboundMin)*reboundRatio/10+reboundMin;
    document.getElementById('frontRebound').innerHTML = Math.round(fRebound*10)/10;
    document.getElementById('rearRebound').innerHTML = Math.round(rRebound*10)/10;

    let fBump = fRebound*bumpRatio/10;
    let rBump = rRebound*bumpRatio/10;
    document.getElementById('frontBump').innerHTML = Math.round(fBump*10)/10;
    document.getElementById('rearBump').innerHTML = Math.round(rBump*10)/10;



    //log
    console.log("Car info:");
    console.log(carClass, carDrive, carBuild, carPower, carTorque, carWeight, carFront, carDispl, carTopSpd);
    console.log(avgHeight);
};





console.log(carClass);

//document.querySelector('input[name = "dice"]:checked').value;





//old

var diceStats = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var rollCount = 0;
var dots = [];
var sound = true;

function dotsGen(r) {
    switch (r) {
        case 1:
            dots = [24];
            break;
        case 2:
            dots = [12, 36];
            break;
        case 3:
            dots = [12, 24, 36];
            break;
        case 4:
            dots = [8, 12, 36, 40];
            break;
        case 5:
            dots = [8, 12, 24, 36, 40];
            break;
        case 6:
            dots = [8, 12, 22, 26, 36, 40];
            break;
        case 7:
            dots = [8, 12, 22, 24, 26, 36, 40];
            break;
        case 8:
            dots = [8, 10, 12, 22, 26, 36, 38, 40];
            break;
        case 9:
            dots = [8, 10, 12, 22, 24, 26, 36, 38, 40];
            break;
    };
    return dots;
};

function randomDice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function diceRollTrue() {
    let diceNumber = document.querySelector('input[name = "dice"]:checked').value;
    let diceContainer = document.getElementById('diceBoard');
    let diceType = document.querySelector('input[name = "diceT"]:checked').value;
    let diceMaxDots = 0;

    if (diceType == 'Classic') {
        diceMaxDots = 6;
    } else {
        diceMaxDots = 9;
    };

    diceContainer.innerHTML = '';

    if (diceNumber > 2) {
        let dRow = document.createElement('div');
        dRow.setAttribute('class', 'boardRow');
        dRow.setAttribute('id', 'boardRow1');
        dRow.innerHTML = '';
        diceContainer.appendChild(dRow);
        let dRow2 = document.createElement('div');
        dRow2.setAttribute('class', 'boardRow');
        dRow2.setAttribute('id', 'boardRow2');
        dRow2.innerHTML = '';
        diceContainer.appendChild(dRow2);
    } else {
        let dRow = document.createElement('div');
        dRow.setAttribute('class', 'boardRow');
        dRow.setAttribute('id', 'boardRow1');
        dRow.innerHTML = '';
        diceContainer.appendChild(dRow);
    };

    for (i = 0; i < diceNumber; i++) {
        let diceRoll = randomDice(1, diceMaxDots);
        let d = document.createElement('div');
        d.setAttribute('class', 'dice');
        d.innerHTML = '';
        dotsGen(diceRoll);
        diceStats[diceRoll - 1]++;

        for (k = 0; k < 49; k++) {
            let e = document.createElement('div');
            e.innerHTML = '';
            if (dots.indexOf(k) > -1) {
                e.setAttribute('class', 'dot');
            };
            d.appendChild(e);
        };

        if (i < 2) {
            let r1 = document.getElementById('boardRow1');
            r1.appendChild(d);
        } else {
            let r2 = document.getElementById('boardRow2');
            r2.appendChild(d);
        };
    };
    rollCount = rollCount+1;
    statsUpdate();
};

function diceRollFake() {
    let diceNumber = document.querySelector('input[name = "dice"]:checked').value;
    let diceContainer = document.getElementById('diceBoard');
    let diceType = document.querySelector('input[name = "diceT"]:checked').value;
    let diceMaxDots = 0;

    if (diceType == 'Classic') {
        diceMaxDots = 6;
    } else {
        diceMaxDots = 9;
    };

    diceContainer.innerHTML = '';

    if (diceNumber > 2) {
        let dRow = document.createElement('div');
        dRow.setAttribute('class', 'boardRow');
        dRow.setAttribute('id', 'boardRow1');
        dRow.innerHTML = '';
        diceContainer.appendChild(dRow);
        let dRow2 = document.createElement('div');
        dRow2.setAttribute('class', 'boardRow');
        dRow2.setAttribute('id', 'boardRow2');
        dRow2.innerHTML = '';
        diceContainer.appendChild(dRow2);
    } else {
        let dRow = document.createElement('div');
        dRow.setAttribute('class', 'boardRow');
        dRow.setAttribute('id', 'boardRow1');
        dRow.innerHTML = '';
        diceContainer.appendChild(dRow);
    };

    for (i = 0; i < diceNumber; i++) {
        let diceRoll = randomDice(1, diceMaxDots);
        let d = document.createElement('div');
        d.setAttribute('class', 'dice');
        d.innerHTML = '';
        dotsGen(diceRoll);

        for (k = 0; k < 49; k++) {
            let e = document.createElement('div');
            e.innerHTML = '';
            if (dots.indexOf(k) > -1) {
                e.setAttribute('class', 'dot');
            };
            d.appendChild(e);
        };

        if (i < 2) {
            let r1 = document.getElementById('boardRow1');
            r1.appendChild(d);
        } else {
            let r2 = document.getElementById('boardRow2');
            r2.appendChild(d);
        };
    };
};

function megaRoll() {
let dice1 = new Audio('dice_single.mp3');
let dice2 = new Audio('dice_double.mp3');
let diceN = document.querySelector('input[name = "dice"]:checked').value;

    if (sound) {
        console.log("sound");
        if (diceN == 1) {
            dice1.play();
            console.log("dice1");
        } else {
            console.log("dice2");
            dice2.play();
        }
    }

    rollButton = document.getElementById('rollBtn');
    rollButton.disabled = true;
    rollButton.innerHTML = '. . .';
    diceRollFake();
    setTimeout(diceRollFake, 200);
    setTimeout(diceRollFake, 400);

    setTimeout(diceRollTrue, 600);
    setTimeout(function() {
        rollButton.disabled = false;
        rollButton.innerHTML = 'Roll';
    }, 650);
};

function soundBtn() {
    let soundB = document.getElementById('soundBtn');
    if (sound) {
        sound = false;
        soundB.innerHTML = "Sound: Off";
        soundB.style.color = "red";
    } else {
        sound = true;
        soundB.innerHTML = "Sound: On";
        soundB.style.color = "greenyellow";
    }
};
