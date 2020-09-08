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

// dice roll
var diceStats = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function randomDice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function diceRoll() {
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
        let roll = randomDice(1, diceMaxDots);
        let d = document.createElement('div');
        d.setAttribute('class', 'dice');
        d.innerHTML = '';

        diceStats[roll-1]++;


        let dots = [];
        switch (roll) {
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

    //stats update
    let d1 = document.getElementById('statsD1');
    d1.innerHTML = diceStats[0];
    let d2 = document.getElementById('statsD2');
    d2.innerHTML = diceStats[1];
    let d3 = document.getElementById('statsD3');
    d3.innerHTML = diceStats[2];
    let d4 = document.getElementById('statsD4');
    d4.innerHTML = diceStats[3];
    let d5 = document.getElementById('statsD5');
    d5.innerHTML = diceStats[4];
    let d6 = document.getElementById('statsD6');
    d6.innerHTML = diceStats[5];
    let d7 = document.getElementById('statsD7');
    d7.innerHTML = diceStats[6];
    let d8 = document.getElementById('statsD8');
    d8.innerHTML = diceStats[7];
    let d9 = document.getElementById('statsD9');
    d9.innerHTML = diceStats[8];
};
