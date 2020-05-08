// nav bar
function nav() {
    let x = document.getElementById("navBar");
    if (x.className === "navBar") {
        x.className += " responsive";
    } else {
        x.className = "navBar";
    }
}

function navBtn() {
    let x = document.getElementById("icon");
    if (x.className === "icon") {
        x.className += " switch";
    } else {
        x.className = "icon";
    }
}

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