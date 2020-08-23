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
        d.innerHTML = `<img src="../images/dice${roll}.svg" class="diceImg">`;
        diceContainer.appendChild(d);
        d = 'sda ${roll} sda'
    };
}
