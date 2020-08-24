// clock
function clock() {
    var day = new Date();
    var h = day.getHours();
    var m = day.getMinutes();
    h = clockNum(h);
    m = clockNum(m);
    document.getElementById("clock").innerHTML = h + ":" + m;
    var t = setTimeout(clock, 1000);
}

function clockNum(c) {
    if (c < 10) {c = "0" + c};
    return c;
}

// dice roll
function randomDice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function diceRoll() {
    let diceNumber = document.querySelector('input[name = "dice"]:checked').value;
    let diceContainer = document.getElementById('diceBoard');

    diceContainer.innerHTML = '';

    for (i = 0; i < diceNumber; i++) {
        let roll = randomDice(1,9);
        let d = document.createElement('div');
        d.setAttribute('class', 'dice');
        d.innerHTML = '';

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

        diceContainer.appendChild(d);
    };
}
